// Research.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Research = () => {
  const navigate = useNavigate();
  
  const researchProjects = [
    {
      id: 'ecs-lab',
      title: "Agile Autonomous Quadrotor Control",
      institution: "Extreme Computing System (ECS) Lab, University of Bologna",
      date: "June 2024 – Present",
      description: "Implemented SNN for agile quadrotor control and navigate through complex environment...",
      image: process.env.PUBLIC_URL + "/drone.png",
      tags: ["Reinforcement Learning", "Spiking Neural Networks", "Artificial Neural Networks", "Isaac Gym", "Pytorch"]
    },
    {
      id: 'peac-lab',
      title: "HPC Systems Performance Analytics",
      institution: "Performance and Energy Aware Computing (PEAC) Lab, Boston University",
      date: "Feb 2023 – Sep 2024",
      description: "Focused on machine learning applicaitons for anomaly diagnosis in HPC systems...",
      image: process.env.PUBLIC_URL + "/hpc.png",
      tags: ["HPC Systems", "Generative Models", "Unsupervised Learning", "VAE", "Pytorch", "tensorflow"]
    },
    {
      id: 'academia-sinica',
      title: "AlphaZero for Planning Problems",
      institution: "Reinforcement Learning and Games Lab, Academia Sinica",
      date: "Oct 2023 – May 2024",
      description: "Focused on solving planning problems with DRL and AlphaZero algorithm...",
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
            className="research-card clickable"
            onClick={() => navigate(`/research/${project.id}`)}
          >
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