'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const sentenceVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function AnimatedText({ text, className }: AnimatedTextProps) {
  return (
    <motion.h1
      className={className}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={char + '-' + index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
