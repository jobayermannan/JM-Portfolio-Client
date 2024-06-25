import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import Lottie from 'react-lottie-player';
import animationData from '../../src/assets/Animations/Welcome animation.json';

export default function About() {
	const skills =[ 'Javascript','HTML','CSS','React','Node.js','Redux','MongoDB','Next.js','Express.js',]
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col mb-10">
        
		  <div className=' h-[60vh]  w-1/2 sm:w-full mr-4 sm:flex sm:justify-center sm:items-center'>
        <div className=''>
		  <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 320, height: 320 }}
          />
		  </div>
        </div>
		  <div className='flex flex-col gap-5 w-1/2    font-md sm:w-full'>
			<p className='text-dark text-lg'>
			Hailing from Bangladesh, my journey into the world of web development began through the endless resources available on YouTube. The pivotal moment of inspiration came from Jankar Mahbub, a renowned developer from Bangladesh.
			Today, I am a professional MERN stack developer, proficient in React, Next.js, Redux, and knowledgeable in both front-end and back-end development. 
			</p>
			
			<p className='text-dark'>
			Continuous learning and skill enhancement are integral to my journey. I regularly update my knowledge and capabilities to stay at the forefront of web development. My ultimate goal is to become a senior software engineer, where I can leverage my expertise to solve real-life problems and make a significant difference in the tech community.
			</p>

		  </div>
       
      </div>

		<div className='py-5'>
			<h1 className='text-xl text-amber-400'> Technologies I Have Learned :</h1>
		<div className="flex flex-wrap gap-10 mt-5">
		{skills.map((skill,index)=>(
				<div> 
					<h1 className='text-dark border-2 border-amber-400 font-medium  py-3 px-10'>{skill}</h1>
				</div>
			))}
		</div>
		</div>
    </div>
  );
}