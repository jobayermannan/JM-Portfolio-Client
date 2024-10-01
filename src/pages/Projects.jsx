import React, { useState, useEffect } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

export default function Projects() {
  const [selectItemIndex, setSelectItemIndex] = useState(0);
  const { portfolioData } = useSelector(state => state.root);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  const animationVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      rotateX: 90,
      rotateY: 90,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotateX: 90,
      rotateY: 90,
      transition: {
        duration: 0.75,
        ease: "easeInOut"
      },
    },
  };

  const { projects } = portfolioData;
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <motion.div className='flex flex-col gap-5'>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className='flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll'>
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectItemIndex(index)}
              className='cursor-pointer focus:outline-none sm:flex-shrink-0'
              style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: '160px' }} // Make project title responsive
            >
              <h1 className={`text-lg px-5 py-3 ${selectItemIndex === index ? "text-mint bg-[#add8e62b] border-mint border-l-[3px] -ml-[2px]" : "text-white"}`}>
                {project.title}
              </h1>
            </button>
          ))}
        </div>
        <motion.div key={selectItemIndex} variants={animationVariants} initial="initial" animate="animate" exit="exit">
          <div className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-accent mb-4">{projects[selectItemIndex].title}</h3>
              <div className="mb-4">
                <img src={projects[selectItemIndex].image} alt={projects[selectItemIndex].title} className='w-full h-48 object-cover rounded-lg' />
              </div>
              <p className="text-text mb-4">{projects[selectItemIndex].shortDescription}</p>
              <p className="text-sm text-gray-400 mb-6">{projects[selectItemIndex].detailedDescription}</p>
              <div className='flex items-center justify-between'>
                <a href={projects[selectItemIndex].link} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-400 transition duration-300">
                  <FaExternalLinkAlt className="inline mr-2" />Project Link
                </a>
                <a href={projects[selectItemIndex].githubLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-blue-400 transition duration-300">
                  <FaGithub className="inline mr-2" />GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}