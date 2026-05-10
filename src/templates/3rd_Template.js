import React from 'react';

const MailIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);



const LinkedinIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6086 8.199-11386 0-6627-5373-12-12-12z"/>
  </svg>
);

const LeetCodeIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="9" x2="10" y2="15" />
  </svg>
);

const Template3 = ({ data }) => {
  const { personalInfo, summary, education, experience, projects, skills, sectionTitles } = data;

  return (
    <div id="resume-template" className="autocv-container">
      {/* Header */}
      <header className="autocv-header">
        <h1 className="name">{personalInfo.fullName}</h1>
        <div className="contact-info">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <LinkedinIcon size={12} /> LinkedIn
            </a>
          )}
          {personalInfo.github && (
            <>
              {personalInfo.linkedin && <span className="pipe">|</span>}
              <a href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <GithubIcon size={12} /> GitHub
              </a>
            </>
          )}
          {personalInfo.leetcode && (
            <>
              {(personalInfo.linkedin || personalInfo.github) && <span className="pipe">|</span>}
              <a href={personalInfo.leetcode.startsWith('http') ? personalInfo.leetcode : `https://${personalInfo.leetcode}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <LeetCodeIcon size={12} /> LeetCode
              </a>
            </>
          )}
          {personalInfo.phone && (
            <>
              {(personalInfo.linkedin || personalInfo.github || personalInfo.leetcode) && <span className="pipe">|</span>}
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-item">
                <PhoneIcon size={12} /> {personalInfo.phone}
              </a>
            </>
          )}
          {personalInfo.email && (
            <>
              {(personalInfo.linkedin || personalInfo.github || personalInfo.leetcode || personalInfo.phone) && <span className="pipe">|</span>}
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                <MailIcon size={12} /> {personalInfo.email}
              </a>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.summary?.toUpperCase() || 'CAREER OBJECTIVE'}</h2>
          <div className="section-line"></div>
          <p className="summary-text">{summary}</p>
        </section>
      )}

      {/* Education */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.education?.toUpperCase() || 'EDUCATION'}</h2>
        <div className="section-line"></div>
        {education.map((edu, index) => (
          <div key={index} className="item">
            <div className="item-row">
              <span className="bold">{edu.school}</span>
              <span className="right-text">{edu.date}</span>
            </div>
            <div className="item-row secondary">
              <span className="italic">{edu.degree}</span>
              <span className="right-text">{edu.location}</span>
            </div>
            {edu.gpa && <div className="italic" style={{ fontSize: '10.5pt', marginTop: '2px' }}>{edu.gpa.includes('%') ? 'Percentage: ' : 'GPA: '}{edu.gpa}</div>}
            {edu.bullets && edu.bullets.length > 0 && (
              <ul className="bullets">
                {edu.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.experience?.toUpperCase() || 'ACADEMIC EXPERIENCE'}</h2>
        <div className="section-line"></div>
        {experience.map((exp, index) => (
          <div key={index} className="item">
            <div className="item-row">
              <span className="bold">{exp.company}</span>
              <span className="right-text">{exp.date}</span>
            </div>
            <div className="item-row secondary">
              <span className="italic">{exp.role}</span>
              <span className="right-text">{exp.location}</span>
            </div>
            <ul className="bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>



      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.projects?.toUpperCase() || 'PROJECTS'}</h2>
          <div className="section-line"></div>
          {projects.map((proj, index) => (
            <div key={index} className="item">
              <div className="item-row">
                <span className="bold">{proj.title}</span>
                <span className="right-text">{proj.date}</span>
              </div>
              <div className="item-row secondary">
                <span className="italic">{proj.tech}</span>
              </div>
              <ul className="bullets">
                {proj.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.skills?.toUpperCase() || 'SKILLS'}</h2>
        <div className="section-line"></div>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <div key={index} className="skill-line">
              <span className="bold">{skill.title}: </span>
              <span>{skill.details}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .autocv-container {
          width: 210mm;
          min-height: 297mm;
          padding: 12mm 15mm;
          background: white;
          color: #333;
          font-family: 'Crimson Text', serif;
          line-height: 1.6;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .autocv-container .autocv-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 5px;
        }

        .autocv-container .name {
          font-size: 26pt;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .autocv-container .contact-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 10pt;
          margin-top: 4px;
        }

        .autocv-container .contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #004a99;
          text-decoration: none;
        }

        .autocv-container .pipe {
          color: #ccc;
          user-select: none;
        }

        .autocv-container .contact-item svg {
          color: #004a99;
        }

        .autocv-container .section {
          margin-top: 20px;
        }

        .autocv-container .section-title {
          font-size: 12pt;
          font-weight: 700;
          margin-bottom: 3px;
          letter-spacing: 1px;
          color: #000;
        }

        .autocv-container .section-line {
          height: 1px;
          background: #333;
          width: 100%;
          margin-bottom: 10px;
        }

        .autocv-container .summary-text {
          font-size: 10.5pt;
          text-align: justify;
        }

        .autocv-container .item {
          margin-bottom: 15px;
        }

        .autocv-container .item-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .autocv-container .item-row.secondary {
          margin-top: 1px;
          font-size: 10.5pt;
        }

        .autocv-container .bold {
          font-weight: 700;
        }

        .autocv-container .italic {
          font-style: italic;
        }

        .autocv-container .right-text {
          font-size: 10pt;
          font-weight: 600;
        }

        .autocv-container .bullets {
          margin: 5px 0 0 0;
          padding-left: 25px;
          list-style-type: circle;
        }

        .autocv-container .bullets li {
          margin-bottom: 3px;
          font-size: 10.5pt;
        }

        .autocv-container .publications-list {
          margin-top: 5px;
        }

        .autocv-container .pub-item {
          margin-bottom: 8px;
          font-size: 10.5pt;
          line-height: 1.5;
        }

        .autocv-container .pub-authors {
          font-weight: 500;
        }

        .autocv-container .pub-title {
          font-weight: 600;
        }

        .autocv-container .pub-link {
          color: #2563eb;
          font-size: 9pt;
        }

        .autocv-container .skills-content {
          margin-top: 5px;
        }

        .autocv-container .skill-line {
          margin-bottom: 4px;
          font-size: 10.5pt;
        }
      `}</style>
      
      {/* Import Serif Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
    </div>
  );
};

export default Template3;
