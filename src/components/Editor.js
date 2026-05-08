import React from 'react';
import { useResume } from '../context/ResumeContext';
import { User, GraduationCap, Briefcase, Code, Plus, Trash2, ChevronDown, ChevronUp, Layout, AlignLeft, Award, MessageSquare, FileBadge } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Section = ({ id, title, icon: Icon, children, activeSection, setActiveSection }) => (
  <div className="editor-section">
    <button 
      className={`section-header ${activeSection === id ? 'active' : ''}`}
      onClick={() => setActiveSection(activeSection === id ? null : id)}
    >
      <div className="header-left">
        <Icon size={20} />
        <span>{title}</span>
      </div>
      {activeSection === id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </button>
    <AnimatePresence>
      {activeSection === id && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="section-content"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Editor = ({ mobileTab, setMobileTab }) => {
  const { 
    resumeData, 
    updatePersonalInfo, 
    updateEducation, 
    updateExperience, 
    updateProjects, 
    updateSkills,
    updateStrengths,
    updateSummary,
    setResumeData,
    selectedTemplate 
  } = useResume();
  const [activeSection, setActiveSection] = React.useState('personal');

  const sectionProps = { activeSection, setActiveSection };

  const personalSection = (
    <Section key="personal" id="personal" title="Personal Information" icon={User} {...sectionProps}>
      <div className="input-group">
        <label>Full Name</label>
        <input 
          type="text" 
          value={resumeData.personalInfo.fullName} 
          onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
        />
      </div>
      <div className="input-group">
        <label>Job Title / Role</label>
        <input 
          type="text" 
          value={resumeData.personalInfo.role || ''} 
          onChange={(e) => updatePersonalInfo({ role: e.target.value })}
          placeholder="e.g. SOFTWARE ENGINEER"
        />
      </div>
      <div className="input-grid">
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={resumeData.personalInfo.email} 
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input 
            type="text" 
            value={resumeData.personalInfo.phone} 
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
          />
        </div>
      </div>
      <div className="personal-social-grid">
        <div className="input-group">
          <label>LinkedIn</label>
          <input 
            type="text" 
            value={resumeData.personalInfo.linkedin} 
            onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
            placeholder="linkedin.com/in/username"
          />
        </div>
        <div className="input-group">
          <label>GitHub</label>
          <input 
            type="text" 
            value={resumeData.personalInfo.github} 
            onChange={(e) => updatePersonalInfo({ github: e.target.value })}
            placeholder="github.com/username"
          />
        </div>
        <div className="input-group">
          <label>LeetCode</label>
          <input 
            type="text" 
            value={resumeData.personalInfo.leetcode || ''} 
            onChange={(e) => updatePersonalInfo({ leetcode: e.target.value })}
            placeholder="leetcode.com/username"
          />
        </div>
      </div>
    </Section>
  );

  const summarySection = (
    <Section key="summary" id="summary" title="Career Objective" icon={AlignLeft} {...sectionProps}>
      <div className="input-group">
        <label>Brief overview of your background</label>
        <textarea 
          value={resumeData.summary || ''} 
          onChange={(e) => updateSummary(e.target.value)}
          placeholder="e.g. Dedicated Research Scientist with 10+ years of experience..."
          rows={4}
        />
      </div>
    </Section>
  );

  const educationSection = (
    <Section key="education" id="education" title="Education" icon={GraduationCap} {...sectionProps}>
      {resumeData.education.map((edu, index) => (
        <div key={index} className="item-editor">
          <div className="input-group">
            <label>School</label>
            <input 
              type="text" 
              value={edu.school} 
              onChange={(e) => {
                const newEdu = [...resumeData.education];
                newEdu[index].school = e.target.value;
                updateEducation(newEdu);
              }}
            />
          </div>
          <div className="input-group">
            <label>Degree</label>
            <input 
              type="text" 
              value={edu.degree} 
              onChange={(e) => {
                const newEdu = [...resumeData.education];
                newEdu[index].degree = e.target.value;
                updateEducation(newEdu);
              }}
            />
          </div>
          <div className="input-grid">
            <div className="input-group">
              <label>Location</label>
              <input 
                type="text" 
                value={edu.location} 
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].location = e.target.value;
                  updateEducation(newEdu);
                }}
              />
            </div>
            <div className="input-group">
              <label>Date</label>
              <input 
                type="text" 
                value={edu.date} 
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].date = e.target.value;
                  updateEducation(newEdu);
                }}
              />
            </div>
          </div>
          {selectedTemplate !== 'JakeRyan' && selectedTemplate !== 'TwoColumn' && (
            <div className="input-group">
              <label>Bullets (one per line)</label>
              <textarea 
                value={edu.bullets?.join('\n') || ''} 
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].bullets = e.target.value.split('\n');
                  updateEducation(newEdu);
                }}
              />
            </div>
          )}
          <button 
            className="delete-btn"
            onClick={() => updateEducation(resumeData.education.filter((_, i) => i !== index))}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => updateEducation([...resumeData.education, { school: '', location: '', degree: '', date: '' }])}
      >
        <Plus size={16} /> Add Education
      </button>
    </Section>
  );

  const experienceSection = (
    <Section key="experience" id="experience" title="Experience" icon={Briefcase} {...sectionProps}>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="item-editor">
          <div className="input-group">
            <label>Organization / Company</label>
            <input 
              type="text" 
              value={exp.company} 
              onChange={(e) => {
                const newExp = [...resumeData.experience];
                newExp[index].company = e.target.value;
                updateExperience(newExp);
              }}
            />
          </div>
          <div className="input-group">
            <label>Role / Position</label>
            <input 
              type="text" 
              value={exp.role} 
              onChange={(e) => {
                const newExp = [...resumeData.experience];
                newExp[index].role = e.target.value;
                updateExperience(newExp);
              }}
            />
          </div>
          <div className="input-grid">
            <div className="input-group">
              <label>Location</label>
              <input 
                type="text" 
                value={exp.location || ''} 
                onChange={(e) => {
                  const newExp = [...resumeData.experience];
                  newExp[index].location = e.target.value;
                  updateExperience(newExp);
                }}
              />
            </div>
            <div className="input-group">
              <label>Date Range</label>
              <input 
                type="text" 
                value={exp.date || ''} 
                onChange={(e) => {
                  const newExp = [...resumeData.experience];
                  newExp[index].date = e.target.value;
                  updateExperience(newExp);
                }}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Bullets (one per line)</label>
            <textarea 
              value={exp.bullets.join('\n')} 
              onChange={(e) => {
                const newExp = [...resumeData.experience];
                newExp[index].bullets = e.target.value.split('\n');
                updateExperience(newExp);
              }}
            />
          </div>
          <button 
            className="delete-btn"
            onClick={() => updateExperience(resumeData.experience.filter((_, i) => i !== index))}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => updateExperience([...resumeData.experience, { company: '', location: '', role: '', date: '', bullets: [] }])}
      >
        <Plus size={16} /> Add Experience
      </button>
    </Section>
  );



  const projectsSection = (
    <Section key="projects" id="projects" title="Projects" icon={Layout} {...sectionProps}>
      {resumeData.projects.map((proj, index) => (
        <div key={index} className="item-editor">
          <div className="input-group">
            <label>Project Title</label>
            <input 
              type="text" 
              value={proj.title} 
              onChange={(e) => {
                const newProj = [...resumeData.projects];
                newProj[index].title = e.target.value;
                updateProjects(newProj);
              }}
            />
          </div>
          {selectedTemplate !== 'Harishbar' && (
            <div className="input-group">
              <label>Technologies</label>
              <input 
                type="text" 
                value={proj.tech} 
                onChange={(e) => {
                  const newProj = [...resumeData.projects];
                  newProj[index].tech = e.target.value;
                  updateProjects(newProj);
                }}
              />
            </div>
          )}
          {selectedTemplate !== 'TwoColumn' && (
            <div className="input-group">
              <label>Bullets (one per line)</label>
              <textarea 
                value={proj.bullets.join('\n')} 
                onChange={(e) => {
                  const newProj = [...resumeData.projects];
                  newProj[index].bullets = e.target.value.split('\n');
                  updateProjects(newProj);
                }}
              />
            </div>
          )}
          <button 
            className="delete-btn"
            onClick={() => updateProjects(resumeData.projects.filter((_, i) => i !== index))}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => updateProjects([...resumeData.projects, { title: '', tech: '', date: '', bullets: [] }])}
      >
        <Plus size={16} /> Add Project
      </button>
    </Section>
  );

  const skillsSection = (
    <Section key="skills" id="skills" title="Skills" icon={Code} {...sectionProps}>
      {resumeData.skills.map((skill, index) => (
        <div key={index} className="item-editor">
          <div className="input-grid">
            <div className="input-group">
              <label>Title</label>
              <input 
                type="text" 
                value={skill.title} 
                onChange={(e) => {
                  const newSkills = [...resumeData.skills];
                  newSkills[index].title = e.target.value;
                  updateSkills(newSkills);
                }}
              />
            </div>
            <div className="input-group">
              <label>Details</label>
              <input 
                type="text" 
                value={skill.details} 
                onChange={(e) => {
                  const newSkills = [...resumeData.skills];
                  newSkills[index].details = e.target.value;
                  updateSkills(newSkills);
                }}
              />
            </div>
          </div>
          <button 
            className="delete-btn"
            onClick={() => updateSkills(resumeData.skills.filter((_, i) => i !== index))}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => updateSkills([...resumeData.skills, { title: '', details: '' }])}
      >
        <Plus size={16} /> Add Skill Group
      </button>
    </Section>
  );

  const strengthsSection = (
    <Section key="strengths" id="strengths" title="Strengths" icon={Award} {...sectionProps}>
      {resumeData.strengths?.map((strength, index) => (
        <div key={index} className="editor-item">
          <div className="input-grid">
            <div className="input-group" style={{ flex: '0 0 60px' }}>
              <label>Icon</label>
              <input 
                type="text" 
                value={strength.icon} 
                onChange={(e) => {
                  const newStrengths = [...resumeData.strengths];
                  newStrengths[index].icon = e.target.value;
                  updateStrengths(newStrengths);
                }}
                placeholder="⚡"
              />
            </div>
            <div className="input-group">
              <label>Strength</label>
              <input 
                type="text" 
                value={strength.text} 
                onChange={(e) => {
                  const newStrengths = [...resumeData.strengths];
                  newStrengths[index].text = e.target.value;
                  updateStrengths(newStrengths);
                }}
                placeholder="e.g. Fast Learner"
              />
            </div>
          </div>
          <button 
            className="delete-btn"
            onClick={() => updateStrengths(resumeData.strengths.filter((_, i) => i !== index))}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => updateStrengths([...(resumeData.strengths || []), { icon: '⚡', text: '' }])}
      >
        <Plus size={16} /> Add Strength
      </button>
    </Section>
  );

  const communicationSection = (
    <Section key="communication" id="communication" title="Communication Skills" icon={MessageSquare} {...sectionProps}>
      {(resumeData.communicationSkills || []).map((skill, index) => (
        <div key={index} className="item-editor">
          <div className="input-group">
            <label>Language / Skill</label>
            <input 
              type="text" 
              value={skill.title} 
              onChange={(e) => {
                const newSkills = [...resumeData.communicationSkills];
                newSkills[index].title = e.target.value;
                setResumeData({ ...resumeData, communicationSkills: newSkills });
              }}
            />
          </div>
          <div className="input-group">
            <label>Level / Detail</label>
            <input 
              type="text" 
              value={skill.details} 
              onChange={(e) => {
                const newSkills = [...resumeData.communicationSkills];
                newSkills[index].details = e.target.value;
                setResumeData({ ...resumeData, communicationSkills: newSkills });
              }}
            />
          </div>
          <button 
            className="delete-btn"
            onClick={() => {
              const newSkills = resumeData.communicationSkills.filter((_, i) => i !== index);
              setResumeData({ ...resumeData, communicationSkills: newSkills });
            }}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => {
          const newSkills = [...(resumeData.communicationSkills || []), { title: '', details: '' }];
          setResumeData({ ...resumeData, communicationSkills: newSkills });
        }}
      >
        <Plus size={16} /> Add Skill
      </button>
    </Section>
  );

  const achievementsSection = (
    <Section key="achievements" id="achievements" title="Achievements" icon={Award} {...sectionProps}>
      {(resumeData.achievements || []).map((ach, index) => (
        <div key={index} className="item-editor">
          <div className="input-grid">
            <div className="input-group" style={{ flex: '0 0 100px' }}>
              <label>Year</label>
              <input 
                type="text" 
                value={ach.date} 
                onChange={(e) => {
                  const newAch = [...resumeData.achievements];
                  newAch[index].date = e.target.value;
                  setResumeData({ ...resumeData, achievements: newAch });
                }}
              />
            </div>
            <div className="input-group">
              <label>Achievement</label>
              <input 
                type="text" 
                value={ach.title} 
                onChange={(e) => {
                  const newAch = [...resumeData.achievements];
                  newAch[index].title = e.target.value;
                  setResumeData({ ...resumeData, achievements: newAch });
                }}
              />
            </div>
          </div>
          <button 
            className="delete-btn"
            onClick={() => {
              const newAch = resumeData.achievements.filter((_, i) => i !== index);
              setResumeData({ ...resumeData, achievements: newAch });
            }}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => {
          const newAch = [...(resumeData.achievements || []), { date: '', title: '' }];
          setResumeData({ ...resumeData, achievements: newAch });
        }}
      >
        <Plus size={16} /> Add Achievement
      </button>
    </Section>
  );

  const certificationsSection = (
    <Section key="certifications" id="certifications" title="Certifications" icon={FileBadge} {...sectionProps}>
      {(resumeData.certifications || []).map((cert, index) => (
        <div key={index} className="item-editor">
          <div className="input-grid">
            <div className="input-group" style={{ flex: '0 0 100px' }}>
              <label>Year</label>
              <input 
                type="text" 
                value={cert.date} 
                onChange={(e) => {
                  const newCerts = [...resumeData.certifications];
                  newCerts[index].date = e.target.value;
                  setResumeData({ ...resumeData, certifications: newCerts });
                }}
              />
            </div>
            <div className="input-group">
              <label>Certification Name</label>
              <input 
                type="text" 
                value={cert.title} 
                onChange={(e) => {
                  const newCerts = [...resumeData.certifications];
                  newCerts[index].title = e.target.value;
                  setResumeData({ ...resumeData, certifications: newCerts });
                }}
              />
            </div>
          </div>
          <button 
            className="delete-btn"
            onClick={() => {
              const newCerts = resumeData.certifications.filter((_, i) => i !== index);
              setResumeData({ ...resumeData, certifications: newCerts });
            }}
          >
            <Trash2 size={16} /> Remove
          </button>
        </div>
      ))}
      <button 
        className="add-btn"
        onClick={() => {
          const newCerts = [...(resumeData.certifications || []), { date: '', title: '' }];
          setResumeData({ ...resumeData, certifications: newCerts });
        }}
      >
        <Plus size={16} /> Add Certification
      </button>
    </Section>
  );

  const renderSections = () => {
    if (selectedTemplate === 'JakeRyan') {
      return [
        personalSection,
        educationSection,
        experienceSection,
        projectsSection,
        skillsSection
      ];
    } else if (selectedTemplate === 'JaydevVarma') {
      return [
        personalSection,
        summarySection,
        experienceSection,
        projectsSection,
        educationSection,
        skillsSection,
        strengthsSection
      ];
    } else if (selectedTemplate === 'AutoCV') {
      return [
        personalSection,
        summarySection,
        educationSection,
        experienceSection,
        projectsSection,
        skillsSection
      ];
    } else if (selectedTemplate === 'TwoColumn') {
      return [
        personalSection,
        experienceSection,
        educationSection,
        projectsSection,
        communicationSection,
        achievementsSection,
        skillsSection,
        certificationsSection
      ];
    } else {
      return [
        personalSection,
        experienceSection,
        educationSection,
        projectsSection,
        skillsSection
      ];
    }
  };

  return (
    <div className="editor-container">
      <h2 className="editor-title desktop-only">Edit Your Resume</h2>
      {renderSections()}
    </div>
  );
};

export default Editor;
