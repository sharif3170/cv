import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Template8 = ({ data }) => {
  const { personalInfo, education, experience, projects, skills, certifications, sectionTitles } = data;

  return (
    <div id="resume-template" className="resume-container">
      <div className="main-content">
        {/* Left Column */}
        <div className="left-column">
          {/* Header */}
          <header className="header">
            <h1 className="name">{personalInfo.fullName}</h1>
            <div className="social-links">
              {personalInfo.linkedin && (
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              )}
              {personalInfo.github && (
                <>
                  {personalInfo.linkedin && <span className="pipe">|</span>}
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </>
              )}
              {personalInfo.leetcode && (
                <>
                  {(personalInfo.linkedin || personalInfo.github) && <span className="pipe">|</span>}
                  <a href={`https://${personalInfo.leetcode}`} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="13.5" y1="7" x2="10.5" y2="17" />
                    </svg>
                    <span>LeetCode</span>
                  </a>
                </>
              )}
            </div>
            <div className="contact-details">
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="social-link">
                  <Mail size={14} />
                  <span>{personalInfo.email}</span>
                </a>
              )}
              {personalInfo.phone && (
                <>
                  {personalInfo.email && <span className="pipe">|</span>}
                  <div className="social-link">
                    <Phone size={14} />
                    <span>{personalInfo.phone}</span>
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Career Objective */}
          {data.summary && (
            <section className="section">
              <h2 className="section-title">{sectionTitles?.summary || 'CAREER OBJECTIVE'}</h2>
              <div className="divider"></div>
              <div className="summary-text">{data.summary}</div>
            </section>
          )}

          {/* Education */}
          <section className="section">
            <h2 className="section-title">{sectionTitles?.education || 'EDUCATION'}</h2>
            <div className="divider"></div>
            {education.map((edu, index) => (
              <div key={index} className="item">
                <div className="item-header">
                  <span className="bold">• {edu.school}</span>
                  <span className="date">{edu.date}</span>
                </div>
                <div className="location">{edu.location}</div>
                {edu.degree && <div className="italic">{edu.degree}</div>}
                {edu.gpa && <div className="italic">{edu.gpa.includes('%') ? 'Percentage: ' : 'GPA: '}{edu.gpa}</div>}
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
            <h2 className="section-title">{sectionTitles?.experience || 'EXPERIENCE'}</h2>
            <div className="divider"></div>
            {experience.map((exp, index) => (
              <div key={index} className="item">
                <div className="item-header">
                  <span className="bold">• {exp.company}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <div className="item-sub-header">
                  <span className="italic">{exp.role}</span>
                  <span className="date">{exp.date}</span>
                </div>
                <ul className="bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Profile Placeholder */}
          <div className="profile-image">
            {personalInfo.profileImage ? (
              <img src={personalInfo.profileImage} alt="Profile" />
            ) : (
              <svg viewBox="0 0 24 24" fill="#ccc">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
          </div>

          {/* Skills */}
          <section className="section">
            <h2 className="section-title">{sectionTitles?.skills || 'SKILLS'}</h2>
            <div className="divider"></div>
            {skills.map((skill, index) => (
              <div key={index} className="skill-group">
                <div className="bold">• {skill.title}</div>
                <div className="skill-details">{skill.details}</div>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="section">
            <h2 className="section-title">{sectionTitles?.projects || 'PROJECTS'}</h2>
            <div className="divider"></div>
            {projects.map((proj, index) => (
              <div key={index} className="item project-item">
                <div className="bold">• {proj.title} <span className="tech-link">[{proj.tech}]</span></div>
                <ul className="bullets">
                  {proj.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <section className="section">
              <h2 className="section-title">{sectionTitles?.certifications || 'CERTIFICATIONS'}</h2>
              <div className="divider"></div>
              <ul className="bullets">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert.title}</li>
                ))}
              </ul>
            </section>
          )}


        </div>
      </div>

      <style jsx>{`
        .resume-container {
          width: 210mm;
          min-height: 297mm;
          padding: 15mm;
          background: white;
          color: #333;
          font-family: 'Palatino', 'Palatino Linotype', 'Book Antiqua', serif;
          line-height: 1.3;
          margin: 0 auto;
          box-sizing: border-box;
          font-size: 9.5pt;
        }

        .main-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 20mm;
        }

        .header {
          margin-bottom: 8mm;
          text-align: left;
        }

        .name {
          font-size: 24pt;
          font-weight: normal;
          color: #000;
          margin: 0 0 2mm 0;
          letter-spacing: 1px;
          text-align: left;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-bottom: 2mm;
          align-items: center;
        }

        .contact-details {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1.5mm;
          color: #004a99;
          text-decoration: none;
          font-size: 9pt;
          transition: color 0.2s;
        }

        .pipe {
          color: #ccc;
          user-select: none;
        }

        .social-link:hover {
          color: #000;
        }

        .social-link span {
          border-bottom: 0.5pt solid transparent;
        }

        .social-link:hover span {
          border-bottom-color: #004a99;
        }

        .contact-info {
          font-size: 9pt;
          display: flex;
          gap: 4px;
          color: #555;
          margin-bottom: 1mm;
        }

        .dot {
          color: #ccc;
        }

        .location {
          font-size: 9pt;
          color: #555;
        }

        .summary-text {
          font-size: 9pt;
          color: #444;
          margin-bottom: 4mm;
          text-align: justify;
        }

        .section {
          margin-bottom: 5mm;
        }

        .section-title {
          font-size: 11pt;
          font-weight: bold;
          color: #000;
          margin: 0 0 1mm 0;
          letter-spacing: 0.5px;
        }

        .divider {
          height: 0.5pt;
          background: #000;
          margin-bottom: 2mm;
        }

        .item {
          margin-bottom: 3mm;
        }

        .item-header, .item-sub-header {
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

        .date, .location {
          font-size: 8.5pt;
          color: #444;
        }

        .bullets {
          margin: 1mm 0;
          padding-left: 5mm;
          list-style-type: none;
        }

        .bullets li {
          position: relative;
          margin-bottom: 0.5mm;
        }

        .bullets li::before {
          content: "";
          position: absolute;
          left: -3mm;
          top: 1.8mm;
          width: 1mm;
          height: 1mm;
          background: #555;
          border-radius: 50%;
        }

        .right-column {
          display: flex;
          flex-direction: column;
        }

        .profile-image {
          width: 35mm;
          height: 45mm;
          background: #f0f0f0;
          margin-left: auto;
          margin-bottom: 8mm;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1pt solid #ddd;
          overflow: hidden;
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-image svg {
          width: 25mm;
          height: 25mm;
        }

        .skill-group {
          margin-bottom: 3mm;
        }

        .skill-details {
          font-size: 8.5pt;
          margin-left: 3mm;
          margin-top: 0.5mm;
          color: #444;
        }

        .tech-link {
          font-weight: normal;
          font-size: 8pt;
          color: #555;
        }

        .project-item {
          margin-bottom: 4mm;
        }

        .award-item {
          margin-bottom: 2mm;
        }

        .hobbies-list {
          font-size: 9pt;
          font-style: italic;
        }

        @media print {
          .resume-container {
            padding: 10mm;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Template8;
