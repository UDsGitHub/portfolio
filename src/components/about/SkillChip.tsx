import { motion } from "motion/react";

type Props = {
  skill: string;
  index: number;
};

const SkillChip = ({ skill, index }: Props) => {
  return (
    <motion.div
      className="bg-amber-50 aspect-square py-3 px-5 text-gray-800 rounded-3xl transition-colors duration-300 hover:bg-stone-500 hover:text-white"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: (index % 4) * 0.05,
        y: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.5, ease: "linear" },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="text-xl font-extrabold montserrat-font">{skill}</p>
    </motion.div>
  );
};

export default SkillChip;
