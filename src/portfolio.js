const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://malovey.dev',
    title: 'JM.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Joseph',
    role: 'Full-Stack Software Engineer',
    description:
      'I approach design and development with a practical mindset shaped by my background in computer science, software engineering, and business. My process is intentional and thoughtful, rooted in clarity, accessibility, and real-world impact. The web is not just a place to display information. It is a medium for expression, a system to question, and a tool to build with care. Whether I’m working on urban mobility, bike infrastructure, or digital tools for social good, I aim to create experiences that are functional, meaningful, and built to last. This studio exists to apply technology and design toward real problems and to support ideas that matter.',
    resume: '/resume.pdf',
    social: {
      linkedin: 'https://www.linkedin.com/in/josephmalovic/',
      github: 'https://github.com/josephdrazen',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'CU Hacking Quick-in App',
      description:
        'A full-stack web application that simplfies the gathering of contact tracing information during the height of the COVID-19 Pandemic. Built in 24hrs during the Carleton University 2021 CU Hacking Hackathon.',
      stack: ['React', 'SASS', 'Node', 'Express', 'MongoDB', 'Heroku'],
      sourceCode: 'https://github.com/JosephDrazen/cuhacking_2021',
    },
    {
      name: 'Suggested isn\'t safe',
      description:
        'A data-driven critique of Ottawa\'s cycling infratructure, analyzing gaps between city-promoted bike routes and real-world safety. Using geospatial data, custom visualizations, and field reserch, this project exposes the systemic flaws hidden beneath \"suggested\" pathways.',
      stack: ['Python', 'React', 'Streamlit', 'Geospatial Data'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Next JS',
    'Git',
    'CI/CD',
    'Python',
    'API Design',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'joe.malovic@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  