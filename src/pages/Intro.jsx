import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Intro() {
  const { portfolioData } = useSelector(state => state.root);
  const { intro } = portfolioData;
  const { welcomeText, firstName, lastName, caption, description } = intro;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } }
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.7 } }
  };

  return (
    <motion.div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-4'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className='text-dark'>{welcomeText || ""}</motion.h1>
      <motion.h1 variants={itemVariants} className='text-7xl sm:text-3xl font-semibold text-dark'>
        {firstName || ""} {lastName || ""}
      </motion.h1>
      <motion.h1 variants={itemVariants} className='text-6xl sm:text-3xl font-semibold text-[#98FF98]'>
        {caption || ""}
      </motion.h1>
      <motion.p variants={itemVariants} className='text-dark w-2/3'>{description}</motion.p>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        className='border-2 px-4 rounded-md border-button-primary text-[#98FF98]'
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

export default Intro;