"use client";

import Project from "./Project";
import type { ProjectType } from "./types";
import { motion } from "motion/react";

const Projects = () => {
  const ProjectList: ProjectType[] = [
    {
      img: "/proj1.jpg",
      title: "Tip Calculator App",
      desc: "A simple tip calculator app created with React. Enter the total amount and chose a preset tip percentage or custom tip percentage. This is a fully responsive application.",
      tech: ["HTML", "CSS", "React"],
      git: "https://github.com/UDsGitHub/tip-calculator-app",
      external: "https://udsgithub.github.io/tip-calculator-app/",
    },
    {
      img: "/proj2.jpg",
      title: "Blogr Landing Page",
      desc: "A simple landing page created with React and Tailwind css. Swipe through and appreciate the efforts in developing these wonderful designs by Frontend mentor. This is a fully responsive application.",
      tech: ["HTML", "CSS", "React", "Tailwind CSS"],
      git: "https://github.com/UDsGitHub/blogr-landing-page",
      external: "https://udsgithub.github.io/blogr-landing-page/",
    },
    {
      img: "/proj3.jpg",
      title: "Vite Gym Website",
      desc: "A Gym Web Application created with React, Tailwind css, and Framer motion. Swipe through and enjoy the smooth animations on the site and test out its responsive nature.",
      tech: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
      git: "https://github.com/UDsGitHub/Vite-Gym-Website",
      external: "https://bespoke-raindrop-baa46e.netlify.app/",
    },
    {
      img: "/proj4.jpg",
      title: "Todo List App",
      desc: "A simple todo list app created with React and Tailwind css. Enter a todo, edit it, check it as complete, and delete the todo item. Previously entered data is stored locally to preserve information.",
      tech: ["HTML", "CSS", "React", "Tailwind CSS"],
      git: "https://github.com/UDsGitHub/Todo-List-App",
      external: "https://stalwart-puppy-c5807f.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-15 sm:py-20 md:py-25">
      <h2 className="section-header">What I&apos;ve worked on</h2>
      <ul className="proj-container">
        {ProjectList.map((proj) => (
          <motion.li
            key={proj.title}
            initial={{ y: 24, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0 }}
          >
            <Project proj={proj} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
