// RoboticScene.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function RoboticDog({ position }) {
  const dogRef = useRef();
  const { nodes, materials } = useGLTF('/robot-dog.glb');

  useFrame(({ mouse }) => {
    // Interactive movement based on mouse position
    dogRef.current.rotation.y = mouse.x * Math.PI / 4;
    dogRef.current.position.x = mouse.x * 2;
  });

  return (
    <mesh
      ref={dogRef}
      position={position}
      geometry={nodes.RoboticDog.geometry}
      material={materials.RoboticDog}
    />
  );
}

function Drone({ position }) {
  const droneRef = useRef();

  useFrame(({ clock }) => {
    // Hovering animation
    droneRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.5;
    droneRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
  });

  return (
    <mesh ref={droneRef} position={position}>
      {/* Simple drone geometry */}
      <boxGeometry args={[1, 0.2, 1]} />
      <meshStandardMaterial color="#00f0ff" opacity={0.5} transparent />
    </mesh>
  );
}

const RoboticScene = () => {
  return (
    <div className="robotic-scene">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        
        <RoboticDog position={[0, 0, 0]} />
        <Drone position={[2, 2, 0]} />
        
        {/* Add more robotic elements as needed */}
      </Canvas>
    </div>
  );
};

export default RoboticScene;