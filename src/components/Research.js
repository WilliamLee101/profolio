// Research.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Research = () => {
  const navigate = useNavigate();
  
  const researchProjects = [
    {
      id: 'bu-icpe',
      title: "In-Context Pure Exploration in Continuous Decision Spaces",
      institution: "PLAIA Group, Boston University",
      date: "Oct 2025 – Present",
      description: "Developing C-ICPE, a meta-trained neural agent for adaptive hypothesis identification in continuous spaces. Uses a learned Gaussian posterior and a DQN-style stopping critic — preprint on arXiv, with an oral presentation at the ICML 2026 Workshop on Hypothesis Testing.",
      image: process.env.PUBLIC_URL + "/ackley_exploration_3d.png",
      tags: ["Meta-Learning", "Pure Exploration", "Thompson Sampling", "In-Context Learning", "Bayesian Inference", "Pytorch"],
      featured: true
    },
    {
      id: 'ecs-lab',
      title: "Agile Autonomous Quadrotor Control",
      institution: "Extreme Computing System (ECS) Lab, University of Bologna",
      date: "June 2024 – Aug 2025",
      description: "Implemented Spiking Neural Networks for RL-based agile quadrotor navigation through dynamic gate environments. Achieved 2.47% higher success rate and 28.57% faster completion vs. standard ANNs.",
      image: process.env.PUBLIC_URL + "/drone.png",
      tags: ["Reinforcement Learning", "Spiking Neural Networks", "Isaac Gym", "Pytorch"]
    },
    {
      id: 'peac-lab',
      title: "HPC Systems Performance Analytics",
      institution: "Performance and Energy Aware Computing (PEAC) Lab, Boston University",
      date: "Feb 2023 – Sep 2024",
      description: "Built an unsupervised GAN+VAE anomaly detection framework for HPC systems, achieving 88% F1-score despite 10% training contamination. Deployed as a public AWS/Docker web application.",
      image: process.env.PUBLIC_URL + "/hpc.png",
      tags: ["HPC Systems", "Generative Models", "Unsupervised Learning", "VAE", "Pytorch"]
    },
    {
      id: 'academia-sinica',
      title: "AlphaZero for Planning Problems",
      institution: "Reinforcement Learning and Games Lab, Academia Sinica",
      date: "Oct 2023 – May 2024",
      description: "Designed curriculum learning and backward state-space search algorithms for AlphaZero on Sokoban, improving the solving rate from 25% to 56%.",
      image: process.env.PUBLIC_URL + "/sokoban.png",
      tags: ["Deep Learning", "AlphaZero", "Reinforcement Learning", "MCTS", "C++", "Python"]
    }
  ];

  return (
    <section className="research">
      <h2>Research Experience</h2>
      <div className="research-grid" style={{ marginBottom: '100px' }}>
        {researchProjects.map((project) => (
          <div
            key={project.id}
            className={`research-card clickable${project.featured ? ' research-card-featured' : ''}`}
            onClick={() => navigate(`/research/${project.id}`)}
          >
            {project.featured && (
              <div className="featured-badge">★ FEATURED · arXiv 2026</div>
            )}
            <div className="research-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="research-content">
              <h3>{project.title}</h3>
              <h4>{project.institution}</h4>
              <p className="date">{project.date}</p>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <p className="intro max-w-2xl mx-auto text-center text-base text-gray-400 text-sm">
          Credit to the drone photo by <a href="https://unsplash.com/photos/drone-flying-in-sky-XYrjl3j7smo">[Jason Mavrommatis]</a> on 
          <a href="https://unsplash.com"> Unsplash</a>, used under <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash License</a>. Modified for this portfolio.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="intro max-w-2xl mx-auto text-center text-base text-gray-400 text-sm">
          Credit to the supercomputer photo by <a href="https://commons.wikimedia.org/wiki/File:Tryton_supercomputer_Gdansk_University_of_Technology_2015.jpg">[Tomasz Ziółkowski]</a> on 
          <a href="https://www.wikimedia.org"> Wikimedia</a>, used under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en" target="_blank" rel="noopener noreferrer">CC BY 3.0 License</a>. Modified for this portfolio.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="intro max-w-2xl mx-auto text-center text-base text-gray-400 text-sm">
          Credit to the sokoban photo by <a href="https://commons.wikimedia.org/wiki/File:Sokoban_ani.gif">[Borgar Þorsteinsson, Carlos Montiers Aguilera]</a> on 
          <a href="https://www.wikimedia.org"> Wikimedia</a>, used under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0 License</a>. Modified for this portfolio.
        </p>
      </div>
    </section>
  );
};

export default Research;