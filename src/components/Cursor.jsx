import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");

  // Fast-tracking exact mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the fluid trailing ring
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const trailingX = useSpring(mouseX, springConfig);
  const trailingY = useSpring(mouseY, springConfig);

  // Track cursor velocity to dynamically distort/stretch the shape
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let timeout;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Calculate velocity vectors
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      const speed = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 150);

      // Distort shape based on speed (stretches along the travel vector)
      if (cursorType === "default" && speed > 5) {
        setScaleX(1 + speed * 0.004);
        setScaleY(1 - speed * 0.002);
        
        // Calculate angle of movement so it stretches in the right direction
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotation(angle);
      }

      lastX = e.clientX;
      lastY = e.clientY;

      // Snap back to a perfect circle when the mouse stops moving
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScaleX(1);
        setScaleY(1);
      }, 80);
    };

    // Listen for custom hover events dispatched by interactive elements
    const handleHoverStart = (e) => setCursorType(e.detail || "pointer");
    const handleHoverEnd = () => {
      setCursorType("default");
      setScaleX(1);
      setScaleY(1);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("cursorHoverStart", handleHoverStart);
    window.addEventListener("cursorHoverEnd", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("cursorHoverStart", handleHoverStart);
      window.removeEventListener("cursorHoverEnd", handleHoverEnd);
      clearTimeout(timeout);
    };
  }, [mouseX, mouseY, cursorType]);

  return (
    <>
      {/* 1. Core Pointer (Instant, zero lag for high utility) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 2. Outer Liquid/Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full hidden md:block"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType === "button-glow" ? 80 : 36,
          height: cursorType === "button-glow" ? 80 : 36,
          backgroundColor: cursorType === "button-glow" ? "rgba(37, 99, 235, 0.2)" : "rgba(15, 23, 42, 0)",
          border: cursorType === "button-glow" ? "1px solid rgba(37, 99, 235, 0.5)" : "2px solid rgb(15, 23, 42)",
          scaleX: cursorType === "default" ? scaleX : 1,
          scaleY: cursorType === "default" ? scaleY : 1,
          rotate: cursorType === "default" ? rotation : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5
        }}
      />
    </>
  );
}