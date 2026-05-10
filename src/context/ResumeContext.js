import React, { createContext, useContext, useState } from 'react';

const ResumeContext = createContext();

const namanCVData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'yourmail@example.com',
    phone: '+00.00.000.000',
    location: '',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    website: '',
    role: ''
  },
  summary: 'Dedicated Software Developer with a strong foundation in full-stack development, cloud infrastructure, and agile methodologies. Experienced in architecting scalable applications using React, Node.js, and Python, with a focus on performance optimization and clean code. Committed to continuous learning and delivering innovative solutions that drive business value.',
  education: [
    {
      school: 'Stanford University',
      location: 'Stanford, CA',
      degree: 'Master of Science in Computer Science',
      date: '2021 - 2023',
      gpa: '9.2/10.0',
      bullets: []
    },
    {
      school: 'UC Berkeley',
      location: 'Berkeley, CA',
      degree: 'Bachelor of Science in Computer Science',
      date: '2017 - 2021',
      gpa: '8.8/10.0',
      bullets: []
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Intermediate (Class 12th)',
      date: '2015 - 2017',
      gpa: '95%',
      bullets: []
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'SSC (Class 10th)',
      date: '2015',
      gpa: '92%',
      bullets: []
    }
  ],
  experience: [
    {
      company: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      role: 'Tech Solutions Inc.',
      date: 'Jan 2021 - present',
      bullets: [
        'Led the development of a high-performance microservices architecture using Node.js and Docker, improving system scalability by 40% and reducing latency by 150ms.',
        'Architected and implemented a real-time data streaming pipeline using Apache Kafka and Python, processing over 10M events daily with 99.9% uptime.'
      ]
    },
    {
      company: 'Full Stack Developer',
      location: 'Austin, TX',
      role: 'Digital Innovations Ltd.',
      date: 'Mar 2019 - Jan 2021',
      bullets: [
        'Developed and maintained responsive web applications using React and Redux, resulting in a 25% increase in user engagement across platforms.',
        'Optimized SQL queries and database schemas in PostgreSQL, reducing data retrieval times by 30% for high-traffic analytical dashboards.'
      ]
    }
  ],
  projects: [
    {
      title: 'Cloud-Native E-Commerce Platform',
      tech: 'React, Node.js, AWS, Terraform',
      date: 'https://github.com/username/ecommerce-cloud',
      bullets: [
        'Engineered a scalable e-commerce solution with a serverless backend using AWS Lambda and API Gateway, supporting 10k+ concurrent users.',
        'Automated infrastructure provisioning with Terraform, reducing environment setup time by 70%.'
      ]
    },
    {
      title: 'AI-Powered Task Manager',
      tech: 'TypeScript, Next.js, OpenAI API, PostgreSQL',
      date: 'https://taskmaster-ai.demo',
      bullets: [
        'Developed an intelligent task management application that utilizes OpenAI\'s GPT-4 to automatically categorize and prioritize user tasks based on natural language input.',
        'Built a responsive frontend with Next.js and Tailwind CSS, achieving sub-second page loads through server-side rendering (SSR).'
      ]
    }
  ],
  skills: [
    { title: 'Languages', details: 'JavaScript (ES6+), TypeScript, Python, Java, C++, SQL' },
    { title: 'Frameworks/Libraries', details: 'React, Node.js, Next.js, Express, Redux, Tailwind CSS' },
    { title: 'Cloud/DevOps', details: 'AWS (Lambda, S3, EC2), Docker, Kubernetes, Terraform, GitHub Actions' },
    { title: 'Tools/Databases', details: 'PostgreSQL, MongoDB, Redis, Git, Postman, VS Code' }
  ],
  certifications: [
    { title: 'AWS Certified Solutions Architect – Associate' },
    { title: 'Google Professional Cloud Developer' },
    { title: 'Meta Front-End Developer Professional Certificate' }
  ],
  sectionTitles: {
    summary: 'CAREER OBJECTIVE',
    education: 'EDUCATION',
    experience: 'WORK EXPERIENCE',
    projects: 'PROJECTS',
    skills: 'SKILLS',
    certifications: 'CERTIFICATIONS'
  }
};

export const jakeRyanData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'yourmail@example.com',
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
      gpa: '3.8/4.0',
      bullets: []
    },
    {
      school: 'Blinn College',
      location: 'Bryan, TX',
      degree: 'Associate\'s in Liberal Arts',
      date: 'Aug. 2014 -- May 2018',
      gpa: '3.6/4.0',
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
      gpa: '3.9/4.0',
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
    summary: 'CAREER OBJECTIVE',
    experience: 'EXPERIENCE',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    skills: 'SKILLS',
    certifications: 'CERTIFICATIONS'
  },
  summary: 'Dedicated Software Developer with a strong focus on creating clean, efficient, and user-centric applications. Experienced in React and modern web technologies, with a passion for continuous learning and professional growth.'
};

export const autoCVData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'yourmail@example.com',
    phone: '123-456-7890',
    location: 'Boston, MA',
    linkedin: 'linkedin.com',
    github: 'github.com',
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
      gpa: '9.5/10.0',
      bullets: ['Specialization in Artificial Intelligence and Machine Learning']
    },
    {
      school: 'National Institute of Technology',
      location: 'Warangal, India',
      degree: 'B.Tech in Information Technology',
      date: '2015 -- 2019',
      gpa: '8.8/10.0',
      bullets: ['Graduated with First Class Distinction']
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Higher Secondary Education (12th)',
      date: '2013 -- 2015',
      gpa: '94%',
      bullets: ['Stream: Physics, Chemistry, Mathematics, Computer Science']
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'Secondary School Certificate (SSC)',
      date: '2013',
      gpa: '92%',
      bullets: []
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
      gpa: '9.5/10.0',
      bullets: ['Specialization in Distributed Systems']
    },
    {
      school: 'Indian Institute of Technology, Madras',
      location: 'Chennai, India',
      degree: 'B.Tech in Computer Science',
      date: '2010 -- 2014',
      gpa: '9.2/10.0',
      bullets: ['Recipient of Institute Merit Scholarship']
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Higher Secondary Education (12th)',
      date: '2010',
      gpa: '94%',
      bullets: ['Physics, Chemistry, Mathematics, Computer Science']
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'Secondary School Certificate (SSC)',
      date: '2008',
      gpa: '92%',
      bullets: []
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
      date: '2021 -- 2023',
      gpa: '9.3/10.0'
    },
    {
      school: 'NIT Warangal',
      location: 'Warangal, India',
      degree: 'B.Tech in Computer Science',
      date: '2017 -- 2021',
      gpa: '8.9/10.0'
    },
    {
      school: 'Delhi Public School',
      location: 'New Delhi, India',
      degree: 'Intermediate (HSC)',
      date: '2015 -- 2017',
      gpa: '95%'
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'SSC',
      date: '2015',
      gpa: '93%'
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

export const rezumeData = {
  personalInfo: {
    fullName: 'YOUR NAME',
    email: 'yourmail@example.com',
    phone: '123-456-7890',
    location: 'Anycity, Anystate, Anycountry',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    website: '',
    role: 'YOUR ROLE'
  },
  summary: 'I am a highly skilled web developer with over 3 years of experience in HTML, CSS, JavaScript, and PHP. I have knowledge of popular frameworks such as React, Angular, and Vue.js and experience with REST APIs and MVC frameworks.',
  education: [
    {
      school: 'University of Anystate',
      location: 'Anycity, Anystate, Anycountry',
      degree: 'Bachelor of Science in Computer Science',
      date: 'Jan 2016 -- Dec 2020',
      gpa: '3.8/4.0'
    }
  ],
  experience: [
    {
      company: 'Anycompany',
      location: 'Remote -- Anycity, Anystate, Anycountry',
      role: 'Web Developer',
      date: 'Apr 2022 -- Present',
      bullets: [
        'Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript, and PHP',
        'Worked with REST APIs to retrieve and display data from databases',
        'Improved website performance and speed through optimization techniques by 55%'
      ]
    },
    {
      company: 'Anycompany',
      location: 'Anycity, Anystate, Anycountry',
      role: 'Backend Developer',
      date: 'Aug 2021 -- Nov 2022',
      bullets: [
        'Worked with MVC frameworks to develop robust and scalable backends',
        'Troubleshot and fixed bugs and issues in the backend to ensure smooth operation of the applications'
      ]
    },
    {
      company: 'Anycompany',
      location: 'Anycity, Anystate, Anycountry',
      role: 'Backend Developer Intern',
      date: 'Jan 2021 -- Aug 2021',
      bullets: [
        'Assisted senior web developers in the design and development of websites using HTML, CSS, and JavaScript'
      ]
    }
  ],
  projects: [
    {
      title: 'Project 1',
      tech: 'React.js, Redux, PHP, MySQL, Git',
      date: '',
      bullets: [
        'Designed and developed a clean and modern website using HTML, CSS, and JavaScript',
        'Optimized website for speed and user experience',
        'Utilized responsive design to ensure compatibility across all devices',
        'Deployed on GitHub pages via GitHub Actions'
      ]
    },
    {
      title: 'Project 2',
      tech: 'Node.js, Express, JavaScript, Git',
      date: '',
      bullets: [
        'A CRUD application exposed using a RESTful API made with Node.js',
        'Exposed POST, GET, PATCH and DELETE HTTP methods using Express'
      ]
    }
  ],
  skills: [
    { title: 'Languages', details: 'JavaScript, PHP, Java, HTML, CSS' },
    { title: 'Frameworks', details: 'React.js, Angular, Express, Node.js' },
    { title: 'Libraries', details: 'Material, Redux, React Router' },
    { title: 'Databases', details: 'MongoDB, PostgreSQL' },
    { title: 'Dev Tools', details: 'Visual Studio Code, Git, GitLab' }
  ],
  certifications: [
    { title: 'Certified Web Developer by the W3C', date: '' },
    { title: 'Microsoft Certified: Azure Developer Associate', date: '' },
    { title: 'AWS Certified Developer -- Associate', date: '' }
  ],
  sectionTitles: {
    experience: 'EXPERIENCE',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    skills: 'TECHNICAL SKILLS',
    certifications: 'CERTIFICATIONS',
    summary: 'CAREER OBJECTIVE'
  }
};

export const omkarPrabhuData = {
  personalInfo: {
    fullName: 'Your Name',
    email: 'yourmail@example.com',
    phone: '+00 0000 0000',
    website: 'yourwebsite.com',
    location: 'Your Location',
    linkedin: 'linkedin.com',
    github: 'github.com',
    leetcode: 'leetcode.com',
    role: 'Software Engineer'
  },
  summary: 'Detail-oriented Software Engineer with a proven track record of designing and implementing large-scale distributed systems. Expert in full-stack development, cloud infrastructure, and performance optimization, with a deep passion for building innovative and efficient software solutions.',
  experience: [
    {
      company: 'Google',
      location: 'Bangalore, India',
      role: 'Senior Software Engineer',
      date: 'Jan 2021 -- Present',
      bullets: [
        'Lead engineer for a distributed search indexing team, improving query performance by 30% using advanced caching and Go.',
        'Architected a real-time monitoring system for Google Cloud Platform services using Kubernetes and Prometheus.'
      ]
    },
    {
      company: 'Microsoft',
      location: 'Hyderabad, India',
      role: 'Software Engineer II',
      date: 'June 2018 -- Dec 2020',
      bullets: [
        'Developed core backend services for Azure Storage using C# and .NET Core, handling 1M+ requests per second.',
        'Collaborated with global teams to implement a zero-trust security model for enterprise cloud offerings.'
      ]
    },
    {
      company: 'Amazon',
      location: 'Chennai, India',
      role: 'Software Development Engineer Intern',
      date: 'May 2017 -- Aug 2017',
      bullets: [
        'Optimized internal inventory management API using Java and AWS DynamoDB, reducing latency by 15%.',
        'Implemented automated unit testing for the checkout service, increasing code coverage to 95%.'
      ]
    }
  ],
  education: [
    {
      school: 'Indian Institute of Technology, Delhi',
      location: 'New Delhi, India',
      degree: 'M.Tech in Software Engineering',
      date: '2021 - 2023',
      gpa: '9.5/10.0',
      bullets: []
    },
    {
      school: 'National Institute of Technology, Warangal',
      location: 'Warangal, India',
      degree: 'B.Tech in Computer Science and Engineering',
      date: '2017 - 2021',
      gpa: '9.2/10.0',
      bullets: []
    },
    {
      school: 'Sri Chaitanya Junior College',
      location: 'Hyderabad, India',
      degree: 'Intermediate (MPC)',
      date: '2015 - 2017',
      gpa: '96%',
      bullets: []
    },
    {
      school: 'St. Xavier\'s High School',
      location: 'Mumbai, India',
      degree: 'SSC (10th Standard)',
      date: '2015',
      gpa: '94%',
      bullets: []
    }
  ],
  awards: [
    {
      title: 'Fake Academy Fellow',
      organization: 'Fake Academy of Arts and Sciences',
      date: '2016'
    },
    {
      title: 'Elon Musk Award',
      organization: 'State of Engineering',
      date: '2012'
    },
    {
      title: 'ACM Fellow',
      organization: 'Association for Computing Machinery',
      date: '2009'
    }
  ],
  skills: [
    { title: 'Languages', details: 'Java, Python, C++, JavaScript, TypeScript, Go, SQL' },
    { title: 'Frameworks & Libraries', details: 'React, Node.js, Spring Boot, Next.js, Django, Redux, Express' },
    { title: 'Cloud & DevOps', details: 'AWS (EC2, S3, Lambda), Azure, Docker, Kubernetes, Terraform, Jenkins, Git' },
    { title: 'Databases', details: 'PostgreSQL, MongoDB, Redis, MySQL, Elasticsearch' }
  ],
  projects: [
    {
      title: 'AI Portfolio Manager',
      tech: 'React, Python, OpenAI API',
      date: '',
      bullets: ['Developed an intelligent asset allocation tool that uses GPT-4 for sentiment analysis and portfolio rebalancing recommendations.']
    },
    {
      title: 'E-commerce Microservices',
      tech: 'Node.js, Docker, Kubernetes',
      date: '',
      bullets: ['Built a scalable backend architecture with 10+ services, handling 50k+ daily orders with zero downtime during deployments.']
    },
    {
      title: 'Real-time Code Editor',
      tech: 'WebSocket, Redis, React',
      date: '',
      bullets: ['Engineered a collaborative code editor supporting 100+ concurrent users with sub-50ms latency using operational transformation.']
    }
  ],
  certifications: [
    { title: 'AWS Certified Solutions Architect – Associate' },
    { title: 'Google Professional Cloud Developer' },
    { title: 'Meta Front-End Developer Professional Certificate' }
  ],
  hobbies: ['UI/UX', 'Problem Solving', 'Healthcare', 'Open Source'],
  sectionTitles: {
    summary: 'CARRIER OBJECTIVE',
    education: 'EDUCATION',
    experience: 'EXPERIENCE',
    skills: 'SKILLS',
    projects: 'PROJECTS',
    certifications: 'CERTIFICATIONS'
  }
};

export const ResumeProvider = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('JakeRyan');
  const [resumeData, setResumeData] = useState(jakeRyanData);

  const loadSampleData = (templateName) => {
    switch (templateName) {
      case 'JakeRyan': setResumeData(JSON.parse(JSON.stringify(jakeRyanData))); break;
      case 'Harishbar': setResumeData(JSON.parse(JSON.stringify(harishbarData))); break;
      case 'AutoCV': setResumeData(JSON.parse(JSON.stringify(autoCVData))); break;
      case 'JaydevVarma': setResumeData(JSON.parse(JSON.stringify(jaydevVarmaData))); break;
      case 'TwoColumn': setResumeData(JSON.parse(JSON.stringify(twoColumnData))); break;
      case 'Rezume': setResumeData(JSON.parse(JSON.stringify(rezumeData))); break;
      case 'NamanCV': setResumeData(JSON.parse(JSON.stringify(namanCVData))); break;
      case 'OmkarPrabhu': setResumeData(JSON.parse(JSON.stringify(omkarPrabhuData))); break;
      default: setResumeData(JSON.parse(JSON.stringify(jakeRyanData)));
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

export { namanCVData };
