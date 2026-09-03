import { motion } from "motion/react";

type Props = {
  skill: string;
};

const SkillChip = ({ skill }: Props) => {
  return (
    <motion.div
      className="bg-amber-50 aspect-square py-3 px-5 text-gray-800 rounded-3xl transition-colors duration-300 hover:bg-stone-500 hover:text-white"
      variants={{
        hidden: { y: 16, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            y: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.5, ease: "linear" },
          },
        },
      }}
    >
      <p className="text-xl font-extrabold montserrat-font">{skill}</p>
    </motion.div>
  );
};

export default SkillChip;
