import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";

import skillsImg1 from "./assets/html-logo.svg";
import skillsImg2 from "./assets/css-logo.svg";
import skillsImg3 from "./assets/javascript-logo.svg";
import skillsImg4 from "./assets/react-logo.svg";
import skillsImg5 from "./assets/tailwind-css-logo.svg";

import skillsImg6 from "./assets/figma-logo.svg";
import skillsImg7 from "./assets/sketch-logo.svg";
import skillsImg8 from "./assets/adobe-xd-logo.svg";
import skillsImg9 from "./assets/adobe-photoshop-logo.svg";
import skillsImg10 from "./assets/invision-logo.svg";

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const links = [
  {
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    title: "First Name : ",
    description: "Moaaz",
  },

  {
    title: "Last Name : ",
    description: "Elbedewy",
  },

  {
    title: "Age : ",
    description: "27 Years",
  },

  {
    title: "Nationality : ",
    description: "Egyptian",
  },

  {
    title: "Freelance : ",
    description: "Available",
  },

  {
    title: "Address : ",
    description: "Egypt, Kafr-Elshikh",
  },

  {
    title: "Phone : ",
    description: "01095731606",
  },

  // {
  //   title: "Email : ",
  //   description: "elbedawy@gmail.com",
  // },

  {
    title: "Languages : ",
    description: "Arabic, English",
  },
];

export const stats = [
  {
    no: "3+",
    title: "Years of <br /> Experience",
  },

  {
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    no: "8+",
    title: "Happy <br /> Customers",
  },

  {
    no: "0+",
    title: " Awards <br /> Won",
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: "HTML",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 2,
    img: skillsImg2,
    title: "CSS",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 3,
    img: skillsImg3,
    title: "JavaScript",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 4,
    img: skillsImg4,
    title: "React",
    level: "Basic",
    category: "developer",
  },

  {
    id: 5,
    img: skillsImg5,
    title: "Tailwind",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 6,
    img: skillsImg6,
    title: "Figma",
    level: "Advanced",
    category: "designer",
  },

  {
    id: 7,
    img: skillsImg7,
    title: "Sketch",
    level: "Basic",
    category: "designer",
  },

  {
    id: 8,
    img: skillsImg8,
    title: "Adobe XD",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 9,
    img: skillsImg9,
    title: "Photoshop",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 10,
    img: skillsImg10,
    title: "InvisionApp",
    level: "Basic",
    category: "designer",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2026 - Present",
    title: "Web Developer [MERN] <span> Freelance </span>",
    desc: `Developed responsive websites using React and Tailwind CSS
           Converted Figma designs into functional web pages
           Improved website performance and loading speed`
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2025",
    title: "Web Design Course <span> National Telecommunication Institute (NTI) </span>",
    desc: `Learned HTML, CSS, JavaScript, and Bootstrap for modern web development
            Built responsive, mobile-friendly, and user-focused website layouts`,
  },

  {
    id: 3,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2025",
    title: "UI/UX Designer <span> Learn online </span>",
    desc: `Designed user interfaces using Figma Created user flows and wireframes
            Enhanced user experience and usability`
  },

  {
    id: 4,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2025",
    title: "Engineering Degree <span> Cairo University </span>",
    desc: `Graduation Project: Animal Disease Analysis Network (ADAN)
            Developed a web-based platform for detecting and monitoring animal
            diseases Enabled users to report cases and analyze disease spread patterns`
  },

  {
    id: 5,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2028",
    title: "Planned Master's in Computer Science <span> Expected Start: 2028 </span>",
    desc: `I am interested in software engineering and artificial intelligence,
           and I am working on developing my technical skills
           and preparing for a master's degree.`
  },

  {
    id: 6,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2023",
    title: "Programming Journey <span> Self Learning </span>",
    desc: `Started learning programming in 2022 and continuously improving
            my skills through courses, projects, and hands-on practice`
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Coffee Website',
    description: 'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: 'https://project-simple-portfolio.netlify.app',
    github: 'https://github.com/MoaazElbedawy-coder/coffee-website',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Food Product Design',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg6, skillsImg7],
    link: '',
    github: '',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Memory Guess Game',
    description: 'A light and fun game to boost your memory - guess and remember to achieve the highest score',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: 'https://memory-guess.netlify.app',
    github: 'https://github.com/MoaazElbedawy-coder/memory-guess-game',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Barbershop Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
    github: '',
  },

  {
    id: 5,

    img: projectImg5,
    title: 'Hangman Game',

    description: 'A fun word game where you guess the hidden word letter by letter',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: 'https://hangman-elbedawy-m.netlify.app',
    github: 'https://github.com/MoaazElbedawy-coder/hangman-game',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
