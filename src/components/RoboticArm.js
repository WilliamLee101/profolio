// src/components/RoboticArm.js
import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class RoboticArm extends React.Component {
  componentDidMount() {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0323);
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 12);
    camera.lookAt(0, 0, 0);
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Grid
    const grid = new THREE.GridHelper(8, 8);
    grid.position.y = -1;
    scene.add(grid);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // Start animation
    animate();

    // Load model
    const loader = new GLTFLoader();
    const modelPath = `${process.env.PUBLIC_URL}/crazyflie.glb`;

    loader.load(
      modelPath,
      (gltf) => {
        console.log('Model loaded successfully');
        const model = gltf.scene;
        
        // Set scale
        model.scale.set(35, 35, 35);
        
        // Set position
        model.position.set(0, 0, 0);
        
        // Initial rotation
        model.rotation.y = Math.PI / 4;
        
        scene.add(model);

        // Update animation function to include model animation
        const animateModel = () => {
          requestAnimationFrame(animateModel);
          
          // Gentle rotation
          model.rotation.y += 0.003;
          
          // Subtle floating movement
          model.position.y = Math.sin(Date.now() * 0.001) * 0.1;
          
          renderer.render(scene, camera);
        };

        // Start model animation
        animateModel();
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (this.mount) {
        this.mount.removeChild(renderer.domElement);
      }
    };
  }

  render() {
    return (
      <div 
        ref={ref => (this.mount = ref)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.8
        }}
      />
    );
  }
}

export default RoboticArm;