import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>I'm actively looking for PhD positions.</p>
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
          href="https://scholar.google.com/citations?user=REPLACE_WITH_YOUR_ID" // Replace with your Google Scholar profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-button scholar"
        >
          Google Scholar
        </a>
        <a
          href={`${process.env.PUBLIC_URL}/CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button cv"
        >
          CV
        </a>
      </div>
    </section>
  );
};

export default Contact;