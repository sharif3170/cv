import React from 'react';
import { Mail, Phone } from 'lucide-react';

const LinkedinIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LeetCodeIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="9" x2="10" y2="15" />
  </svg>
);

const Template5 = ({ data }) => {
  const { personalInfo, education, experience, projects, skills, sectionTitles, achievements } = data;

  return (
    <div id="resume-template" className="overleaf-container">
      {/* Header */}
      <header className="overleaf-header">
        <h1 className="name">{personalInfo.fullName?.toUpperCase()}</h1>
        {(personalInfo.email || personalInfo.phone || personalInfo.linkedin || personalInfo.github || personalInfo.leetcode) && (
        <div className="contact-row">
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-btn">
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
          )}
          {personalInfo.github && (
            <>
              {personalInfo.linkedin && <span className="pipe">|</span>}
              <a href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-btn">
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            </>
          )}
          {personalInfo.leetcode && (
            <>
              {(personalInfo.linkedin || personalInfo.github) && <span className="pipe">|</span>}
              <a href={personalInfo.leetcode.startsWith('http') ? personalInfo.leetcode : `https://${personalInfo.leetcode}`} target="_blank" rel="noopener noreferrer" className="contact-btn">
                <LeetCodeIcon size={14} />
                <span>LeetCode</span>
              </a>
            </>
          )}
          {personalInfo.phone && (
            <>
              {(personalInfo.linkedin || personalInfo.github || personalInfo.leetcode) && <span className="pipe">|</span>}
              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-btn">
                <Phone size={14} />
                <span>{personalInfo.phone}</span>
              </a>
            </>
          )}
          {personalInfo.email && (
            <>
              {(personalInfo.linkedin || personalInfo.github || personalInfo.leetcode || personalInfo.phone) && <span className="pipe">|</span>}
              <a href={`mailto:${personalInfo.email}`} className="contact-btn">
                <Mail size={14} />
                <span>{personalInfo.email}</span>
              </a>
            </>
          )}
        </div>
        )}
      </header>

      <div className="content-grid">
        {/* Left Column: Work Experience & Education */}
        <div className="left-column">
          <section className="section">
            <h2 className="section-title">{sectionTitles?.experience || 'WORK EXPERIENCE'}</h2>
            <div className="section-line"></div>
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="date-header">
                  {exp.date && exp.date.toUpperCase()}
                </div>
                <div className="item-info">
                  <p className="company">{exp.company}</p>
                  <p className="role">{exp.role}</p>
                  <p className="description">
                    {exp.bullets && exp.bullets[0]}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="section education-section">
            <h2 className="section-title">{sectionTitles?.education || 'EDUCATION'}</h2>
            <div className="section-line"></div>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="item-row">
                  <div className="date-col">{edu.date}</div>
                  <div className="info-col">
                    <p className="degree">{edu.degree}</p>
                    <p className="school">{edu.school}</p>
                    <p className="location">{edu.location}</p>
                    {edu.gpa && <p className="location" style={{ fontWeight: '600', color: '#333' }}>{edu.gpa.includes('%') ? 'Percentage: ' : 'GPA: '}{edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Right Column: Extra Curricular, Skills, Achievements, etc. */}
        <div className="right-column">
          <section className="section right-section">
            <h2 className="section-title">{sectionTitles?.projects || 'PROJECTS'}</h2>
            <div className="section-line"></div>
            {projects && projects.map((proj, index) => (
              <div key={index} className="side-item">
                <div className="side-date">{proj.date}</div>
                <div className="side-content">
                  <p className="side-title">{proj.title}</p>
                  <p className="side-subtitle">{proj.tech}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="section right-section">
            <h2 className="section-title">{sectionTitles?.communication || 'COMMUNICATION SKILLS'}</h2>
            <div className="section-line"></div>
            <div className="skill-grid">
              {data.communicationSkills && data.communicationSkills.map((skill, index) => (
                <React.Fragment key={index}>
                  <span className="skill-label">{skill.title}</span>
                  <span className="skill-value">{skill.details}</span>
                </React.Fragment>
              ))}
            </div>
          </section>

          <section className="section right-section">
            <h2 className="section-title">{sectionTitles?.achievements || 'ACHIEVEMENTS'}</h2>
            <div className="section-line"></div>
            {achievements && achievements.map((ach, index) => (
              <div key={index} className="side-item">
                <div className="side-date">{ach.date}</div>
                <div className="side-content">
                  <p className="side-title">{ach.title}</p>
                </div>
              </div>
            ))}
          </section>

          <section className="section right-section">
            <h2 className="section-title">{sectionTitles?.skills || 'COMPUTER SKILLS'}</h2>
            <div className="section-line"></div>
            <div className="skill-grid">
              {skills && skills.map((skill, index) => (
                <React.Fragment key={index}>
                  <span className="skill-label">{skill.title}</span>
                  <span className="skill-value">{skill.details}</span>
                </React.Fragment>
              ))}
            </div>
          </section>

          <section className="section right-section">
            <h2 className="section-title">{sectionTitles?.certifications || 'CERTIFICATIONS'}</h2>
            <div className="section-line"></div>
            {data.certifications && data.certifications.map((cert, index) => (
              <div key={index} className="side-item">
                <div className="side-date">{cert.date}</div>
                <div className="side-content">
                  <p className="side-title">{cert.title}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <style jsx>{`
        .overleaf-container {
          width: 210mm;
          min-height: 297mm;
          padding: 15mm 20mm;
          background: white;
          color: #333;
          font-family: 'Crimson Text', serif;
          margin: 0 auto;
          box-sizing: border-box;
          line-height: 1.3;
        }

        .overleaf-header {
          text-align: center !important;
          margin-bottom: 25px;
          padding-bottom: 15px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .name {
          font-size: 28pt;
          font-weight: 400;
          color: #333;
          margin: 0 0 10px 0;
          text-align: center !important;
          width: 100%;
          display: block;
        }

        .contact-row {
          display: flex;
          justify-content: center !important;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          width: 100%;
        }

        .contact-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10pt;
          color: #004a99;
          text-decoration: none;
          transition: color 0.2s;
        }

        .pipe {
          color: #ccc;
          user-select: none;
        }

        .contact-btn:hover {
          color: #000;
          text-decoration: underline;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 35px;
          margin-top: 15px;
        }

        .section {
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 13pt;
          font-weight: 700;
          color: #000;
          margin: 0 0 2px 0;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .section-line {
          height: 1px;
          background: #333;
          width: 100%;
          margin-bottom: 12px;
        }

        .experience-item {
          margin-bottom: 18px;
        }

        .date-header {
          font-size: 9pt;
          font-weight: 700;
          color: #666;
          text-align: right;
          margin-bottom: 2px;
        }

        .company {
          font-size: 10pt;
          font-weight: 700;
          margin: 0;
        }

        .role {
          font-size: 11pt;
          font-weight: 700;
          font-style: italic;
          margin: 1px 0 4px 0;
        }

        .description {
          font-size: 10pt;
          text-align: justify;
          margin: 0;
        }

        .education-item {
          margin-bottom: 15px;
        }

        .item-row {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .date-col {
          flex: 0 0 100px;
          font-size: 10pt;
          font-weight: 700;
          color: #333;
          text-align: left;
        }

        .info-col {
          flex: 1;
          text-align: left;
        }

        .degree {
          font-size: 11pt;
          font-weight: 700;
          margin: 0;
          color: #000;
        }

        .school {
          font-size: 9.5pt;
          font-weight: 600;
          margin: 2px 0 1px 0;
          color: #444;
        }

        .location {
          font-size: 9.5pt;
          font-style: italic;
          margin: 0;
          color: #666;
        }

        .location-box {
          background: #fdf5e6;
          border: 1px solid #eee;
          padding: 8px 12px;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 9.5pt;
        }

        .contact-item .icon {
          color: #000;
          width: 15px;
          text-align: center;
        }

        .side-item {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .side-date {
          flex: 0 0 40px;
          font-size: 10pt;
          font-weight: 700;
        }

        .side-title {
          font-size: 10pt;
          font-weight: 700;
          margin: 0;
        }

        .side-subtitle {
          font-size: 10pt;
          font-style: italic;
          margin: 1px 0 0 0;
        }

        .skill-grid {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 8px;
          font-size: 10pt;
        }

        .skill-label {
          font-weight: 700;
          text-transform: uppercase;
          font-size: 8.5pt;
        }

        @media print {
          .overleaf-container {
            box-shadow: none;
            padding: 10mm;
          }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet" />
    </div>
  );
};

export default Template5;
