import React from 'react';

const Skills = () => {
  const skills = ["Python", "Java", "Dart", "Swift", "JavaScript", "C++", "HTML", "Go", "Tensorflow", "Scikit-learn", "NumPy", "MATLAB", "Pytorch", "Issac Gym", "AWS", "Docker", "Flask", "Machine Learning", "Deep Learning", "Reinforcement Learning", "Computer Vision"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;