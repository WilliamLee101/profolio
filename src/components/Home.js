import React from 'react';
import { useNavigate } from 'react-router-dom';
import Skills from './Skills';
import Contact from './Contact';

const Home = () => {
  const navigate = useNavigate();

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
            ML Researcher — teaching agents to explore and reason with confidence.
          </p>
          {/* <div className="hero-badges">
            <span className="hero-badge">Meta-Learning</span>
            <span className="hero-badge">Pure Exploration</span>
            <span className="hero-badge">Robotics</span>
          </div> */}
        </div>

        <p className="intro max-w-2xl mx-auto text-center text-base" style={{ marginTop: '1.5rem' }}>
          I'm a research assistant at BU's PLAIA group, advised by Prof. <a href="https://www.aldopacchiano.ai/#about" target="_blank" rel="noopener noreferrer" className="person-link">Aldo Pacchiano</a> and Dr. <a href="https://www.alessiorusso.net" target="_blank" rel="noopener noreferrer" className="person-link">Alessio Russo</a>, working on <strong>reinforcement learning</strong> for sequential decision-making under uncertainty.
          My current research asks: how can an agent learn to adaptively gather information, reason under uncertainty,
          and know when it has enough evidence to commit to a guaranteed recommendation? I am generally interested in topics like <strong>reinforcement learning</strong>, <strong>bayesian inference</strong>, <strong>sequential decision-making</strong>, <strong>uncertainty qunaitification</strong>, <strong>robotics</strong>, <strong>reasoning</strong>.
        </p>

        <div className="research-focus-card" onClick={() => navigate('/research/bu-icpe')} style={{ cursor: 'pointer' }}>
          <div className="research-focus-header">
            <span className="focus-label">★ FEATURED RESEARCH</span>
            <span className="focus-badge">arXiv 2026</span>
          </div>
          <h3 className="focus-title">In-Context Pure Exploration in Continuous Decision Spaces</h3>
          <p className="focus-desc">
            Introducing <strong>C-ICPE</strong> — a theory-guided, meta-trained neural agent that adaptively learns to query, stop, and make inference on a recommendation in the continuous space, with (ε, δ)-PAC objective.
            Preprint on arXiv; presented as an oral at the ICML 2026 Workshop on Hypothesis Testing.
          </p>
          <div className="focus-tags">
            <span className="focus-tag">Pure Exploration</span>
            <span className="focus-tag">Reinforcement Learning</span>
            <span className="focus-tag">Best-Arm Identification</span>
            <span className="focus-tag">Function Optimization</span>
          </div>
          <span className="focus-cta">View Research →</span>
        </div>

        <Skills />

        <div style={{ marginBottom: '100px' }}>
          <Contact />
        </div>

        {/* <div className="flex justify-center">
          <p className="intro max-w-2xl mx-auto text-center text-base text-gray-400 text-sm">
            Credit to the Crazyflie Model by <a href="https://sketchfab.com/3d-models/crazyflie-2x-7b3ef11ebced4bfdb91bd756bfae46a5" target="_blank" rel="noopener noreferrer">re1monsen</a>, used under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0 License</a>. Modified for this portfolio.
          </p>
        </div> */}

      </section>
    </div>
  );
};

export default Home;