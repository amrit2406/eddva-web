import React from "react";

export function CustomLink({ to, children, className, variant = "button-glow" }) {
  const triggerHoverStart = () => {
    const event = new CustomEvent("cursorHoverStart", { detail: variant });
    window.dispatchEvent(event);
  };

  const triggerHoverEnd = () => {
    const event = new CustomEvent("cursorHoverEnd");
    window.dispatchEvent(event);
  };

  return (
    <a
      href={to}
      onMouseEnter={triggerHoverStart}
      onMouseLeave={triggerHoverEnd}
      className={`inline-block ${className}`}
    >
      {children}
    </a>
  );
}