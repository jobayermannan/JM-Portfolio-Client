import React, { useState } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { experiences } from '../Resources/experiences-resource';

export default function Experiences() {
  const [selectItemIndex, setSelectItemsIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className=' flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll'>
          {experiences.map((experience, index) => (
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
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className="text-mint text-xl">{experiences[selectItemIndex].title}</h1>
          <h1 className="text-blue text-lg">{experiences[selectItemIndex].company}</h1>
          <p className="text-white text-normal">{experiences[selectItemIndex].description}</p>
        </div>
      </div>
    </div>
  );
}
