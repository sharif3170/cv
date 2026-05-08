import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

export const jakeRyanData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'yourmail@gmail.com',
    phone: '123-456-7890',
    location: 'Georgetown, TX',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    role: 'SOFTWARE ENGINEER'
  },
  education: [
    {
      school: 'Southwestern University',
      location: 'Georgetown, TX',
      degree: 'Bachelor of Arts in Computer Science, Minor in Business',
      date: 'Aug. 2018 -- May 2021',
      bullets: []
    },
    {
      school: 'Blinn College',
      location: 'Bryan, TX',
      degree: 'Associate\'s in Liberal Arts',
      date: 'Aug. 2014 -- May 2018',
      bullets: []
    }
  ],
  experience: [
    {
      company: 'Texas A&M University',
      location: 'College Station, TX',
      role: 'Undergraduate Research Assistant',
      date: 'June 2020 -- Present',
      bullets: [
        'Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems',
        'Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data',
        'Explored ways to visualize GitHub collaboration in a classroom setting'
      ]
    },
    {
      company: 'Southwestern University',
      location: 'Georgetown, TX',
      role: 'Information Technology Support Specialist',
      date: 'Sep. 2018 -- Present',
      bullets: [
        'Communicate with managers to set up campus computers used on campus',
        'Assess and troubleshoot computer problems brought by students, faculty and staff',
        'Maintain upkeep of computers, classroom equipment, and 200 printers across campus'
      ]
    },
    {
      company: 'Southwestern University',
      location: 'Georgetown, TX',
      role: 'Artificial Intelligence Research Assistant',
      date: 'May 2019 -- July 2019',
      bullets: [
        'Explored methods to generate video game dungeons based off of The Legend of Zelda',
        'Developed a game in Java to test the generated dungeons',
        'Contributed 50K+ lines of code to an established codebase via Git',
        'Conducted a human subject study to determine which video game dungeon generation technique is enjoyable',
        'Wrote an 8-page paper and gave multiple presentations on-campus',
        'Presented virtually to the World Conference on Computational Intelligence'
      ]
    }
  ],
  projects: [
    {
      title: 'Gitlytics',
      tech: 'Python, Flask, React, PostgreSQL, Docker',
      date: 'June 2020 -- Present',
      bullets: [
        'Developed a full-stack web application using with Flask serving a REST API with React as the frontend',
        'Implemented GitHub OAuth to get data from user\'s repositories',
        'Visualized GitHub data to show collaboration',
        'Used Celery and Redis for asynchronous tasks'
      ]
    },
    {
      title: 'Simple Paintball',
      tech: 'Spigot API, Java, Maven, TravisCI, Git',
      date: 'May 2018 -- May 2020',
      bullets: [
        'Developed a Minecraft server plugin to entertain kids during free time for a previous job',
        'Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review',
        'Implemented continuous delivery using TravisCI to build the plugin upon new a release',
        'Collaborated with Minecraft server administrators to suggest features and get feedback about the plugin'
      ]
    }
  ],
  publications: [],
  skills: [
    { title: 'Languages', details: 'Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R' },
    { title: 'Frameworks', details: 'React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI' },
    { title: 'Developer Tools', details: 'Git, Docker, TravisCI, Google Cloud Platform, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse' },
    { title: 'Libraries', details: 'pandas, NumPy, Matplotlib' }
  ],
  sectionTitles: {
    summary: 'Career Objective',
    education: 'Education',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Technical Skills'
  },
  summary: ''
};

export const harishbarData = {
  personalInfo: {
    fullName: 'YOUR NAME',
    email: 'yourmail@example.com',
    phone: '555-555-5555',
    location: '',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    role: 'Creator'
  },
  education: [
    {
      school: 'Wellesley College',
      location: 'Wellesley, MA',
      degree: 'Bachelor of Arts in Computer Science and Pre-Med',
      date: 'Aug. 2014 – May 2018',
      bullets: [
        'Coursework: Data Structures, Algorithms, Databases, Computer Systems, Machine Learning',
        'Research: MIT Graybiel Lab (published author), MIT Media Lab (analyzed urban microbe spread)'
      ]
    }
  ],
  experience: [
    {
      company: 'YouTube',
      location: 'San Francisco, CA',
      role: 'Creator',
      date: 'Aug. 2019 – Present',
      bullets: [
        'Grew channel to 60k subscribers in 1.5 years; created 80+ videos on tech and productivity',
        'Conducted A/B testing on titles and thumbnails; increased video impressions by 2.5M in 3 months',
        'Designed a Notion workflow to streamline video production and roadmapping; boosted productivity by 20%',
        'Partnered with brands like Skillshare and Squarespace to expand their outreach via sponsorships',
        'Highlights: The Problem with Productivity Apps, Obsidian App Review, Not-So-Minimal Desk Setup'
      ]
    },
    {
      company: 'Google Verily',
      location: 'San Francisco, CA',
      role: 'Software Engineer',
      date: 'Aug. 2018 – Sept. 2019',
      bullets: [
        'Led front-end development of a dashboard to process 50k blood samples and detect early-stage cancer',
        'Rebuilt a Quality Control product with input from 20 cross-functional stakeholders, saving $1M annually',
        'Spearheaded product development of a new lab workflow tool, leading to a 40% increase in efficiency; shadowed 10 core users, iterated on design docs, and implemented the solution with one engineer'
      ]
    },
    {
      company: 'Amazon',
      location: 'Seattle, WA',
      role: 'Software Engineering Intern',
      date: 'May 2017 – Aug. 2017',
      bullets: [
        'Worked on the Search Customer Experience Team; received a return offer for a full-time position',
        'Shipped a new feature to 2M+ users to improve the search experience for movie series-related queries',
        'Built a back-end database service in Java and implemented a front-end UI to support future changes'
      ]
    }
  ],
  projects: [
    {
      title: 'Hyku Consulting',
      tech: '',
      date: '',
      bullets: [
        'Mentored 15 students towards acceptance at top US boarding schools; achieved 100% success rate',
        'Designed a collaborative learning ecosystem for students and parents with Trello, Miro, and Google Suite'
      ]
    },
    {
      title: 'Minimal Icon Pack',
      tech: '',
      date: '',
      bullets: [
        'Designed and released 100+ minimal iOS and Android icons from scratch using Procreate and Figma',
        'Marketed the product and design process on YouTube; accumulated over $250 in sales on Gumroad'
      ]
    },
    {
      title: 'CommonIntern',
      tech: '',
      date: '',
      bullets: [
        'Built a Python script to automatically apply to jobs on Glassdoor using BeautifulSoup and Selenium',
        '500 stars on GitHub; featured on Hackaday; made the front page of r/python and r/programming'
      ]
    }
  ],
  skills: [
    { title: 'Languages', details: 'Python, JavaScript (React.js), HTML/CSS, SQL (PostgreSQL, MySQL)' },
    { title: 'Technologies', details: 'React, Node.js, Flask, JUnit, WordPress, Material-UI, FastAPI' },
    { title: 'Developer Tools', details: 'Git, Docker, TravisCI, Google Cloud Platform, VS Code' }
  ],
  sectionTitles: {
    experience: 'EXPERIENCE',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    skills: 'SKILLS'
  },
  summary: ''
};

export const autoCVData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'yourmail@example.com',
    phone: '123-456-7890',
    location: 'Boston, MA',
    linkedin: 'linkedin.com/in/username',
    github: 'github.com/username',
    leetcode: 'leetcode.com',
    role: 'SENIOR SOFTWARE ENGINEER'
  },
  summary: 'Results-oriented Senior Software Engineer with 6+ years of experience in architecting and implementing scalable distributed systems, cloud-native infrastructure, and high-performance backend services. Proven expertise in leading cross-functional teams, optimizing system performance, and driving innovation at top-tier tech companies like Google and Microsoft.',
  education: [
    {
      school: 'Indian Institute of Technology, Bombay',
      location: 'Mumbai, India',
      degree: 'M.Tech in Computer Science and Engineering',
      date: '2019 -- 2021',
      bullets: ['Specialization in Artificial Intelligence and Machine Learning', 'GPA: 9.5/10.0']
    },
    {
      school: 'National Institute of Technology',
      location: 'Warangal, India',
      degree: 'B.Tech in Information Technology',
      date: '2015 -- 2019',
      bullets: ['Graduated with First Class Distinction', 'Major GPA: 8.8/10.0']
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Higher Secondary Education (12th)',
      date: '2013 -- 2015',
      bullets: ['CBSE Board - 94%', 'Stream: Physics, Chemistry, Mathematics, Computer Science']
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'Secondary School Certificate (SSC)',
      date: '2013',
      bullets: ['Maharashtra State Board - 92%']
    }
  ],
  experience: [
    {
      company: 'Google',
      location: 'Bangalore, India',
      role: 'Senior Software Engineer',
      date: '2021 -- Present',
      bullets: [
        'Leading a team of 8 engineers in developing high-performance search infrastructure',
        'Reduced query latency by 25% through optimized distributed caching strategies',
        'Architected a real-time monitoring dashboard using Go and Kubernetes'
      ]
    },
    {
      company: 'Microsoft',
      location: 'Hyderabad, India',
      role: 'Software Engineer II',
      date: '2019 -- 2021',
      bullets: [
        'Developed core features for Azure Cloud services using C# and .NET Core',
        'Collaborated with cross-functional teams to deliver enterprise-scale security patches',
        'Implemented automated CI/CD pipelines, reducing deployment errors by 30%'
      ]
    }
  ],
  projects: [
    {
      title: 'Cloud-Native Infrastructure',
      tech: 'AWS, Terraform, Kubernetes',
      date: '2022 -- Present',
      bullets: [
        'Designed and implemented a multi-region cloud infrastructure using Terraform, reducing deployment time by 40%.',
        'Managed high-availability Kubernetes clusters supporting over 100 microservices with 99.99% uptime.'
      ]
    },
    {
      title: 'Real-time Data Pipeline',
      tech: 'Python, Apache Kafka, Redis',
      date: '2021 -- 2022',
      bullets: [
        'Built a high-throughput data ingestion pipeline processing 50k+ events per second using Kafka.',
        'Implemented real-time analytics using Redis, providing sub-millisecond query latency for dashboarding.'
      ]
    }
  ],

  skills: [
    { title: 'Programming', details: 'Java, Python, C++, Go, JavaScript, SQL' },
    { title: 'Technologies', details: 'React, Node.js, Spring Boot, Docker, Kubernetes, AWS' },
    { title: 'Tools', details: 'Git, Jenkins, Terraform, Kafka, Redis, Elasticsearch' }
  ],
  sectionTitles: {
    summary: 'Career Objective',
    education: 'Education',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Technical Skills'
  }
};

export const jaydevVarmaData = {
  personalInfo: {
    fullName: 'YOUR NAME',
    email: 'yourmail@example.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    role: 'Senior Full Stack Engineer'
  },
  summary: 'Senior Software Engineer with 8+ years of experience in building scalable web applications and microservices. Expert in React, Node.js, and Cloud Infrastructure. Passionate about mentoring teams and driving technical excellence.',
  education: [
    {
      school: 'Indian Institute of Technology, Madras',
      location: 'Chennai, India',
      degree: 'M.Tech in Computer Science',
      date: '2014 -- 2016',
      bullets: ['Specialization in Distributed Systems', 'GPA: 9.5/10.0']
    },
    {
      school: 'Indian Institute of Technology, Madras',
      location: 'Chennai, India',
      degree: 'B.Tech in Computer Science',
      date: '2010 -- 2014',
      bullets: ['GPA: 9.2/10.0', 'Recipient of Institute Merit Scholarship']
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Higher Secondary Education (12th)',
      date: '2010',
      bullets: ['CBSE Board - 94%', 'Physics, Chemistry, Mathematics, Computer Science']
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'Secondary School Certificate (SSC)',
      date: '2008',
      bullets: ['Maharashtra State Board - 92%']
    }
  ],
  experience: [
    {
      company: 'Meta',
      location: 'London, UK',
      role: 'Senior Software Engineer',
      date: '2020 -- Present',
      bullets: [
        'Optimized core News Feed components, improving client-side performance by 20%.',
        'Led the migration of legacy services to a modern GraphQL-based architecture.',
        'Mentored a team of 5 junior engineers and conducted 50+ technical interviews.'
      ]
    },
    {
      company: 'Uber',
      location: 'Bangalore, India',
      role: 'Software Engineer II',
      date: '2017 -- 2020',
      bullets: [
        'Developed real-time driver dispatch algorithms using Go and Kafka.',
        'Reduced infrastructure costs by 15% through efficient resource management in AWS.',
        'Built internal tooling for monitoring service health across 100+ microservices.'
      ]
    }
  ],
  projects: [
    {
      title: 'Real-time Collaboration Platform',
      tech: 'React, Node.js, Socket.io, Redis',
      date: '2022 -- 2023',
      bullets: [
        'Built a collaborative code editor supporting 50+ concurrent users with real-time synchronization.',
        'Implemented Operational Transformation (OT) to resolve edit conflicts and ensure data consistency.',
        'Optimized WebSocket performance, reducing latency by 40% using Redis Pub/Sub.'
      ]
    },
    {
      title: 'Distributed Task Scheduler',
      tech: 'Go, Redis, Docker, gRPC',
      date: '2021 -- 2022',
      bullets: [
        'Developed a high-availability task scheduling system capable of processing 10k+ tasks per second.',
        'Architected a distributed worker pool using gRPC for low-latency communication.',
        'Containerized the entire infrastructure using Docker and orchestrated deployments with Kubernetes.'
      ]
    }
  ],
  skills: [
    { title: 'Frontend', details: 'React, Next.js, TypeScript, Redux, Tailwind' },
    { title: 'Backend', details: 'Node.js, Go, GraphQL, PostgreSQL, Redis' },
    { title: 'DevOps', details: 'Docker, Kubernetes, AWS, Terraform, CI/CD' }
  ],
  strengths: [
    { icon: '⚡', text: 'Fast Learner' },
    { icon: '🤝', text: 'Team Player' },
    { icon: '🎯', text: 'Detail Oriented' },
    { icon: '💡', text: 'Problem Solver' },
    { icon: '🧠', text: 'Strategic Thinker' },
    { icon: '🗣️', text: 'Effective Communicator' }
  ],
  sectionTitles: {
    summary: 'Career Objective',
    education: 'Education',
    experience: 'Work Experience',
    projects: 'Projects',
    skills: 'Technical Skills',
    strengths: 'Strengths'
  }
};

export const twoColumnData = {
  personalInfo: {
    fullName: 'YOUR NAME',
    email: 'yourmail@example.com',
    phone: '123-456-7890',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    role: 'YOUR ROLE'
  },
  summary: '',
  education: [
    {
      school: 'IIT Bombay',
      location: 'Mumbai, India',
      degree: 'M.Tech in Computer Science',
      date: '2021 -- 2023'
    },
    {
      school: 'NIT Warangal',
      location: 'Warangal, India',
      degree: 'B.Tech in Computer Science',
      date: '2017 -- 2021'
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Intermediate (HSC)',
      date: '2015 -- 2017'
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'SSC',
      date: '2015'
    }
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      date: 'JAN 2022 -- PRESENT',
      bullets: [
        'Led development of a high-traffic microservices architecture, improving system scalability by 40% and reducing latency by 150ms.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Web Solutions',
      location: 'Oakville, ON',
      date: 'JUNE 2020 -- DEC 2021',
      bullets: [
        'Developed and maintained 20+ responsive web applications using React, Node.js, and PostgreSQL, serving over 100k monthly active users.'
      ]
    },
    {
      role: 'Software Engineer Intern',
      company: 'StartUp Inc',
      location: 'Remote',
      date: 'MAY 2019 -- MAY 2020',
      bullets: [
        'Collaborated on the migration of a legacy monolithic application to a modern React-based frontend, resulting in a 30% increase in developer productivity.'
      ]
    }
  ],
  projects: [
    {
      title: 'E-Commerce Platform',
      date: '2023',
      tech: 'React, Node.js, Stripe',
      bullets: []
    },
    {
      title: 'Portfolio Website',
      date: '2022',
      tech: 'Next.js, Framer Motion',
      bullets: []
    },
    {
      title: 'Task Management Tool',
      date: '2021',
      tech: 'TypeScript, Firebase',
      bullets: []
    }
  ],
  achievements: [
    { date: '2023', title: 'Winner, Global Open Source Hackathon' },
    { date: '2023', title: 'Top 1% on LeetCode (Global Rank)' },
    { date: '2021', title: 'Gold Medalist, B.Tech Computer Science' },
    { date: '2021', title: 'Published Research Paper in IEEE' }
  ],
  skills: [
    { title: 'LANGUAGES', details: 'JavaScript, TypeScript, Python, Java' },
    { title: 'FRAMEWORKS', details: 'React, Next.js, Express, Tailwind' },
    { title: 'TOOLS', details: 'Git, Docker, Firebase, AWS' }
  ],
  communicationSkills: [
    { title: 'ENGLISH', details: 'Fluent (IELTS 8.5)' },
    { title: 'HINDI', details: 'Native Speaker' },
    { title: 'TELUGU', details: 'Native Speaker' }
  ],
  certifications: [
    { date: '2023', title: 'AWS Certified Solutions Architect' },
    { date: '2022', title: 'Google Professional Cloud Developer' },
    { date: '2021', title: 'Meta Front-End Developer Professional' }
  ],
  sectionTitles: {
    experience: 'WORK EXPERIENCE',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    skills: 'TECHNICAL SKILLS',
    communication: 'COMMUNICATION SKILLS',
    achievements: 'ACHIEVEMENTS',
    certifications: 'CERTIFICATIONS',
    contact: 'CONTACT'
  }
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(jakeRyanData);
  const [selectedTemplate, setSelectedTemplate] = useState('JakeRyan');

  // Automatically load sample data when switching templates to prevent "mixed" content
  const loadSampleData = (templateName) => {
    switch (templateName) {
      case 'JakeRyan':
        setResumeData(jakeRyanData);
        break;
      case 'Harishbar':
        setResumeData(harishbarData);
        break;
      case 'AutoCV':
        setResumeData(autoCVData);
        break;
      case 'JaydevVarma':
        setResumeData(jaydevVarmaData);
        break;
      case 'TwoColumn':
        setResumeData(twoColumnData);
        break;
      default:
        setResumeData(jakeRyanData);
    }
  };

  const updatePersonalInfo = (info) => {
    setResumeData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, ...info } }));
  };

  const updateEducation = (edu) => {
    setResumeData(prev => ({ ...prev, education: edu }));
  };

  const updateExperience = (exp) => {
    setResumeData(prev => ({ ...prev, experience: exp }));
  };

  const updateProjects = (proj) => {
    setResumeData(prev => ({ ...prev, projects: proj }));
  };

  const updatePublications = (pubs) => {
    setResumeData(prev => ({ ...prev, publications: pubs }));
  };

  const updateSkills = (skills) => {
    setResumeData(prev => ({ ...prev, skills: skills }));
  };

  const updateStrengths = (strengths) => {
    setResumeData(prev => ({ ...prev, strengths: strengths }));
  };

  const updateSummary = (sum) => {
    setResumeData(prev => ({ ...prev, summary: sum }));
  };

  const updateSectionTitles = (titles) => {
    setResumeData(prev => ({ ...prev, sectionTitles: { ...prev.sectionTitles, ...titles } }));
  };



  return (
    <ResumeContext.Provider value={{
      resumeData,
      setResumeData,
      updatePersonalInfo,
      updateEducation,
      updateExperience,
      updateProjects,
      updatePublications,
      updateSkills,
      updateStrengths,
      updateSummary,
      updateSectionTitles,
      loadSampleData,
      selectedTemplate,
      setSelectedTemplate
    }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
