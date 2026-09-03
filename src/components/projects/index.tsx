import Project from "./Project";
import type { ProjectType } from "./types";
import Proj1 from "../../assets/proj1.jpg";
import Proj2 from "../../assets/proj2.jpg";
import Proj3 from "../../assets/proj3.jpg";
import Proj4 from "../../assets/proj4.jpg";
import { motion } from "motion/react";

const Projects = () => {
  const ProjectList: ProjectType[] = [
    {
      img: Proj1,
      title: "Tip Calculator App",
      desc: "A simple tip calculator app created with React. Enter the total amount and chose a preset tip percentage or custom tip percentage. This is a fully responsive application.",
      tech: ["HTML", "CSS", "React"],
      git: "https://github.com/UDsGitHub/tip-calculator-app",
      external: "https://udsgithub.github.io/tip-calculator-app/",
    },
    {
      img: Proj2,
      title: "Blogr Landing Page",
      desc: "A simple landing page created with React and Tailwind css. Swipe through and appreciate the efforts in developing these wonderful designs by Frontend mentor. This is a fully responsive application.",
      tech: ["HTML", "CSS", "React", "Tailwind CSS"],
      git: "https://github.com/UDsGitHub/blogr-landing-page",
      external: "https://udsgithub.github.io/blogr-landing-page/",
    },
    {
      img: Proj3,
      title: "Vite Gym Website",
      desc: "A Gym Web Application created with React, Tailwind css, and Framer motion. Swipe through and enjoy the smooth animations on the site and test out its responsive nature.",
      tech: ["HTML", "CSS", "React", "Tailwind CSS", "Framer Motion"],
      git: "https://github.com/UDsGitHub/Vite-Gym-Website",
      external: "https://bespoke-raindrop-baa46e.netlify.app/",
    },
    {
      img: Proj4,
      title: "Todo List App",
      desc: "A simple todo list app created with React and Tailwind css. Enter a todo, edit it, check it as complete, and delete the todo item. Previously entered data is stored locally to preserve information.",
      tech: ["HTML", "CSS", "React", "Tailwind CSS"],
      git: "https://github.com/UDsGitHub/Todo-List-App",
      external: "https://stalwart-puppy-c5807f.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-[60px] sm:py-[80px] md:py-[100px]">
      <h2 className="section-header">What I've worked on</h2>
      <ul className="proj-container">
        {ProjectList.map((proj, index) => (
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
