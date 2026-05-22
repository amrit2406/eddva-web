/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import logo from '../../assets/logo.svg';

// Inject MeshLine nodes into the R3F catalog
extend({ MeshLineGeometry, MeshLineMaterial });

/**
 * Generates a clean woven ribbon texture for the lanyard string strip
 */
function createProceduralRibbonTexture(text = "EDDVA PREMIUM") {
  if (typeof window === 'undefined') return null;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0066cc';
    ctx.fillRect(0, 0, canvas.width, 4);
    ctx.fillStyle = '#00a6ff';
    ctx.fillRect(0, canvas.height - 4, canvas.width, 4);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px sans-serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    
    for (let i = 0; i < 4; i++) {
      const x = (canvas.width / 4) * i + (canvas.width / 8);
      ctx.fillText(text, x, canvas.height / 2);
    }
  }
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export default function LanyardHero() {
  return (
    <div className="relative w-full h-screen flex flex-col md:flex-row bg-white text-white overflow-hidden font-sans">
      
      {/* LEFT SECTION: The Interactive 3D ID Badge Canvas */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative z-10">
        <Canvas
          camera={{ position: [0, 0, 11], fov: 25 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
          
          <Physics gravity={[0, -40, 0]}>
            <Band />
          </Physics>

          <Environment blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="#0066cc" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Canvas>
      </div>

      {/* RIGHT SECTION: The Heading Content Layout */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-20 pointer-events-none md:pointer-events-auto select-none md:select-text">
        <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-3">
          Welcome to the Future
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Empowering Next-Gen Digital Learning.
        </h1>
        <p className="mt-6 text-slate-400 text-lg max-w-lg leading-relaxed">
          Discover interactive engineering layouts, immersive development concepts, and custom vector environments tailored for modern web apps.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl font-medium shadow-lg shadow-blue-600/20">
            Get Started
          </button>
          <button className="px-6 py-3 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors rounded-xl font-medium">
            Documentation
          </button>
        </div>
      </div>

    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

  // 1. Loads your actual remote SVG Logo onto the 3D plane
  const logoTexture = useLoader(THREE.TextureLoader, logo);
  
  // 2. Load the woven string ribbon track
  const ribbonTexture = useMemo(() => createProceduralRibbonTexture("EDDVA LEARNING"), []);

  const [curve] = useState(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  // Bind joint constraints
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.4, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(32));
      
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]}>
        {/* Physics anchors for the ribbon string */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        {/* The Dragable Card Asset */}
        <RigidBody position={[0, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.2, 0.05]} />
          
          <group
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target.setPointerCapture(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
            )}
          >
            {/* Outer Premium Casing Structure */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.7, 2.5, 0.08]} />
              <meshPhysicalMaterial 
                color="#0f172a" 
                roughness={0.15} 
                metalness={0.3} 
                clearcoat={1} 
                clearcoatRoughness={0.05} 
              />
            </mesh>

            {/* White Glossy Insert Base Sheet */}
            <mesh position={[0, 0, 0.041]}>
              <planeGeometry args={[1.5, 2.3]} />
              <meshPhysicalMaterial color="#ffffff" roughness={0.3} clearcoat={0.5} />
            </mesh>

            {/* YOUR LOGO: Maps the SVG texture cleanly in the center of the card face */}
            {logoTexture && (
              <mesh position={[0, 0.1, 0.043]}>
                <planeGeometry args={[1.1, 1.1]} />
                <meshBasicMaterial map={logoTexture} transparent={true} depthWrite={true} />
              </mesh>
            )}

            {/* Minimalist Professional Bottom Text Strip */}
            <mesh position={[0, -0.75, 0.043]}>
              <planeGeometry args={[1.1, 0.15]} />
              <meshBasicMaterial color="#0066cc" />
            </mesh>

            {/* Back Side of the Card (Clean aesthetic view when flipped around) */}
            <mesh position={[0, 0, -0.045]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[1.5, 2.3]} />
              <meshPhysicalMaterial color="#f8fafc" roughness={0.4} />
            </mesh>

            {/* Metallic Hanging Clip Clip-Ring Link */}
            <mesh position={[0, 1.35, 0]}>
              <torusGeometry args={[0.12, 0.025, 12, 24]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.95} roughness={0.05} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* Physics Rope Strand Layer */}
      {ribbonTexture && (
        <mesh ref={band}>
          <meshLineGeometry />
          <meshLineMaterial
            color="white"
            depthTest={true}
            resolution={[1000, 1000]}
            useMap={1}
            map={ribbonTexture}
            repeat={[-3, 1]}
            lineWidth={0.32}
          />
        </mesh>
      )}
    </>
  );
}