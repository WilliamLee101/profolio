import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const NavigationDrone = ({ activeTab }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const droneRef = useRef(null);
  const rotorsRef = useRef([]);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(0);
  
  useEffect(() => {
    let isComponentMounted = true;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = window.innerWidth;
    const height = 100;
    const aspect = width / height;
    
    const camera = new THREE.OrthographicCamera(
      -aspect * 30,
      aspect * 30,
      30,
      -30,
      0.1,
      1000
    );
    camera.position.set(0, 0, 20);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load drone model
    const loader = new GLTFLoader();
    loader.load(
      `${process.env.PUBLIC_URL}/drone.glb`,
      (gltf) => {
        if (!isComponentMounted) return;

        const drone = gltf.scene;
        drone.scale.set(20, 20, 20);
        drone.position.set(0, 2, 0);
        drone.rotation.y = Math.PI / 2;
        
        droneRef.current = drone;
        scene.add(drone);

        // Store rotor references
        const rotorObjects = [
          'Object_246', 'Object_249', 'Object_252', 'Object_255',
          'Object_258', 'Object_261', 'Object_264', 'Object_267'
        ];
        
        rotorsRef.current = [];
        drone.traverse((child) => {
          if (child.isMesh && rotorObjects.includes(child.name)) {
            rotorsRef.current.push(child);
          }
        });

        updateDronePosition(activeTab);
      },
      undefined,
      (error) => console.error('Error loading drone:', error)
    );

    const animate = (currentTime) => {
      if (!isComponentMounted) return;

      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (droneRef.current) {
        const drone = droneRef.current;
        const floatOffset = Math.sin(currentTime * 0.001) * 2.0;
        const tiltAngle = Math.cos(currentTime * 0.001) * 0.1;

        drone.position.y = 2 + floatOffset;
        drone.rotation.z = tiltAngle;

        rotorsRef.current.forEach((rotor, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          rotor.rotation.y += 0.5 * direction * deltaTime;
        });
      }

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!isComponentMounted) return;

      const newWidth = window.innerWidth;
      const newHeight = 100;
      const newAspect = newWidth / newHeight;
      
      camera.left = -newAspect * 30;
      camera.right = newAspect * 30;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
      updateDronePosition(activeTab);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isComponentMounted = false;
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      
      window.removeEventListener('resize', handleResize);
      
      // Clean up THREE.js resources
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  const updateDronePosition = (tab) => {
    if (!droneRef.current) return;

    const tabElement = document.querySelector(`[data-tab="${tab}"]`);
    if (!tabElement) return;

    const rect = tabElement.getBoundingClientRect();
    const nav = document.querySelector('.nav-right');
    if (!nav) return;

    const navRect = nav.getBoundingClientRect();
    const normalizedX = (rect.left + (rect.width / 2) - navRect.left) / navRect.width;
    const positionX = (normalizedX * 2 - 1) * 200 + navRect.width * 0.085 + rect.width / 2;
    
    if (droneRef.current) {
      droneRef.current.position.x = THREE.MathUtils.lerp(
        droneRef.current.position.x,
        positionX,
        0.05
      );
    }
  };

  useEffect(() => {
    updateDronePosition(activeTab);
  }, [activeTab]);

  return (
    <div 
      ref={mountRef}
      style={{
        position: 'fixed',
        top: '0px',
        left: 0,
        width: '100%',
        height: '100px',
        pointerEvents: 'none',
        zIndex: 1000
      }}
    />
  );
};

export default NavigationDrone;