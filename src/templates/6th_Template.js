import React from 'react';
import { Linkedin, Github, Code2, Globe } from 'lucide-react';

const Template6 = ({ data }) => {
  const { personalInfo, education, experience, projects, skills, sectionTitles, summary, certifications } = data;

  return (
    <div id="resume-template" className="rezume-container">
      {/* Header */}
      <header className="rezume-header">
        <div className="header-top">
          <div className="header-left">
            <h1 className="name">{personalInfo.fullName}</h1>
          </div>
          <div className="header-right">
            {personalInfo.phone && <div className="contact-item">Mobile: <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></div>}
            {personalInfo.email && <div className="contact-item">Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div>}
          </div>
        </div>
        
        <div className="header-links">
          {personalInfo.website && (
            <a href={`https://${personalInfo.website}`} target="_blank" rel="noreferrer" className="link-item">
              <Globe size={12} className="link-icon" /> {personalInfo.website}
            </a>
          )}
          {personalInfo.linkedin && (
            <>
              {personalInfo.website && <span className="pipe">|</span>}
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="link-item">
                <Linkedin size={12} className="link-icon" /> LinkedIn
              </a>
            </>
          )}
          {personalInfo.github && (
            <>
              {(personalInfo.website || personalInfo.linkedin) && <span className="pipe">|</span>}
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noreferrer" className="link-item">
                <Github size={12} className="link-icon" /> GitHub
              </a>
            </>
          )}
          {personalInfo.leetcode && (
            <>
              {(personalInfo.website || personalInfo.linkedin || personalInfo.github) && <span className="pipe">|</span>}
              <a href={`https://${personalInfo.leetcode}`} target="_blank" rel="noreferrer" className="link-item">
                <Code2 size={12} className="link-icon" /> Leetcode
              </a>
            </>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="section summary-section">
          <h2 className="section-title">{sectionTitles?.summary?.toUpperCase() || 'CAREER OBJECTIVE'}</h2>
          <div className="section-line"></div>
          <p className="summary-text">{summary}</p>
        </section>
      )}

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.skills?.toUpperCase() || 'TECHNICAL SKILLS'}</h2>
        <div className="section-line"></div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-row">
              <span className="skill-label">{skill.title}</span>
              <span className="skill-sep">:</span>
              <span className="skill-details">{skill.details}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.experience?.toUpperCase() || 'EXPERIENCE'}</h2>
        <div className="section-line"></div>
        {experience.map((exp, index) => (
          <div key={index} className="exp-item">
            <div className="exp-header">
              <span className="bold">{exp.role}</span>
              <span className="date">{exp.date}</span>
            </div>
            <div className="exp-sub">
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

      {/* Education */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.education?.toUpperCase() || 'EDUCATION'}</h2>
        <div className="section-line"></div>
        {education.map((edu, index) => (
          <div key={index} className="edu-item">
            <div className="edu-header">
              <span className="bold">{edu.school}</span>
              <span className="location">{edu.location}</span>
            </div>
            <div className="edu-sub">
              <span className="italic">{edu.degree}</span>
              <span className="date">{edu.date}</span>
            </div>
            {edu.gpa && <div className="italic" style={{ fontSize: '10pt', marginTop: '2px' }}>{edu.gpa.includes('%') ? 'Percentage: ' : 'GPA: '}{edu.gpa}</div>}
          </div>
        ))}
      </section>

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.projects?.toUpperCase() || 'PROJECTS'}</h2>
          <div className="section-line"></div>
          {projects.map((proj, index) => (
            <div key={index} className="proj-item">
              <div className="proj-header">
                <div className="proj-title-row">
                  <span className="bold">{proj.title}</span>
                  <span className="proj-tech italic">{proj.tech}</span>
                </div>
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

      {/* Certifications */}
      {certifications && certifications.length > 0 && (
        <section className="section">
          <h2 className="section-title">{sectionTitles?.certifications?.toUpperCase() || 'CERTIFICATIONS'}</h2>
          <div className="section-line"></div>
          <ul className="cert-list">
            {certifications.map((cert, index) => (
              <li key={index}>
                <button className="cert-link">{cert.title}</button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <style jsx>{`
        .rezume-container {
          width: 210mm;
          min-height: 297mm;
          padding: 10mm 15mm;
          background: white;
          color: #000;
          font-family: 'Inter', -apple-system, sans-serif;
          line-height: 1.3;
          margin: 0 auto;
          box-sizing: border-box;
          font-size: 10pt;
        }

        .rezume-header {
          margin-bottom: 15px;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 5px;
        }

        .name {
          font-size: 24pt;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .header-links {
          display: flex;
          gap: 15px;
          margin-top: 8px;
        }

        .link-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 9pt;
          color: #004a99;
          text-decoration: none;
        }

        .pipe {
          color: #ccc;
          user-select: none;
        }

        .link-icon {
          flex-shrink: 0;
          color: #004a99;
        }

        .header-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          font-size: 9pt;
        }

        .contact-item a {
          color: #004a99;
          text-decoration: none;
        }

        .summary-section {
          margin-top: 8px;
          margin-bottom: 12px;
        }

        .summary-text {
          font-size: 9.5pt;
          text-align: justify;
        }

        .section {
          margin-top: 12px;
        }

        .section-title {
          font-size: 11pt;
          font-weight: 700;
          color: #000;
          margin: 0;
        }

        .section-line {
          height: 1px;
          background: #000;
          width: 100%;
          margin: 1px 0 8px 0;
        }

        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .skill-row {
          display: flex;
          font-size: 9.5pt;
        }

        .skill-label {
          font-weight: 800;
          width: 100px;
          flex-shrink: 0;
        }

        .skill-sep {
          margin-right: 15px;
        }

        .exp-item, .edu-item, .proj-item {
          margin-bottom: 12px;
        }

        .exp-header, .edu-header, .proj-title-row {
          display: flex;
          justify-content: space-between;
          font-size: 10.5pt;
        }

        .exp-sub, .edu-sub {
          display: flex;
          justify-content: space-between;
          font-size: 9.5pt;
          margin-top: 1px;
        }

        .proj-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .proj-tech {
          font-size: 9pt;
          margin-left: 20px;
        }

        .source-link {
          font-size: 9pt;
          color: #000;
          text-decoration: underline;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
        }

        .bold {
          font-weight: 700;
        }

        .italic {
          font-style: italic;
        }

        .bullets {
          margin: 3px 0 0 0;
          padding-left: 18px;
          list-style-type: disc;
        }

        .bullets li {
          font-size: 9.5pt;
          margin-bottom: 2px;
        }

        .cert-list {
          padding-left: 18px;
          margin: 0;
        }

        .cert-list li {
          font-size: 9.5pt;
          margin-bottom: 4px;
        }

        .cert-link {
          color: #000;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
        }
      `}</style>
    </div>
  );
};

export default Template6;
