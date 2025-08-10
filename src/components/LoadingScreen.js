// LoadingScreen.js
import React from 'react';

const LoadingScreen = ({ progress }) => {
  const loadedCount = Object.values(progress).filter(Boolean).length;
  const totalCount = Object.keys(progress).length;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <div className="text-xl font-semibold text-white">Loading Resources</div>
        <div className="text-sm text-gray-400">
          Loading Progress: {loadedCount}/{totalCount}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;