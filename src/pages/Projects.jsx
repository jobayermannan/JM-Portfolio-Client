import React, { useState } from 'react'
import SectionTitle from '../Components/SectionTitle'
import { projects } from '../Resources/projects-resource';

export default function Projects() {
	const [selectItemIndex, setSelectItemsIndex] = useState(0);
  return (
	 <div>
		<SectionTitle title="Projects"></SectionTitle>
		<div className="flex py-10 gap-20 sm:flex-col">
        <div className=' flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll'>
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
       <div  className='flex items-center justify-center gap-10 sm:flex-col'>

        <img src={projects[selectItemIndex].image} className='h-60 w-72'></img>
       <div className='flex flex-col gap-5'>
          <h1 className="text-mint text-xl">{projects[selectItemIndex].title}</h1>
         
          <p className="text-blue text-normal">{projects[selectItemIndex].shortDescription}</p>
          <p className="text-white text-normal">{projects[selectItemIndex].detailedDescription}</p>
        </div>
       </div>
      </div>
	 </div>
  )
}
