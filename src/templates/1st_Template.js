import React from 'react';

const LinkedinIcon = ({ size = 14 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = ({ size = 14 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LeetCodeIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="9" x2="10" y2="15" />
  </svg>
);

const Template1 = ({ data }) => {
  const { personalInfo, education, experience, projects, skills, sectionTitles } = data;

  return (
    <div id="resume-template" className="resume-container">
      {/* Header */}
      <header className="header">
        <h1 className="name">{personalInfo.fullName}</h1>
        <div className="contact-info">
          {personalInfo.linkedin && (
            <span><a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="icon-link"><LinkedinIcon size={14} /> LinkedIn</a></span>
          )}
          {personalInfo.github && (
            <>
              {personalInfo.linkedin && <span className="pipe">|</span>}
              <span><a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="icon-link"><GithubIcon size={14} /> GitHub</a></span>
            </>
          )}
          {personalInfo.leetcode && (
            <>
              {(personalInfo.linkedin || personalInfo.github) && <span className="pipe">|</span>}
              <span><a href={personalInfo.leetcode.startsWith('http') ? personalInfo.leetcode : `https://${personalInfo.leetcode}`} target="_blank" rel="noreferrer" className="icon-link"><LeetCodeIcon size={14} /> LeetCode</a></span>
            </>
          )}
          {personalInfo.phone && (
            <>
              {(personalInfo.linkedin || personalInfo.github || personalInfo.leetcode) && <span className="pipe">|</span>}
              <span><a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}>{personalInfo.phone}</a></span>
            </>
          )}
          {personalInfo.email && (
            <>
              {(personalInfo.linkedin || personalInfo.github || personalInfo.leetcode || personalInfo.phone) && <span className="pipe">|</span>}
              <span><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span>
            </>
          )}
        </div>
      </header>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.education?.toUpperCase() || 'EDUCATION'}</h2>
        {education.map((edu, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <span className="bold">{edu.school}</span>
              <span className="bold">{edu.location}</span>
            </div>
            <div className="item-header">
              <span className="italic">{edu.degree}</span>
              <span className="italic">{edu.date}</span>
            </div>
            {edu.gpa && <div className="italic" style={{ fontSize: '10pt' }}>{edu.gpa.includes('%') ? 'Percentage: ' : 'GPA: '}{edu.gpa}</div>}
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.experience?.toUpperCase() || 'EXPERIENCE'}</h2>
        {experience.map((exp, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <span className="bold">{exp.role}</span>
              <span className="bold">{exp.date}</span>
            </div>
            <div className="item-header">
              <span className="italic">{exp.company}</span>
              <span className="italic">{exp.location}</span>
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
      <section className="section">
        <h2 className="section-title">{sectionTitles?.projects?.toUpperCase() || 'PROJECTS'}</h2>
        {projects.map((proj, index) => (
          <div key={index} className="item">
            <div className="item-header">
              <span><span className="bold">{proj.title}</span> | <span className="italic">{proj.tech}</span></span>
              <span className="bold">{proj.date}</span>
            </div>
            <ul className="bullets">
              {proj.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.skills?.toUpperCase() || 'TECHNICAL SKILLS'}</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <strong>{skill.title}:</strong> {skill.details}
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .resume-container {
          width: 210mm;
          min-height: 297mm;
          height: auto;
          padding: 12mm 15mm;
          background: white;
          color: black;
          font-family: 'Inter', -apple-system, sans-serif;
          line-height: 1.4;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .resume-container .header {
          text-align: center;
          margin-bottom: 12px;
        }

        .resume-container .name {
          font-size: 24pt;
          font-weight: bold;
          margin-bottom: 2px;
        }

        .resume-container .contact-info {
          font-size: 10pt;
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
        }

        .resume-container .pipe {
          color: black;
          user-select: none;
        }

        .resume-container .contact-info a {
          color: #004a99;
          text-decoration: none;
        }

        .resume-container .icon-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .resume-container .section {
          margin-top: 10px;
        }

        .resume-container .section-title {
          font-size: 12pt;
          font-weight: bold;
          border-bottom: 1px solid black;
          margin-bottom: 4px;
          padding-bottom: 1px;
        }

        .resume-container .item {
          margin-bottom: 6px;
        }

        .resume-container .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1px;
        }

        .resume-container .bold {
          font-weight: bold;
        }

        .resume-container .italic {
          font-style: italic;
          color: #555;
        }

        .resume-container .bullets {
          margin-top: 2px;
          padding-left: 18px;
          list-style-type: disc;
        }

        .resume-container .bullets li {
          margin-bottom: 1px;
          padding-left: 2px;
        }

        .resume-container .skills-container {
          font-size: 11pt;
          line-height: 1.5;
        }

        .resume-container .skill-item {
          margin-bottom: 2px;
        }

        @media print {
          .resume-container {
            padding: 0.5in;
            box-shadow: none;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Template1;
