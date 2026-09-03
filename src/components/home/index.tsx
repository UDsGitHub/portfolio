import ResumePDF from "/src/assets/resume.pdf";
import { motion } from "motion/react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[100vh] md:h-full flex flex-col justify-center"
    >
      <motion.h1
        className="text-primary-100 mb-4 cursive text-3xl"
        initial={{ y: 12, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Hello,
      </motion.h1>
      <motion.h2
        className="text-primary-100"
        initial={{ y: 12, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I'm Udochukwu Amaefule.
      </motion.h2>
      <motion.h3
        className="italic bg-gradient-to-br from-[#c6c0b9] to-[#1e1e1e] bg-clip-text text-transparent"
        initial={{ y: 12, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Frontend leaning Full stack engineer
      </motion.h3>
      <motion.span
        className="text-base text-[#7f7467] mt-8 mb-4"
        initial={{ y: 12, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.22 }}
      >
        <q className="italic">
          Might not have the best eye for design but I have learned to engineer
          frontends and optimize for UX.
        </q>{" "}
        - Wise man
      </motion.span>
      <motion.a
        href={ResumePDF}
        target="_blank"
        className="primary-link"
        initial={{ y: 12, opacity: 0.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.04, transition: { duration: 0.3, ease: "easeOut" } }}
        whileTap={{ scale: 0.98, transition: { duration: 0.3, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.a>
    </section>
  );
};

export default Home;
