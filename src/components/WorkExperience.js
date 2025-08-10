import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Technical Project Manager",
      company: "BU Spark!",
      date: "Jan 2024 – May 2024",
      description: "Oversaw technical aspects of project in collaboration with MIT Lincoln Lab, Harvard Herbaria, and other partners.",
      icon: "🎯", // Replace with actual icon
      skills: ["Project Management", "Machine Learning", "Computer Vision"]
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "BU Spark! & Atfal Mafkoda",
      date: "Jan 2023 – May 2023",
      description: "Created a community-focused ML solution integrating face detection and aging software to locate missing children in Egypt.",
      icon: "🤖", // Replace with actual icon
      skills: ["Machine Learning", "Computer Vision", "Forensic Facial Aging", "Face Recognition", "Teamwork", "GAN"]
    },
    {
      title: "Course Assistant",
      company: "Boston University",
      date: "Sep 2022 – Dec 2022",
      description: "Supported over 100 students weekly and conduct weekly office hours",
      icon: "🧑🏻‍🏫", // Replace with actual icon
      skills: ["Python", "Combinatoric Structures", "Teaching"]
    },
    {
      title: "Software Engineer Intern",
      company: "Yi-Yang Construction co., Ltd",
      date: "May 2022 – Sep 2022",
      description: "Developed a Swift-based mobile app for clock-in and leave requests, serving 80+ users with facial recognition authentication.",
      icon: "💻", // Replace with actual icon
      skills: ["Flutter", "Mobile Development", "Face Recognition"]
    }
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">{exp.icon}</div>
            <div className="experience-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="date">{exp.date}</p>
              <p>{exp.description}</p>
              <div className="skills">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;