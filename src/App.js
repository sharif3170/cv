import React, { useRef, useState } from 'react';
import './App.css';
import { ResumeProvider, useResume, jakeRyanData, harishbarData, autoCVData, jaydevVarmaData, twoColumnData, namanCVData, rezumeData } from './context/ResumeContext';
import Editor from './components/Editor';
import JakeRyanTemplate from './templates/JakeRyan';
import HarishbarTemplate from './templates/Harishbar';
import AutoCVTemplate from './templates/AutoCV';
import JaydevVarmaTemplate from './templates/JaydevVarma';
import TwoColumnTemplate from './templates/TwoColumn';
import RezumeTemplate from './templates/Rezume';
import NamanCVTemplate from './templates/NamanCV';
import { Download, Layout, Edit3, Eye, X, Menu, ChevronRight, ChevronLeft } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion, AnimatePresence } from 'framer-motion';

const PreviewModal = ({ isOpen, onClose, template, data }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <div className="modal-body">
          <div className="preview-wrap scale-down">
            {template === 'JakeRyan' && <JakeRyanTemplate data={data} />}
            {template === 'Harishbar' && <HarishbarTemplate data={data} />}
            {template === 'AutoCV' && <AutoCVTemplate data={data} />}
            {template === 'JaydevVarma' && <JaydevVarmaTemplate data={data} />}
            {template === 'TwoColumn' && <TwoColumnTemplate data={data} />}
            {template === 'Rezume' && <RezumeTemplate data={data} />}
            {template === 'NamanCV' && <NamanCVTemplate data={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const MainApp = () => {
  const { resumeData, selectedTemplate, setSelectedTemplate, loadSampleData, updateSectionTitles } = useResume();
  const [view, setView] = useState('selector'); // 'selector' or 'editor'
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewTab, setPreviewTab] = useState('preview'); // 'preview' or 'structure'
  const [mobileTab, setMobileTab] = useState('edit'); // 'edit', 'preview', 'structure'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('idle'); // 'idle', 'generating', 'success', 'error'
  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = document.getElementById('resume-template');
    if (!element) {
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
      return;
    }

    setDownloadStatus('generating');

    try {
      const canvas = await html2canvas(element, {
        scale: 6,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('resume-template');
          if (clonedElement) {
            clonedElement.style.transform = 'none';
            clonedElement.style.width = '8.5in';
            clonedElement.style.minHeight = '11in';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '0.5';
            clonedElement.style.boxSizing = 'border-box';
            clonedElement.style.backgroundColor = 'white';

            const parent = clonedElement.parentElement;
            if (parent) {
              parent.style.transform = 'none';
              parent.style.width = 'auto';
              parent.style.padding = '0';
              parent.style.background = 'white';
            }
          }
        }
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'letter', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

      const links = element.querySelectorAll('a');
      const rect = element.getBoundingClientRect();

      links.forEach(link => {
        const linkRect = link.getBoundingClientRect();
        const x = ((linkRect.left - rect.left) / rect.width) * pdfWidth;
        const y = ((linkRect.top - rect.top) / rect.height) * pdfHeight;
        const width = (linkRect.width / rect.width) * pdfWidth;
        const height = (linkRect.height / rect.height) * pdfHeight;
        pdf.link(x, y, width, height, { url: link.href });
      });

      pdf.save(`${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 4000);
    } catch (error) {
      console.error('PDF Generation failed:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 4000);
    }
  };

  if (view === 'selector') {
    return (
      <div className="selector-screen">
        <header className="selector-header">
          <h1 className="logo-text">Resume<span>Builder</span></h1>
          <p>Select a professional template to get started</p>
        </header>

        <div className="templates-grid">
          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'JakeRyan' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('JakeRyan');
              loadSampleData('JakeRyan');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                <JakeRyanTemplate data={jakeRyanData} />
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('JakeRyan');
                    loadSampleData('JakeRyan');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 1</h3>
              <p>Classic Software Engineer Template</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'Harishbar' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('Harishbar');
              loadSampleData('Harishbar');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                <HarishbarTemplate data={harishbarData} />
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('Harishbar');
                    loadSampleData('Harishbar');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 2</h3>
              <p>Modern Minimalist Design</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'AutoCV' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('AutoCV');
              loadSampleData('AutoCV');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                <AutoCVTemplate data={autoCVData} />
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('AutoCV');
                    loadSampleData('AutoCV');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 3</h3>
              <p>Professional Academic Layout</p>
            </div>
          </motion.div>

          {/* Template 4: Jaydev Varma */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'JaydevVarma' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('JaydevVarma');
              loadSampleData('JaydevVarma');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                <JaydevVarmaTemplate data={jaydevVarmaData} />
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('JaydevVarma');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 4</h3>
              <p>Creative Portfolio Design</p>
            </div>
          </motion.div>

          {/* Template 5: Two Column */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'TwoColumn' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('TwoColumn');
              loadSampleData('TwoColumn');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                <TwoColumnTemplate data={twoColumnData} />
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('TwoColumn');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 5</h3>
              <p>Elegant Two-Column Layout</p>
            </div>
          </motion.div>
          {/* Template 6: Rezume */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'Rezume' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('Rezume');
              loadSampleData('Rezume');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                <RezumeTemplate data={rezumeData} />
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('Rezume');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 6</h3>
              <p>Professional Overleaf-Style Design</p>
            </div>
          </motion.div>

          {/* Template 7: Naman CV */}
          <motion.div
            whileHover={{ y: -10 }}
            className={`template-card ${selectedTemplate === 'NamanCV' ? 'selected' : ''}`}
            onClick={() => {
              setSelectedTemplate('NamanCV');
              loadSampleData('NamanCV');
              setView('editor');
            }}
          >
            <div className="template-preview-thumb">
              <div className="mini-template-view">
                {namanCVData && <NamanCVTemplate data={namanCVData} />}
              </div>
              <div className="card-actions">
                <button
                  className="card-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPreviewOpen(true);
                    setSelectedTemplate('NamanCV');
                    loadSampleData('NamanCV');
                  }}
                  title="Quick View"
                >
                  <Eye size={18} />
                </button>
              </div>
            </div>
            <div className="template-info">
              <h3>Resume Template 7</h3>
              <p>Academic & Research Layout</p>
            </div>
          </motion.div>
        </div>

        <PreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          template={selectedTemplate}
          data={resumeData}
        />
      </div>
    );
  }

  return (
    <div className="editor-screen">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-backdrop"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu-drawer"
            >
              <div className="menu-header">
                <h1 className="logo-text">Resume<span>Builder</span></h1>
              </div>

              <div className="menu-links">
                <button
                  className={`menu-link ${mobileTab === 'edit' ? 'active' : ''}`}
                  onClick={() => { setMobileTab('edit'); setIsMenuOpen(false); }}
                >
                  <div className="link-icon"><Edit3 size={20} /></div>
                  <span>Edit Resume</span>
                  <ChevronRight size={18} className="chevron" />
                </button>

                <button
                  className={`menu-link ${mobileTab === 'preview' ? 'active' : ''}`}
                  onClick={() => {
                    setMobileTab('preview');
                    setPreviewTab('preview');
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="link-icon"><Eye size={20} /></div>
                  <span>Preview Resume</span>
                  <ChevronRight size={18} className="chevron" />
                </button>

                <button
                  className={`menu-link ${mobileTab === 'structure' ? 'active' : ''}`}
                  onClick={() => {
                    setMobileTab('structure');
                    setPreviewTab('structure');
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="link-icon"><Layout size={20} /></div>
                  <span>Update Titles</span>
                  <ChevronRight size={18} className="chevron" />
                </button>

                <button
                  className="menu-link"
                  onClick={() => { loadSampleData(selectedTemplate); setIsMenuOpen(false); }}
                >
                  <div className="link-icon"><Eye size={20} /></div>
                  <span>View Sample Data</span>
                  <ChevronRight size={18} className="chevron" />
                </button>

                              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {downloadStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`download-toast ${downloadStatus}`}
          >
            <div className="toast-content">
              {downloadStatus === 'generating' && (
                <>
                  <div className="spinner"></div>
                  <span>Generating...</span>
                </>
              )}
              {downloadStatus === 'success' && (
                <>
                  <div className="status-icon success">✓</div>
                  <span>Resume downloaded successfully!</span>
                </>
              )}
              {downloadStatus === 'error' && (
                <>
                  <div className="status-icon error">!</div>
                  <span>Switch to Preview Mode to Download</span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="editor-nav">
        <div className="nav-left">
          <button className="mobile-menu-btn mobile-only" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>

          <button className="back-btn desktop-only" onClick={() => setView('selector')}>
            <ChevronLeft size={18} /> Back
          </button>
          <div className="v-divider desktop-only"></div>
          <span className="current-template desktop-only">
            {selectedTemplate === 'JakeRyan' ? 'Resume Template 1' :
              selectedTemplate === 'Harishbar' ? 'Resume Template 2' :
                selectedTemplate === 'AutoCV' ? 'Resume Template 3' :
                  selectedTemplate === 'JaydevVarma' ? 'Resume Template 4' : 
                    selectedTemplate === 'TwoColumn' ? 'Resume Template 5' : 
                      selectedTemplate === 'Rezume' ? 'Resume Template 6' : 'Resume Template 7'}
          </span>
          <span className="mobile-view-title mobile-only">
            {mobileTab === 'edit' ? 'Edit Resume' :
              mobileTab === 'preview' ? 'Preview' : 'Structure'}
          </span>
        </div>
        <div className="nav-right desktop-only">
          <button className="sample-btn-nav" onClick={() => loadSampleData(selectedTemplate)}>
            <Eye size={18} /> View Sample
          </button>
          <button className="download-btn" onClick={handleDownload}>
            Download PDF <Download size={18} />
          </button>
        </div>
        <div className="nav-right mobile-only">
          <button className="mobile-download-btn" onClick={handleDownload}>
            <Download size={20} />
          </button>
        </div>
      </nav>

      <main className="editor-main">
        <div className={`editor-sidebar ${mobileTab !== 'edit' ? 'mobile-hidden' : ''}`}>
          <Editor mobileTab={mobileTab} setMobileTab={setMobileTab} />
        </div>
        <div className={`preview-area ${mobileTab === 'edit' ? 'mobile-hidden' : ''}`}>
          <div className="preview-controls">
            <div className="control-pills">
              <button
                className={`pill ${previewTab === 'preview' ? 'active' : ''}`}
                onClick={() => setPreviewTab('preview')}
              >
                <Eye size={16} /> Preview
              </button>
              <button
                className={`pill ${previewTab === 'structure' ? 'active' : ''}`}
                onClick={() => setPreviewTab('structure')}
              >
                <Edit3 size={16} /> Structure
              </button>
            </div>
          </div>

          <div className="preview-scroll">
            {previewTab === 'preview' ? (
              <div className="preview-scale" ref={resumeRef}>
                {selectedTemplate === 'JakeRyan' && <JakeRyanTemplate data={resumeData} />}
                {selectedTemplate === 'Harishbar' && <HarishbarTemplate data={resumeData} />}
                {selectedTemplate === 'AutoCV' && <AutoCVTemplate data={resumeData} />}
                {selectedTemplate === 'JaydevVarma' && <JaydevVarmaTemplate data={resumeData} />}
                {selectedTemplate === 'TwoColumn' && <TwoColumnTemplate data={resumeData} />}
                {selectedTemplate === 'Rezume' && <RezumeTemplate data={resumeData} />}
                {selectedTemplate === 'NamanCV' && <NamanCVTemplate data={resumeData} />}
              </div>
            ) : (
              <div className="structure-editor">
                <h3>Update Section Titles</h3>
                <p className="subtitle">Customize the headers for each section of your resume</p>
                <div className="structure-grid">
                  {selectedTemplate === 'JakeRyan' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="Education"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="Experience"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="Projects"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="Technical Skills"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedTemplate === 'Harishbar' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.summary || ''}
                          placeholder="CAREER OBJECTIVE"
                          onChange={(e) => updateSectionTitles({ summary: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="SKILLS"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="EXPERIENCE"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="EDUCATION"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="PROJECTS"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.certifications || ''}
                          placeholder="CERTIFICATIONS"
                          onChange={(e) => updateSectionTitles({ certifications: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedTemplate === 'JaydevVarma' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.summary || ''}
                          placeholder="Career Objective"
                          onChange={(e) => updateSectionTitles({ summary: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="Work Experience"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="Projects"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="Education"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="Technical Skills"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.strengths || ''}
                          placeholder="Strengths"
                          onChange={(e) => updateSectionTitles({ strengths: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedTemplate === 'AutoCV' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.summary || ''}
                          placeholder="Summary"
                          onChange={(e) => updateSectionTitles({ summary: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="Education"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="Experience"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="Projects"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="Skills"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedTemplate === 'TwoColumn' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="WORK EXPERIENCE"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="EDUCATION"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="PROJECTS"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.communication || ''}
                          placeholder="COMMUNICATION SKILLS"
                          onChange={(e) => updateSectionTitles({ communication: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.achievements || ''}
                          placeholder="ACHIEVEMENTS"
                          onChange={(e) => updateSectionTitles({ achievements: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="TECHNICAL SKILLS"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.certifications || ''}
                          placeholder="CERTIFICATIONS"
                          onChange={(e) => updateSectionTitles({ certifications: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedTemplate === 'Rezume' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.summary || ''}
                          placeholder="Career Objective"
                          onChange={(e) => updateSectionTitles({ summary: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="TECHNICAL SKILLS"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="EXPERIENCE"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="EDUCATION"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="PROJECTS"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.certifications || ''}
                          placeholder="CERTIFICATIONS"
                          onChange={(e) => updateSectionTitles({ certifications: e.target.value })}
                        />
                      </div>
                    </>
                  ) : selectedTemplate === 'NamanCV' ? (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.summary || ''}
                          placeholder="CAREER OBJECTIVE"
                          onChange={(e) => updateSectionTitles({ summary: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="EDUCATION"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="SKILLS"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="WORK EXPERIENCE"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="PROJECTS"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.certifications || ''}
                          placeholder="CERTIFICATIONS"
                          onChange={(e) => updateSectionTitles({ certifications: e.target.value })}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.experience || ''}
                          placeholder="Experience"
                          onChange={(e) => updateSectionTitles({ experience: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.projects || ''}
                          placeholder="Projects"
                          onChange={(e) => updateSectionTitles({ projects: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.education || ''}
                          placeholder="Education"
                          onChange={(e) => updateSectionTitles({ education: e.target.value })}
                        />
                      </div>
                      <div className="input-group">
                        <label>Section</label>
                        <input
                          type="text"
                          value={resumeData.sectionTitles?.skills || ''}
                          placeholder="Skills"
                          onChange={(e) => updateSectionTitles({ skills: e.target.value })}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

const App = () => (
  <ResumeProvider>
    <MainApp />
  </ResumeProvider>
);

export default App;
