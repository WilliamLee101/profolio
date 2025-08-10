import React from 'react';

const About = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Boston University",
      date: "Sep 2024 – May 2025",
      logo: process.env.PUBLIC_URL + "/bu-logo.png"
    },
    {
      degree: "Bachelor of Arts in Computer Science",
      school: "Boston University",
      date: "Sep 2021 – May 2024",
      logo: process.env.PUBLIC_URL + "/bu-logo.png"
    },
    {
      degree: "High School Diploma",
      school: "Ming-Dao High School",
      date: "Sep 2017 – May 2021",
      logo: process.env.PUBLIC_URL + "/mingdao-logo.png"
    }
  ];

  return (
    <section className="about">
      <h2>ABOUT ME</h2>
      <div className="about-content">
        <p>
          I'm a passionate Computer Science student at Boston University, pursuing both a Bachelor's and Master's degree. My journey
          in technology has led me to explore various areas of computer science, with a particular focus on machine learning and robotics.
        </p>
        
        <div className="education-timeline">
          <h3>EDUCATION</h3>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-dot"></div>
              <div className="education-content">
                <div className="education-header">
                  <div className="education-info">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.school}</h5>
                    <p className="date">{edu.date}</p>
                  </div>
                  <div className="logo-container">
                    <img 
                      src={edu.logo} 
                      alt={edu.school} 
                      className="school-logo" 
                      style={{
                        maxHeight: "120px",
                        width: "auto",
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;