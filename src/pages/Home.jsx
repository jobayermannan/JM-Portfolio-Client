import React from 'react'
import Header from '../Components/Header'
import Intro from './Intro'
import About from './About'

export default function Home() {
  return (
	   <div className='bg-primary px-36'>
       <Header></Header>
    <Intro></Intro>
    <About></About>
  
     </div>

  )
}
