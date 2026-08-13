import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AUTHOR_LINKS = {
  'Aldo Pacchiano': 'https://www.aldopacchiano.ai/#about',
  'Alessio Russo': 'https://www.alessiorusso.net'
};

const renderAuthors = (authors) =>
  authors.split(', ').map((part, index, arr) => {
    const name = part.replace('*', '');
    const suffix = part.includes('*') ? '*' : '';
    const url = AUTHOR_LINKS[name];
    return (
      <React.Fragment key={index}>
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="person-link">{name}</a>
        ) : name}
        {suffix}
        {index < arr.length - 1 ? ', ' : ''}
      </React.Fragment>
    );
  });

const ResearchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);

  const researchDetails = {
    'bu-icpe': {
      title: "In-Context Pure Exploration in Continuous Decision Spaces (C-ICPE)",
      institution: "Pacchiano Lab, Boston University",
      date: "Oct 2025 – Present",
      overview: "We introduce C-ICPE, a theory-guided method that learns to collect data, stop, and recommend directly from " +
        "trajectories in continuous recommendation spaces. This type of (ε, δ)-PAC exploration directly addresses problems " +
        "in experimental sciences such as materials discovery and dose-finding, where each trial is costly, " +
        "observations are noisy, and practitioners need not just a good answer but a guarantee that the answer is " +
        "ε-correct with a given confidence.",
      achievements: [
        "Derived Lagrangian dual formulation motivating a stop/continue Bellman structure for the fixed-confidence regime",
        "Proved measurable Bellman attainment over continuous action spaces",
        "Established correctness under non-unique dual minimizers via a local closedness and subdifferential argument",
        "Trained a DQN-style stopping critic with adaptive per-step cost tuning to hit target confidence 1−δ",
        "Performed on wide range of synethetic and realistic benchmarks: Ackley Function, Binary Search, ε-best arm identification, GP value estimation problem, Geochemical Exploration.",
        "Compared against different basline methods: GP, TPE, and CMA-ES.",
        "Demonstrated (1-δ)-accuracy with sample complexity significantly lower than the baselines.",
        "Showed robust generalization to prior misspecification"
      ],
      technologies: ["Meta-Learning", "Thompson Sampling", "In-Context Learning", "Bayesian Inference", "Reinforcement Learning", "DQN", "LSTM", "Transformer", "Pytorch", "Pure Exploration", "Bayesian Optimization"],
      publications: [
        "Preprint on arXiv (arXiv:2602.17976v2, Aug 2026)",
        "Accepted (Oral) at the ICML 2026 Workshop on Hypothesis Testing, Seoul, South Korea",
        "Accepted at the ICML 2026 Workshop: Decision-Making from Offline Datasets to Online Adaptation — Black-Box Optimization to Reinforcement Learning"
      ],
      papers: [
        {
          title: "In-Context Pure Exploration in Continuous Decision Spaces",
          venue: "arXiv preprint",
          authors: "Alessio Russo*, Yin-Ching Lee*, Ryan Welch, Aldo Pacchiano",
          link: "https://arxiv.org/abs/2602.17976",
          status: "PREPRINT"
        }
      ],
      media: [
        {
          type: 'image',
          src: process.env.PUBLIC_URL + '/ackley_exploration_3d.png',
          caption: 'Learned exploration trajectory converging to the global optimum of the 2D Ackley function'
        }
      ]
    },
    'ecs-lab': {
      title: "Autonomous Agile Flights in Dynamic Environments",
      institution: "Extreme Computing System (ECS) Lab, University of Bologna",
      date: "June 2024 – Aug 2025",
      overview: "Implemented Spiking Neural Networks (SNN) for agile quadrotor control and navigation through complex environments.",
      achievements: [
        "Developed Spike Neural Networks (SNN) for reinforcement learning-based control",
        "Implemented and integrated a quadrotor environment to IssacGym simulation environment",
        "Crafted population-coded encoding schemes to dramatically enhance SNN representation capacity",
        "Performed comprehensive analysis of trajectories in 2D and 3D spaces",
        "Performed analysis on the GPU utilization and power consumption during the inference phase",
        "Achieved 2.47% improvement in success rate and 28.57% reduction in completion time for autonomous navigation through five swinging gates compared to traditional ANN"
      ],
      technologies: ["Reinforcement Learning", "Spiking Neural Networks", "Artificial Neural Networks", "Isaac Gym", "Pytorch", "SKRL", "Population Based Training", "Control Barrier Functions", "Model Predictive Control"],
      publications: [
        "First-authored a research paper to IEEE COINS 2025 conference (accepted)",
      ],
      papers: [
        {
          title: "Bio-Inspired Drone Control: A Reinforcement Learning-Trained Spiking Neural Networks for Agile Navigation in Dynamic Environment",
          venue: "2025 IEEE International Conference on Omni-layer Intelligent Systems (COINS)",
          authors: "Yin-Ching Lee, Sebastiano Mengozzi, Luca Zanatta, Andrea Bartolini, Andrea Acquaviva, Francesco Barchi",
          link: "https://ieeexplore.ieee.org/abstract/document/11125776",
          status: "ACCEPTED"
        },
      ],
      media: [
        {
          type: 'video',
          src: process.env.PUBLIC_URL + '/quadrotor_sim.mov',
        },
        {
          type: 'image',
          src: process.env.PUBLIC_URL + '/2d_traj_comp.png',
          caption: '2D Trajectories Analysis / Comparison with ANN'
        },
        {
          type: 'image',
          src: process.env.PUBLIC_URL + '/heat_map_compare.png',
          caption: 'Success Rate Comparison with ANN'
        },
        {
          type: 'image',
          src: process.env.PUBLIC_URL + '/metric_comp.png',
          caption: 'Other Metrics Comparisons'
        }
      ]
    },
    'peac-lab': {
      title: "HPC Systems Performance Analytics",
      institution: "Performance and Energy Aware Computing (PEAC) Lab, Boston University",
      date: "Feb 2023 – Sep 2024",
      overview: "Specialized in applying machine learning for anomaly diagnosis / detection in HPC systems.",
      achievements: [
        "Developed a robust unsupervised framework for contaminated datasets",
        "Achieved an 88% F1-score despite 10% training data contamination",
        "Implemented a state-of-art GAN+VAE model from scratch",
        "Conducted comprehensive comparative analysis of various methods",
        "Deployed a publicly accessible HPC Analytics Web-based Application Suite using AWS and Docker"
      ],
      technologies: ["HPC Systems", "Generative Models", "Unsupervised Learning", "Variational Autoencoder", "Pytorch", "tensorflow"],
      publications: [
        "Co-authored a research paper to ISC-HPC'25 conference as the second contributor (accepted)",
        "Co-authored a workshop paper to AAAI'25 workshop as the second contributor (accepted)",
        "Presented a project poster at the ISC-HPC'24 conference",
        "Presented a research poster at the DATE'23 conference",
        "Presented a tutorial at the LDMSCON'24 conference"
      ],
      papers: [
        {
          title: "Refine: Robust Unsupervised Anomaly Detection for Production HPC Systems",
          venue: "ISC High Performance 2025",
          authors: "Efe Sencan, Yin-Ching Lee, Connor Casey, Benjamin Schwaller, Vitus J Leung, Jim Brandt, Brian Kulis, Manuel Egele, Ayse K Coskun",
          link: "https://ieeexplore.ieee.org/document/11018307",
          status: "ACCEPTED"
        },
      ],
      media: [
        {
          type: 'image',
          src: process.env.PUBLIC_URL + '/hpc1.png'
        },
        {
          type: 'image',
          src: process.env.PUBLIC_URL + '/hpc2.png'
        }
      ]
    },
    'academia-sinica': {
      title: "AlphaZero for Planning Problems",
      institution: "Reinforcement Learning and Games Lab, Academia Sinica",
      date: "Oct 2023 – May 2024",
      overview: "Focused on solving planning problems with DRL and AlphaZero algorithm.",
      achievements: [
        "Designed a novel internal and external curriculum learning algorithm",
        "Improved solving rate from 25% to 56%",
        "Devised a Backward State Space Search algorithm to improve the robustness of the model",
        "Incorporated a Proof-Cost Network for difficulty prediction on Sokoban instances, optimizing the model's curriculum learning process"
      ],
      technologies: ["Deep Learning", "AlphaZero", "Reinforcement Learning", "MCTS", "C++", "Python", "Pytorch"],
      publications: [],
      media: [
        {
          type: 'gif',
          src: process.env.PUBLIC_URL + '/sokoban.gif'
        }
      ]
    }
  };

  const research = researchDetails[id];

  if (!research) {
    return <div>Research project not found</div>;
  }

  // Open modal with the clicked image
  const openModal = (item) => {
    setModalImage(item);
  };

  // Close the modal
  const closeModal = () => {
    setModalImage(null);
  };

  const renderMedia = (item, index) => {
    switch (item.type) {
      case 'video':
        return (
          <div key={index} className="research-media-container">
            <video 
              controls
              autoPlay
              muted
              loop
              className="research-media"
            >
              <source src={item.src} type="video/quicktime" />
              <source src={item.src.replace('.mov', '.mp4')} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case 'image':
        return (
          <div key={index} className="research-media-container">
            <div className="image-wrapper">
              <img 
                src={item.src} 
                alt={item.caption || research.title} 
                className="research-media clickable-image"
                onClick={() => openModal(item)}
              />
              <div className="zoom-icon" onClick={() => openModal(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  <path fill="currentColor" d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"/>
                </svg>
              </div>
            </div>
            {item.caption && (
              <p className="media-caption">{item.caption}</p>
            )}
          </div>
        );
      case 'gif':
        return (
          <div key={index} className="research-media-container">
            <div className="image-wrapper">
              <img 
                src={item.src} 
                alt={research.title} 
                className="research-media clickable-image"
                onClick={() => openModal(item)}
              />
              <div className="zoom-icon" onClick={() => openModal(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  <path fill="currentColor" d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"/>
                </svg>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="research-detail">
      <button 
        onClick={() => navigate('/research')} 
        className="back-button"
      >
        ← Back to Research
      </button>

      <div className="research-detail-content">
        <div className="research-detail-header">
          <h2>{research.title}</h2>
          <h3>{research.institution}</h3>
          <p className="date">{research.date}</p>
        </div>

        <div className="research-detail-body">
          <div className="research-detail-media">
            {research.media.map((item, index) => renderMedia(item, index))}
          </div>

          <div className="research-detail-info">
            <section>
              <h4>Overview</h4>
              <p>{research.overview}</p>
            </section>

            <section>
              <h4>Key Achievements</h4>
              <ul>
                {research.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </section>

            <section>
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {research.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </section>

            {research.publications.length > 0 && (
              <section>
                <h4>Publications & Presentations</h4>
                <ul>
                  {research.publications.map((pub, index) => (
                    <li key={index}>{pub}</li>
                  ))}
                </ul>
              </section>
            )}
            
            {research.papers && research.papers.length > 0 && (
              <section className="papers-section">
                <h4>Research Papers</h4>
                <div className="papers-list">
                  {research.papers.map((paper, index) => (
                    <div key={index} className="paper-item">
                      <h5 className="paper-title">
                        <a href={paper.link} target="_blank" rel="noopener noreferrer">
                          {paper.title}
                        </a>
                      </h5>
                      <p className="paper-authors">{renderAuthors(paper.authors)}</p>
                      <div className="paper-meta">
                        <span className="paper-venue">{paper.venue}</span>
                        <span className={`paper-status ${paper.status.toLowerCase().replace(' ', '-')}`}>
                          {paper.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>×</button>
            <img 
              src={modalImage.src} 
              alt={modalImage.caption || research.title} 
              className="modal-image"
            />
            {modalImage.caption && (
              <p className="modal-caption">{modalImage.caption}</p>
            )}
          </div>
        </div>
      )}

      {/* Add these CSS styles to your CSS file */}
      <style jsx>{`
        .image-wrapper {
          position: relative;
          display: inline-block;
          overflow: hidden;
        }
        
        .clickable-image {
          cursor: pointer;
          transition: transform 0.2s;
        }
        
        .clickable-image:hover {
          transform: scale(1.03);
        }
        
        .zoom-icon {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s ease;
          z-index: 5;
        }
        
        .image-wrapper:hover .zoom-icon {
          opacity: 1;
        }
        
        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
        }
        
        .image-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          background-color: #0c1120;
          border: 1px solid rgba(129, 140, 248, 0.25);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.7);
        }
        
        .modal-close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }
        
        .modal-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: calc(90vh - 60px);
          object-fit: contain;
        }
        
        .modal-caption {
          background-color: #0c1120;
          color: #94a3b8;
          padding: 12px 15px;
          margin: 0;
          text-align: center;
          font-size: 0.88rem;
        }
      `}</style>
    </section>
  );
};

export default ResearchDetail;