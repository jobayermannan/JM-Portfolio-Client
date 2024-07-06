import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {
	const {loading,portfolioData} =useSelector(state=>state.root)
	console.log(portfolioData)

	const {intro} =portfolioData
	const { welcomeText,
      firstName,
      lastName,
      caption,
      description }=intro


  return (
	 <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-4  '>
		<h1 className='text-dark'>{welcomeText ||""}</h1>
		<h1 className='text-7xl sm:text-3xl  font-semibold text-dark'> {firstName || ""} {lastName||""}</h1>
		<h1 className='text-6xl sm:text-3xl  font-semibold text-[#98FF98]'> {caption || ""}</h1>
		<p className='text-dark w-2/3'>{description}</p>
		<button className='border-2  px-4 rounded-md border-button-primary text-[#98FF98]'>Get Started</button>
	 </div>
  )
}

export default Intro