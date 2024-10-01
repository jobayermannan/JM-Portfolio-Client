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
    <motion.div 
      className='min-h-screen flex flex-col justify-center items-start gap-6'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className='text-accent text-xl'>{welcomeText || ""}</motion.h2>
      <motion.h1 variants={itemVariants} className='text-6xl sm:text-4xl font-bold text-text'>
        {firstName || ""} {lastName || ""}
      </motion.h1>
      <motion.h2 variants={itemVariants} className='text-4xl sm:text-2xl font-semibold text-accent'>
        {caption || ""}
      </motion.h2>
      <motion.p variants={itemVariants} className='text-text text-lg max-w-2xl'>{description}</motion.p>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        className='bg-accent text-primary px-6 py-3 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-blue-400'
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}

export default Intro;