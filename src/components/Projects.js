import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Missing Children",
      description: "Collborated with Atfal Mafkoda and BU Spark! to develop ML solution integrating face detection and aging to locate missing children in Egypt and reunite them with their families.",
      image: process.env.PUBLIC_URL + "/atfal_mafkoda.png",
      technologies: ["Computer Vision", "Forensic Facial Aging", "Facial Recognition", "Frontalization", "Enhancement", "Generative Adversarial Network (GAN)", "Hugging Face", "Python"],
      links: {
        pipeline: "https://docs.google.com/presentation/d/14qi-p9sRcHNuJr1BFJziHNcw3tFfJn-OPA7BjdjPM3c/edit#slide=id.g238bea5ab8b_0_14170",
        live: "https://docs.google.com/presentation/d/14qi-p9sRcHNuJr1BFJziHNcw3tFfJn-OPA7BjdjPM3c/edit#slide=id.g238bea5ab8b_0_14204",
      }
    },
    {
      title: "HPC Analytics Web-based Application Suite",
      description: "Deployed a publicly accessible suite using AWS and Docker, showcased at multiple conferences.",
      image: process.env.PUBLIC_URL + "/ai4hpc.png",
      technologies: ["AWS", "Docker", "Flask", "Python", "Machine Learning"],
      links: {
        live: "https://docs.google.com/presentation/d/1osnnkRbj_dhSKpO-REmYgySitd71Z5AP/edit#slide=id.g2e35b1496a7_0_2332",
        install: "https://hub.docker.com/r/leewill1015/ai4hpc"
      }
    },
    {
      title: "Terrier Tastes",
      description: "Led a team of three to develop a Flutter-based mobile app to address food surplus and waste in BU dining halls.",
      image: process.env.PUBLIC_URL + "/terrier-tastes.png",
      technologies: ["Flutter", "Firebase", "Machine Learning", "Python", "Backend Software Development"],
      links: {
        live: "https://docs.google.com/presentation/d/1B_tCpEj8hKF2HhfniP_Rl0USBXylmIfKQ7hO5ecNrXk/edit?usp=sharing"
      }
    },
  ];

  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                {project.links?.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.links?.install && (
                  <a href={project.links.install} target="_blank" rel="noopener noreferrer">
                    Install
                  </a>
                )}
                {project.links?.aging_live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.links?.pipeline && (
                  <a href={project.links.pipeline} target="_blank" rel="noopener noreferrer">
                    Pipeline
                  </a>
                )}
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;