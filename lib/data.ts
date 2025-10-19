import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "C.V. Raman Global University",
    location: "Odisha, India",
    description: "Bachelor's Degree in Computer Science and Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "ESSPL - Frontend Engineer",
    location: "Bhubnaeswar, Odisha",
    description:
      "Implemented an interactive route-planning map by integrating the Google Maps API, which reduced manual data entry for logistics planners by 50%.",
      
    icon: React.createElement(FaReact),
    date: "2024 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "A personal website to showcase projects, experience, and contact information in a visually engaging way.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Email",
      "Resend",
      "Vercel",
    ],
    imageUrl: "/portfolio.png",
    githubUrl: "https://github.com/SwatiBhatia18/portfolio",
    projectUrl: "",
  },
  {
    title: "Github Lookup",
    description:
      "Explore GitHub profiles and repositories with interactive data visualizations.",
    tags: [
      "React",
      "JavaScript",
      "Chart.js",
      "Particles.js",
      "GitHub API",
      "CSS",
      "HTML5",
    ],
    imageUrl: "/githublookup.png",
    githubUrl: "https://github.com/Ayushdevgupta/Github-lookup.git",
    projectUrl: "https://github-lookup-seven.vercel.app/",
  },
  {
    title: "World Wise",
    description:
      "WorldWise is a web application that lets you track your travels by adding cities you've visited and visualizing your adventures on an interactive map.",
    tags: ["React", "React Router", "Leaflet.js", "Context API"],
    imageUrl: "/worldwise.png",
    githubUrl: "https://github.com/Ayushdevgupta/World-wise.git",
    projectUrl: "https://world-wise-v1jq.vercel.app/",
  },
  {
    title: "Fast React Pizza",
    description:
      "Fast React Pizza is a modern web application for ordering pizzas, featuring a dynamic menu, a functional shopping cart, and a real-time order tracking system",
    tags: ["React router", "Redux Toolkit", "Tailwaind CSS"],
    imageUrl: "/pizza.png",
    githubUrl: "https://github.com/Ayushdevgupta/Fast-React-Pizza.git",
    projectUrl: "https://fast-react--pizza.vercel.app/",
  },
  {
    title: "Nutrition Analysis",
    description:
      "The Nutrition Analysis App leverages React and the Edamam API to deliver precise nutritional details for a given list of ingredients.",
    tags: ["React", "Edaman API", "CSS", "HTML"],
    imageUrl: "/nutrition.png",
    githubUrl: "https://github.com/Ayushdevgupta/Nutrition-Analysis.git",
    projectUrl: "https://nutrition-analysis-ruddy.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Redux Toolkit",
  "React Query",
  "AG Grid",
  "Postman",
  "Axios",
  "GraphQL",
  "Babel",
  "Cursor AI",
  "Tailwind",
  "SASS",
  "Bootstrap",
  "Material UI",
  "RESTful APIs",
  "Git",
  "Webpack",
  "Turbopack",
  "Vite",
  "Chart.js",
  "Jest",
  "Framer Motion",
  "Agile",
  "Browser DevTools",
  "Jira",
  "Clickup",
  "GitHub",
] as const;
