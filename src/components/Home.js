import React from 'react';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="hero py-12">
        <div className="hero-content flex flex-col items-center text-center">
          <div className="relative w-[200px] h-[200px] mb-6">
            <img 
              src={`${process.env.PUBLIC_URL}/profile_2.png`} 
              alt="William Lee" 
              className="rounded-full object-cover w-full h-full shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-3">
            Hello! I am <span className="highlight">Yin-Ching (William) Lee</span>
          </h1>
          <p className="tagline text-lg mb-4">
            A ML Researcher whose reward function spikes at the sight of a coffee cup!!!
          </p>
        </div>
        <p className="intro max-w-2xl mx-auto text-center text-base">
          I'm a Master's student currently studying Computer Science at Boston University.
          My passion lies in creating innovative solutions to complex problems. And my research interests are robotics, RL, and computer visions, I aim to contribute to the advancement of autonomous control systems. 
        </p>
        <Skills />
        
        {/* Wrap Contact in a div with margin */}
        <div style={{ marginBottom: '100px' }}>
          <Contact />
        </div>

        <div className="flex justify-center">
          <p className="intro max-w-2xl mx-auto text-center text-base text-gray-400 text-sm">
            Credit to the Robotic Arm Model by <a href="https://sketchfab.com/3d-models/black-honey-robotic-arm-c50671f2a8e74de2a2e687103fdc93ab" target="_blank" rel="noopener noreferrer">re1monsen</a>, used under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0 License</a>. Modified for this portfolio.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Home;