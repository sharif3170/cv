import React from 'react';

const LinkedinIcon = ({ size = 12 }) => (
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

const GithubIcon = ({ size = 12 }) => (
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

const GlobeIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const MailIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const CodeIcon = ({ size = 12 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
    <line x1="14" y1="4" x2="10" y2="20"></line>
  </svg>
);

const Template7 = ({ data }) => {
  const { personalInfo, education, experience, projects, skills, summary, certifications, sectionTitles } = data;

  return (
    <div id="resume-template" className="naman-cv-container">
      {/* Header */}
      <header className="header">
        <h1 className="name">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="contact-info">
          {personalInfo.github && (
            <span className="contact-item">
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer">
                <GithubIcon size={11} /> Github
              </a>
            </span>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="separator">|</span>
              <span className="contact-item">
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer">
                  <LinkedinIcon size={11} /> Linkdin
                </a>
              </span>
            </>
          )}
          {personalInfo.leetcode && (
            <>
              <span className="separator">|</span>
              <span className="contact-item">
                <a href={`https://${personalInfo.leetcode}`} target="_blank" rel="noreferrer">
                  <CodeIcon size={11} /> Leetcode
                </a>
              </span>
            </>
          )}
          {personalInfo.website && (
            <>
              <span className="separator">|</span>
              <span className="contact-item">
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noreferrer">
                  <GlobeIcon size={11} /> {personalInfo.website}
                </a>
              </span>
            </>
          )}
          {personalInfo.email && (
            <>
              <span className="separator">|</span>
              <span className="contact-item">
                <a href={`mailto:${personalInfo.email}`}>
                  <MailIcon size={11} /> {personalInfo.email}
                </a>
              </span>
            </>
          )}
          {personalInfo.phone && (
            <>
              <span className="separator">|</span>
              <span className="contact-item">
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}>
                  <PhoneIcon size={11} /> {personalInfo.phone}
                </a>
              </span>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.summary || 'SUMMARY'}</h2>
          <div className="summary-content">
            {summary}
          </div>
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.education || 'EDUCATION'}</h2>
          {education.map((edu, index) => (
            <div key={index} className="item education-item">
              <div className="edu-row">
                <span className="edu-date">{edu.date}</span>
                <span className="edu-main">
                  <span className="bold">{edu.degree}</span> at <span className="bold">{edu.school}</span>
                </span>
                <span className="edu-right">
                  {!edu.gpa && edu.bullets && edu.bullets[0]}
                </span>
              </div>
              {edu.gpa && <div className="edu-gpa" style={{ marginLeft: '110px', fontSize: '10pt', fontStyle: 'italic' }}>{edu.gpa.includes('%') ? 'Percentage: ' : 'GPA: '}{edu.gpa}</div>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.skills || 'SKILLS'}</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-title">{skill.title}</span> {skill.details}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.experience || 'WORK EXPERIENCE'}</h2>
          {experience.map((exp, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <span className="bold">{exp.company || exp.role}</span>
                <span className="right-info">{exp.date}</span>
              </div>
              {exp.location && (
                <div className="item-sub-header">
                  <span className="italic">{exp.role}</span>
                  <span className="right-info">{exp.location}</span>
                </div>
              )}
              <ul className="bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.projects || 'PROJECTS'}</h2>
          {projects.map((proj, index) => (
            <div key={index} className="item">
              <div className="item-header">
                <span className="bold">{proj.title}</span>
                <span className="right-info">
                  {(!proj.date?.includes('http') && !proj.date?.toLowerCase().includes('link')) && proj.date}
                </span>
              </div>
              {proj.tech && (
                <div className="item-sub-header">
                  <span className="tech-stack">{proj.tech}</span>
                </div>
              )}
              <ul className="bullets">
                {proj.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.certifications || 'CERTIFICATIONS'}</h2>
          <ul className="bullets">
            {certifications.map((cert, index) => (
              <li key={index}>{cert.title}</li>
            ))}
          </ul>
        </section>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap');

        .naman-cv-container {
          width: 210mm;
          min-height: 297mm;
          padding: 12mm 15mm;
          background: white;
          color: #333;
          font-family: 'EB Garamond', serif;
          line-height: 1.3;
          margin: 0 auto;
          box-sizing: border-box;
          font-size: 10.5pt;
        }

        .header {
          text-align: center;
          margin-bottom: 8px;
        }

        .name {
          font-size: 32pt;
          font-weight: normal;
          margin: 0 0 8px 0;
          color: #000;
          font-family: 'EB Garamond', serif;
        }

        .contact-info {
          font-size: 10pt;
          display: flex;
          justify-content: center;
          gap: 0;
          align-items: center;
          color: #004a99;
          flex-wrap: wrap;
        }

        .contact-item {
          display: inline-flex;
          align-items: center;
        }

        .contact-info a {
          color: #004a99;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .separator {
          margin: 0 8px;
          color: #666;
          font-weight: lighter;
        }

        .section {
          margin-top: 12px;
        }

        .section-title {
          font-size: 13pt;
          font-weight: normal;
          font-variant: small-caps;
          border-bottom: 0.5pt solid #888;
          margin-bottom: 8px;
          padding-bottom: 1px;
          color: #000;
          letter-spacing: 1px;
        }

        .summary-content {
          font-size: 10.5pt;
          margin-bottom: 10px;
          text-align: justify;
        }

        .item {
          margin-bottom: 6px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .bold {
          font-weight: bold;
          color: #000;
        }

        .italic {
          font-style: italic;
        }

        .right-info {
          font-size: 10pt;
          color: #000;
        }

        .demo-link {
          color: #004a99;
          text-decoration: none;
          border-bottom: 0.5pt solid #004a99;
        }

        .bullets {
          margin-top: 2px;
          padding-left: 18px;
          list-style-type: disc;
        }

        .bullets li {
          margin-bottom: 1px;
          padding-left: 4px;
          text-align: justify;
        }

        .education-item {
          margin-bottom: 2px;
        }

        .edu-row {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: 10px;
          align-items: baseline;
        }

        .edu-date {
          font-size: 10pt;
        }

        .edu-right {
          font-size: 10pt;
          text-align: right;
        }

        .publication-item {
          margin-bottom: 8px;
          font-size: 10.5pt;
          line-height: 1.4;
        }

        .pub-link {
          color: #004a99;
          text-decoration: none;
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skill-item {
          font-size: 10.5pt;
        }

        .skill-title {
          font-weight: bold;
          min-width: 120px;
          display: inline-block;
          color: #000;
        }

        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 9pt;
          color: #666;
        }

        @media print {
          .naman-cv-container {
            padding: 0;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Template7;
