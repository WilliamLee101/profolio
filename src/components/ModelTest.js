// src/components/ModelTest.js
import React from 'react';

const ModelTest = () => {
  const testModelPath = () => {
    fetch(`${process.env.PUBLIC_URL}/robotic_arm.glb`)
      .then(response => {
        console.log('File fetch response:', response);
        if (!response.ok) throw new Error('File not found');
      })
      .then(() => console.log('File exists!'))
      .catch(error => console.error('File access error:', error));
  };

  React.useEffect(() => {
    testModelPath();
  }, []);
};

export default ModelTest;