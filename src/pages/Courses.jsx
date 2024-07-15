import React, { useState } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Card } from 'antd';

export default function Courses() {
  const [selectItemIndex, setSelectItemsIndex] = useState(0);
  const { portfolioData } = useSelector(state => state.root);

  const { courses } = portfolioData;

  const animationVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.5,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className='flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll'>
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectItemsIndex(index);
              }}
              className='cursor-pointer'
            >
              <h1
                className={`text-lg px-5 py-3 ${selectItemIndex === index ? "text-mint bg-[#add8e62b] border-mint border-l-[3px] -ml-[2px]" : "text-white"}`}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <motion.div
          key={selectItemIndex}
          variants={animationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className='flex items-center justify-center gap-10 sm:flex-col'
        >
          <Card
            title={<span className="text-mint text-lg">{courses[selectItemIndex].title}</span>}
            bordered={true}
            style={{ width: '100%', borderColor: '#ADD8E6', backgroundColor: '#ADD8E6' }}
            styles={{ header: { backgroundColor: '#09112C', color: '#09112C' } }}
            className="rounded-lg"
          >
            <div className="bg-[#09112C] text-white p-4 rounded-lg">
              <img src={courses[selectItemIndex].image} alt={courses[selectItemIndex].title} className='h-52 w-80 mb-4 rounded-lg' />
              <p className=" text-normal">{courses[selectItemIndex].description}</p> {/* Added description */}
              <p className=" text-normal">{courses[selectItemIndex].link}</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}