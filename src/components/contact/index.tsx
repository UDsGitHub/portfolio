import { motion } from "motion/react";

const Contact = () => {
  return (
    <section id="contact" className="py-[60px] sm:py-[80px] md:py-[100px]">
      <h2 className="section-header">Got an idea?</h2>
      <div className="flex flex-col items-center">
        <motion.h3
          initial={{ y: 8, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Let&apos;s talk about it
        </motion.h3>
        <motion.p
          className="text-neutral-500 py-5 w-8/12 text-center"
          initial={{ y: 8, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me using the link below and i'll get back to
          you at my earliest convenience.
        </motion.p>
        <motion.a
          href="mailto:ud.amaefule@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
          className="inline-block w-[max-content] text-base mt-8 border border-primary-100 py-4 px-7 rounded-full text-primary-100 hover:text-black hover:bg-primary-100 duration-300"
          initial={{ y: 12, opacity: 0.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0 }}
        >
          Contact me
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
