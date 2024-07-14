import React, { useState, useEffect } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import { useMediaQuery } from 'react-responsive';

export default function Experiences() {
  const [selectItemIndex, setSelectItemIndex] = useState(0);
  const { portfolioData } = useSelector(state => state.root);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  const { experiences } = portfolioData;
    // Condition to not render the component if there are no experiences
    if (!experiences || experiences.length === 0) {
      return null;
    }
  

  return (
    <motion.div
      layout
      key={selectItemIndex}
      initial={isMobile ? { opacity: 0, y: 300 } : { opacity: 0, x: -300 }}
      animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }}
      exit={isMobile ? { opacity: 0, y: 50 } : { opacity: 0, x: 50 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
      className='flex flex-col gap-5'
    >
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className='flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll'>
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setSelectItemIndex(index)}
              className='cursor-pointer focus:outline-none'
            >
              <h1
                className={`text-lg px-5 py-3 ${selectItemIndex === index ? "text-mint bg-[#add8e62b] border-mint border-l-[3px] -ml-[2px]" : "text-white"}`}
              >
                {experience.period}
              </h1>
            </button>
          ))}
        </div>
        <Card
  title={<span className="text-mint text-md">{experiences[selectItemIndex].title}</span>}
  bordered={true}
  style={{ width: '100%', borderColor: '#ADD8E6', backgroundColor: '#ADD8E6' }}
  styles={{ header: { backgroundColor: '#09112C', color: '#09112C' } }} 
  className="rounded-lg shadow-lg">

  <div className="bg-[#09112C] text-white p-4 rounded-lg"> 
    <h1 className="text-orange-400 text-lg">{experiences[selectItemIndex].company}</h1> 
    <p className="text-white text-normal">{experiences[selectItemIndex].description}</p> 
  </div>
</Card>
      
      </div>
    </motion.div>
  );
}