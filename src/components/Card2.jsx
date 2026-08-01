import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function FriendlyRobot() {
  const robotRef = useRef();
  const headRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame hooks directly into the viewport render loops
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // 1. Maintain the soft, cheerful body float
    robotRef.current.position.y = Math.sin(time * 1.8) * 0.08; 

    // 2. Track mouse position to make the head smoothly look around
    // state.pointer.x and state.pointer.y range from -1 to 1 based on screen bounds
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.3;

    // Linear interpolation (lerp) creates smooth fluid transitions instead of sharp jumps
    headRef.current.rotation.y += (targetX - headRef.current.rotation.y) * 0.1;
    headRef.current.rotation.x += (-targetY - headRef.current.rotation.x) * 0.1;
  });

  const bodyMaterial = (
    <meshStandardMaterial 
      color="#ffffff" 
      roughness={0.1} 
      metalness={0.1}
    />
  );

  const accentMaterial = (
    <meshStandardMaterial 
      color={hovered ? '#4fc3f7' : '#29b6f6'} 
      roughness={0.2} 
      metalness={0.2}
    />
  );

  return (
    <group 
      ref={robotRef} 
      scale={active ? Array.of(1.25, 1.25, 1.25) : Array.of(1, 1, 1)}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Torso Base */}
      <mesh position={Array.of(0, -0.3, 0)}>
        <sphereGeometry args={Array.of(0.65, 32, 32)} />
        {bodyMaterial}
      </mesh>

      {/* Accent Belly Plate */}
      <mesh position={Array.of(0, -0.25, 0.42)} rotation={Array.of(0.2, 0, 0)}>
        <sphereGeometry args={Array.of(0.35, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2)} />
        {accentMaterial}
      </mesh>

      {/* HEAD GROUP (Controlled by mouse tracking hook script) */}
      <group ref={headRef} position={Array.of(0, 0.5, 0)}>
        
        {/* Head Capsule */}
        <mesh position={Array.of(0, 0, 0)}>
          <sphereGeometry args={Array.of(0.55, 32, 32)} />
          {bodyMaterial}
        </mesh>

        {/* Ear Nodes */}
        <mesh position={Array.of(0.58, 0, 0)} rotation={Array.of(0, 0, Math.PI / 2)}>
          <cylinderGeometry args={Array.of(0.12, 0.12, 0.1, 16)} />
          {accentMaterial}
        </mesh>
        <mesh position={Array.of(-0.58, 0, 0)} rotation={Array.of(0, 0, Math.PI / 2)}>
          <cylinderGeometry args={Array.of(0.12, 0.12, 0.1, 16)} />
          {accentMaterial}
        </mesh>

        {/* Left Glowing Eye */}
        <mesh position={Array.of(0.18, 0.05, 0.48)}>
          <sphereGeometry args={Array.of(0.09, 16, 16)} />
          <meshStandardMaterial 
            color={hovered ? '#64ffda' : '#00e5ff'} 
            emissive={hovered ? '#64ffda' : '#00e5ff'} 
            emissiveIntensity={1.5} 
          />
        </mesh>

        {/* Right Glowing Eye */}
        <mesh position={Array.of(-0.18, 0.05, 0.48)}>
          <sphereGeometry args={Array.of(0.09, 16, 16)} />
          <meshStandardMaterial 
            color={hovered ? '#64ffda' : '#00e5ff'} 
            emissive={hovered ? '#64ffda' : '#00e5ff'} 
            emissiveIntensity={1.5} 
          />
        </mesh>
        
      </group>
    </group>
  );
}

export default function Card2() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col items-center justify-center relative select-none">
      
      {/* Interactive HUD Directions */}
      <div className="absolute top-24 text-center z-10 pointer-events-none">
        <h2 className="text-slate-800 text-3xl font-extrabold mb-2 tracking-wide">
          Your Responsive Assistant
        </h2>
        <p className="text-slate-500 text-sm font-medium">
          Move your mouse across the screen to look around • Click to resize
        </p>
      </div>

      {/* Bright Studio Frame Container */}
      <div className="w-full h-[70vh] max-w-4xl border border-slate-200 rounded-3xl bg-gradient-to-b from-blue-50 to-slate-100 shadow-xl overflow-hidden relative">
        <Canvas camera={{ position: Array.of(0, 0.3, 2.8), fov: 50 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={Array.of(5, 8, 5)} intensity={1.8} color="#ffffff" />
          <directionalLight position={Array.of(-5, 3, -2)} intensity={0.6} color="#e0f7fa" />
          <pointLight position={Array.of(0, -2, 2)} intensity={0.4} />
          
          <FriendlyRobot />
          
          {/* OrbitControls allows dragging the whole scene, mouse tracker controls the head */}
          <OrbitControls enableZoom={false} makeDefault />
        </Canvas>
      </div>
    </div>
  );
}
