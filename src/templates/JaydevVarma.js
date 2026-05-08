import React from 'react';

const MailIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);



const LinkedinIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LeetCodeIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="10" y1="20" x2="14" y2="4"/>
  </svg>
);

const JaydevVarmaTemplate = ({ data }) => {
  const { personalInfo, summary, education, experience, projects, skills, sectionTitles } = data;

  return (
    <div id="resume-template" className="jaydev-container">
      {/* Header */}
      <header className="jaydev-header">
        <h1 className="name">{personalInfo.fullName?.toUpperCase()}</h1>
        <p className="tagline">{personalInfo.role || 'Software Engineer'}</p>
        
        <div className="contact-grid">
          {personalInfo.email && (
            <a href={`mailto:${personalInfo.email}`} className="contact-item clickable">
              <MailIcon size={14} className="icon" />
              <span>{personalInfo.email}</span>
            </a>
          )}
          {personalInfo.phone && (
            <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-item clickable">
              <PhoneIcon size={14} className="icon" />
              <span>{personalInfo.phone}</span>
            </a>
          )}
          {personalInfo.linkedin && (
            <a 
              href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item clickable"
            >
              <LinkedinIcon size={14} className="icon" />
              <span>LinkedIn</span>
            </a>
          )}
          {personalInfo.github && (
            <a 
              href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item clickable"
            >
              <GithubIcon size={14} className="icon" />
              <span>GitHub</span>
            </a>
          )}
          {personalInfo.leetcode && (
            <a 
              href={personalInfo.leetcode.startsWith('http') ? personalInfo.leetcode : `https://${personalInfo.leetcode}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-item clickable"
            >
              <LeetCodeIcon size={14} className="icon" />
              <span>LeetCode</span>
            </a>
          )}
        </div>
      </header>

      <div className="main-content">
        {/* Main Column */}
        <div className="left-column">
          {/* Summary / Objective */}
          {summary && (
            <section className="section">
              <h2 className="section-title">{sectionTitles?.summary?.toUpperCase() || 'CAREER OBJECTIVE'}</h2>
              <div className="title-line"></div>
              <p className="summary-text">{summary}</p>
            </section>
          )}

          {/* Experience */}
          <section className="section">
            <h2 className="section-title">{sectionTitles?.experience?.toUpperCase() || 'EXPERIENCE'}</h2>
            <div className="title-line"></div>
            {experience.map((exp, index) => (
              <div key={index} className="item">
                <div className="item-header">
                  <h3 className="item-title">{exp.role}</h3>
                  <span className="item-date">{exp.date}</span>
                </div>
                <div className="item-sub-header">
                  <span className="item-company">{exp.company}</span>
                  <span className="item-location">{exp.location}</span>
                </div>
                <ul className="bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {index < experience.length - 1 && <div className="divider" />}
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">{sectionTitles?.projects?.toUpperCase() || 'PROJECTS'}</h2>
            <div className="title-line"></div>
            {projects.map((proj, index) => (
              <div key={index} className="item">
                <div className="item-header">
                  <h3 className="item-title">{proj.title}</h3>
                  <span className="item-date">{proj.date}</span>
                </div>
                <p className="item-tech">{proj.tech}</p>
                <ul className="bullets">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                {index < projects.length - 1 && <div className="divider" />}
              </div>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <div className="right-column">
          {/* Education */}
          <section className="section">
            <h2 className="section-title sidebar-title">{sectionTitles?.education?.toUpperCase() || 'EDUCATION'}</h2>
            <div className="title-line"></div>
            {education.map((edu, index) => (
              <div key={index} className="sidebar-item">
                <h3 className="item-title">{edu.degree}</h3>
                <p className="item-company">{edu.school}</p>
                <p className="sidebar-meta">{edu.date}</p>
                <p className="sidebar-meta">{edu.location}</p>
                {index < education.length - 1 && <div className="divider" />}
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title sidebar-title">{sectionTitles?.skills?.toUpperCase() || 'SKILLS'}</h2>
            <div className="title-line"></div>
            <div className="skills-container">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4 className="skill-group-title">{skillGroup.title}</h4>
                  <div className="skill-tags">
                    {skillGroup.details.split(',').map((skill, i) => (
                      <span key={i} className="skill-tag">{skill.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Strengths */}
          {data.strengths && (
            <section className="section">
              <h2 className="section-title sidebar-title">{sectionTitles?.strengths?.toUpperCase() || 'STRENGTHS'}</h2>
              <div className="title-line"></div>
              <div className="strengths-list">
                {data.strengths.map((strength, index) => (
                  <div key={index} className="strength-item">
                    <span className="strength-icon">{strength.icon}</span>
                    <span className="strength-text">{strength.text}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

        .jaydev-container {
          width: 210mm;
          min-height: 297mm;
          padding: 15mm;
          background: white;
          color: #2E2E2E;
          font-family: 'Lato', sans-serif;
          font-size: 10pt;
          line-height: 1.5;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .jaydev-container .jaydev-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .jaydev-container .name {
          font-size: 28pt;
          font-weight: 900;
          color: #000080;
          margin-bottom: 5px;
          letter-spacing: 2px;
        }

        .jaydev-container .tagline {
          font-size: 12pt;
          color: #000080;
          font-weight: 700;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .jaydev-container .contact-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .jaydev-container .contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #444;
          text-decoration: none;
          font-size: 9pt;
          transition: color 0.2s;
        }

        .jaydev-container .contact-item.clickable:hover {
          color: #000080;
        }

        .jaydev-container .main-content {
          display: flex;
          gap: 30px;
        }

        .jaydev-container .left-column {
          flex: 2;
        }

        .jaydev-container .right-column {
          flex: 1;
        }

        .jaydev-container .section {
          margin-bottom: 25px;
        }

        .jaydev-container .section-title {
          font-size: 14pt;
          font-weight: 900;
          color: #000080;
          margin-bottom: 5px;
          letter-spacing: 1.5px;
        }

        .jaydev-container .sidebar-title {
          font-size: 12pt;
        }

        .jaydev-container .title-line {
          height: 2px;
          background: #000080;
          margin-bottom: 12px;
          width: 100%;
        }

        .jaydev-container .item {
          margin-bottom: 15px;
        }

        .jaydev-container .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 3px;
        }

        .jaydev-container .item-title {
          font-size: 12pt;
          font-weight: 900;
          color: #333;
        }

        .jaydev-container .item-company {
          font-size: 11pt;
          font-weight: 700;
          color: #000080;
        }

        .jaydev-container .item-meta {
          font-size: 9pt;
          color: #666;
          display: flex;
          justify-content: space-between;
          font-style: italic;
        }

        .jaydev-container .bullets {
          margin-top: 5px;
          padding-left: 18px;
          list-style-type: disc;
        }

        .jaydev-container .bullets li {
          margin-bottom: 4px;
          padding-left: 5px;
        }

        .jaydev-container .divider {
          height: 1px;
          background: #e0e0e0;
          width: 80%;
          margin: 12px 0;
        }

        .jaydev-container .sidebar-item {
          margin-bottom: 15px;
        }

        .jaydev-container .sidebar-meta {
          font-size: 9pt;
          color: #666;
          margin-top: 2px;
        }

        .jaydev-container .skill-group {
          margin-bottom: 12px;
        }

        .jaydev-container .skill-group-title {
          font-size: 9pt;
          font-weight: 900;
          color: #000080;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .jaydev-container .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .jaydev-container .skill-tag {
          font-size: 8.5pt;
          font-weight: 700;
          color: #000080;
          border: 1.5px solid #000080;
          padding: 3px 10px;
          border-radius: 4px;
          background: white;
        }

        .jaydev-container .strengths-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .jaydev-container .strength-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10pt;
        }

        .jaydev-container .strength-icon {
          font-size: 14pt;
        }

        .jaydev-container .strength-text {
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};

export default JaydevVarmaTemplate;
