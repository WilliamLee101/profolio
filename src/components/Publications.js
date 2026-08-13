import React from 'react';

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

const Publications = () => {
  const papers = [
    {
      title: "In-Context Pure Exploration in Continuous Decision Spaces",
      authors: "Alessio Russo*, Yin-Ching Lee*, Ryan Welch, Aldo Pacchiano",
      venue: "arXiv preprint",
      year: 2026,
      link: "https://arxiv.org/abs/2602.17976",
      status: "PREPRINT"
    },
    {
      title: "Bio-Inspired Drone Control: A Reinforcement Learning-Trained Spiking Neural Networks for Agile Navigation in Dynamic Environment",
      authors: "Yin-Ching Lee, Sebastiano Mengozzi, Luca Zanatta, Andrea Bartolini, Andrea Acquaviva, Francesco Barchi",
      venue: "2025 IEEE International Conference on Omni-layer Intelligent Systems (COINS)",
      year: 2025,
      link: "https://ieeexplore.ieee.org/abstract/document/11125776",
      status: "ACCEPTED"
    },
    {
      title: "Refine: Robust Unsupervised Anomaly Detection for Production HPC Systems",
      authors: "Efe Sencan, Yin-Ching Lee, Connor Casey, Benjamin Schwaller, Vitus J Leung, Jim Brandt, Brian Kulis, Manuel Egele, Ayse K Coskun",
      venue: "ISC High Performance 2025",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11018307",
      status: "ACCEPTED"
    }
  ];

  const presentations = [
    { text: "Oral presentation", venue: "ICML 2026 Workshop on Hypothesis Testing", note: "" },
    { text: "Accepted paper", venue: "ICML 2026 Workshop: Decision-Making from Offline Datasets to Online Adaptation — Black-Box Optimization to Reinforcement Learning", note: "" },
    { text: "Co-authored a workshop paper", venue: "AAAI'25 Workshop", note: "as second contributor, accepted" },
    { text: "Presented a project poster", venue: "ISC-HPC'24", note: "" },
    { text: "Presented a research poster", venue: "DATE'23", note: "" },
    { text: "Presented a tutorial", venue: "LDMSCON'24", note: "" }
  ];

  const years = [...new Set(papers.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <section className="publications">
      <h2>Publications</h2>
      <p className="publications-intro">
        Peer-reviewed papers, preprints, and workshop contributions spanning meta-learning,
        reinforcement learning, and systems research.
      </p>

      {years.map((year) => (
        <div key={year}>
          <h3 className="pub-year">{year}</h3>
          <div className="papers-list">
            {papers
              .filter((p) => p.year === year)
              .map((paper, index) => (
                <div key={index} className="paper-item">
                  <h4 className="paper-title">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer">
                      {paper.title}
                    </a>
                  </h4>
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
        </div>
      ))}

      <div className="presentations-section">
        <h3 className="pub-year">Additional Presentations &amp; Posters</h3>
        <ul className="presentations-list">
          {presentations.map((item, index) => (
            <li key={index}>
              {item.text} — <span className="venue-tag">{item.venue}</span>
              {item.note && ` (${item.note})`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Publications;
