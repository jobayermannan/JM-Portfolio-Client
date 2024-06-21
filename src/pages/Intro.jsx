import React from 'react'

function Intro() {
  return (
	 <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-4  '>
		<h1 className='text-dark'>Hello ! I am</h1>
		<h1 className='text-7xl font-semibold text-light'> Jobayer Mannan</h1>
		<h1 className='text-6xl font-semibold text-tertiary'> I build things for the web</h1>
		<p className='text-dark w-2/3'>Hi there!  I'm Jobayer Mannan, a passionate MERN stack developer currently pursuing Computer Science Engineering. With a solid foundation in JavaScript and hands-on experience in React and Next.js.</p>
		<button className='border-2  px-4 rounded-md border-dark text-button-primary-text bg-dark'>Get Started</button>
	 </div>
  )
}

export default Intro