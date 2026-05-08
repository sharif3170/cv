import { Mail, Phone, MapPin } from 'lucide-react';

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

const HarishbarTemplate = ({ data }) => {
  const { personalInfo, education, experience, projects, skills, sectionTitles } = data;

  return (
    <div id="resume-template" className="harishbar-container v2">
      {/* Header */}
      <header className="harishbar-header">
        <h1 className="name">{personalInfo.fullName}</h1>
        <div className="contact-info">
          <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-item link">
            <Phone size={14} className="icon" /> {personalInfo.phone}
          </a>
          <span className="pipe">|</span>
          <a href={`mailto:${personalInfo.email}`} className="contact-item link">
            <Mail size={14} className="icon" /> {personalInfo.email}
          </a>
          {personalInfo.linkedin && (
            <>
              <span className="pipe">|</span>
              <a href={personalInfo.linkedin.startsWith('http') ? personalInfo.linkedin : `https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item link">
                <LinkedinIcon size={14} className="icon" /> LinkedIn
              </a>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="pipe">|</span>
              <a href={personalInfo.github.startsWith('http') ? personalInfo.github : `https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-item link">
                <GithubIcon size={14} className="icon" /> GitHub
              </a>
            </>
          )}
          {personalInfo.leetcode && (
            <>
              <span className="pipe">|</span>
              <a href={personalInfo.leetcode.startsWith('http') ? personalInfo.leetcode : `https://${personalInfo.leetcode}`} target="_blank" rel="noopener noreferrer" className="contact-item link">
                <LeetCodeIcon size={14} className="icon" /> LeetCode
              </a>
            </>
          )}
          {personalInfo.location && (
            <>
              <span className="pipe">|</span>
              <div className="contact-item">
                <MapPin size={14} className="icon" /> {personalInfo.location}
              </div>
            </>
          )}
        </div>
      </header>

      {/* Experience */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.experience?.toUpperCase() || 'EXPERIENCE'}</h2>
        <div className="section-divider"></div>
        {experience.map((exp, index) => (
          <div key={index} className="item">
            <div className="item-row main">
              <span className="bold">{exp.company}</span>
              <span className="date-loc">{exp.date}</span>
            </div>
            <div className="item-row sub">
              <span className="italic">{exp.role}</span>
              <span className="date-loc">{exp.location}</span>
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
        <div className="section-divider"></div>
        {projects.map((proj, index) => (
          <div key={index} className="item">
            <div className="item-row main">
              <span className="bold">{proj.title}</span>
              <span className="date-loc">{proj.date}</span>
            </div>
            <ul className="bullets">
              {proj.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.education?.toUpperCase() || 'EDUCATION'}</h2>
        <div className="section-divider"></div>
        {education.map((edu, index) => (
          <div key={index} className="item">
            <div className="item-row main">
              <span className="bold">{edu.school}</span>
              <span className="date-loc">{edu.date}</span>
            </div>
            <div className="item-row sub">
              <span className="italic">{edu.degree}</span>
              <span className="date-loc">{edu.location}</span>
            </div>
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

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">{sectionTitles?.skills?.toUpperCase() || 'SKILLS'}</h2>
        <div className="section-divider"></div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-row">
              <span className="bold">{skill.title} : </span>
              <span>{skill.details}</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .harishbar-container {
          width: 210mm;
          min-height: 297mm;
          padding: 12mm 15mm;
          background: white;
          color: #000;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.4;
          margin: 0 auto;
          box-sizing: border-box;
          border: 1px solid #eee;
        }

        .harishbar-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .harishbar-header .name {
          font-size: 32pt;
          font-weight: 700;
          margin: 0 0 10px 0;
          letter-spacing: -0.5px;
        }

        .harishbar-header .contact-info {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          font-size: 10pt;
          color: #444;
        }

        .harishbar-header .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: inherit;
        }

        .harishbar-header .contact-item.link:hover {
          text-decoration: underline;
          color: #000;
        }

        .harishbar-header .icon {
          color: #333 !important;
        }

        .harishbar-header .pipe {
          color: #ccc;
          user-select: none;
        }

        .section {
          margin-bottom: 18px;
        }

        .section-title {
          font-size: 13pt;
          font-weight: 700;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .section-divider {
          height: 1px;
          background: #ddd;
          width: 100%;
          margin-bottom: 10px;
        }

        .item {
          margin-bottom: 12px;
        }

        .item-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .item-row.main {
          font-size: 11pt;
        }

        .item-row.sub {
          font-size: 10.5pt;
          margin-top: 2px;
          margin-bottom: 4px;
        }

        .bold {
          font-weight: 700;
        }

        .italic {
          font-style: italic;
          color: #333;
        }

        .date-loc {
          font-size: 10pt;
          color: #666;
        }

        .bullets {
          margin: 0;
          padding-left: 20px;
          list-style-type: disc;
        }

        .bullets li {
          font-size: 10pt;
          margin-bottom: 3px;
          color: #222;
        }

        .skills-grid {
          margin-top: 4px;
        }

        .skill-row {
          font-size: 10pt;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        @media print {
          .harishbar-container {
            padding: 0.4in 0.5in;
          }
        }
      `}</style>
    </div>
  );
};

export default HarishbarTemplate;
