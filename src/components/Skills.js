import React from 'react';

const Skills = () => {
  const skillGroups = [
    // {
    //   label: "Research",
    //   skills: ["Meta-Learning", "Pure Exploration", "In-Context Learning", "Bayesian Inference", "Thompson Sampling", "Reinforcement Learning", "Spiking Neural Networks", "Computer Vision"]
    // },
    {
      label: "Frameworks",
      skills: ["Pytorch", "Tensorflow", "Scikit-learn", "NumPy", "Isaac Gym", "SKRL", "Flask"]
    },
    {
      label: "Languages",
      skills: ["Python", "C++", "JavaScript", "Java", "Go", "Dart", "Swift", "MATLAB"]
    },
    {
      label: "Tools & Cloud",
      skills: ["AWS", "Docker", "GitHub Actions"]
    }
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group">
            <span className="skill-group-label">{group.label}</span>
            <div className="skill-list">
              {group.skills.map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;