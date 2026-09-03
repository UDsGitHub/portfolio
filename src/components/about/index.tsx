import { motion } from "motion/react";
import Profile from "../../assets/profile.jpg";
import SkillChip from "./SkillChip";

const About = () => {
  const skills = [
    "React",
    "React Native",
    "Node.js",
    "SQL",
    "Python",
    "Postgres",
    "Docker",
    "AWS",
    "NextJS",
    "Express",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="min-h-[100vh] flex flex-col py-[60px] sm:py-[80px] md:py-[100px]"
    >
      <h2 className="section-header">About Me</h2>
      <div>
        <div className="flex flex-col items-center md:flex-row-reverse gap-6">
          <motion.div
            className="w-[300px] h-[300px] rounded-2xl overflow-hidden flex-shrink-0"
            initial={{ y: 24, opacity: 0.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={Profile}
              alt="profile photo"
              className="object-cover object-top"
            />
          </motion.div>
          <div className="flex flex-col gap-4 text-neutral-500">
            <p className="text-base">
              Hi there! My name is Udochukwu Amaefule, a self taught web
              developer. I began my journey of web development back in 2021 when
              I decided this would be a useful skill to help my moms new
              business. A few months later, HTML, CSS, and Javascript became
              second nature to me.
            </p>
            <p className="text-base">
              Attending one hackathon after the other, I discovered new
              technologies and aspects of web development I needed to learn and
              improve upon. Some of these include React, APIs, and backend
              development with ASP.NET
            </p>
            <p className="text-base">
              I was fortunate enough to have the opportunity to work 2
              internships in the past year, learning more about React,
              Typescript, and ASP.NET whilst helping the companies achieve their
              goals.
            </p>
          </div>
        </div>
        <div>
          <h3 className="fascinate-regular-font text-4xl text-neutral-200 my-6">
            SKILLS
          </h3>
          <motion.div
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {skills.map((skill) => (
              <SkillChip skill={skill} key={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
