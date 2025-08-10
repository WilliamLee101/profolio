import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>I'm actively looking to participate in exciting research projects and internships in the field of machine learning and software engineering.</p>
      <p>Email: leewill@bu.edu</p>
      <div className="social-buttons flex justify-center gap-4 mt-6">
        <a 
          href="https://www.linkedin.com/in/yin-ching-lee/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button linkedin"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/WilliamLee101" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button github"
        >
          GitHub
        </a>
        <a 
          href="https://drive.google.com/file/d/1Ef2gQLUnEzSTIVV6GT4WuIBA43OOercY/view?usp=sharing" // Replace with your Google Drive shared link
          target="_blank" 
          rel="noopener noreferrer"
          className="social-button resume"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;