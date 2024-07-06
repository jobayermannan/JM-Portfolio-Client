import React from 'react'
import Header from '../Components/Header'
import Intro from './Intro'

import Experiences from './Experiences'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'

import LeftSidebar from './LeftSidebar'
import { useSelector } from 'react-redux'
import About from './About'

export default function Home() {

  const {portfolioData} =useSelector(state=>state.root)
  console.log(portfolioData)
  return (
    <div>

	  {portfolioData &&  (<div className='bg-primary px-36 sm:px-5 '>
     <Header></Header>
     
    <Intro></Intro>
    <About></About>
    <Experiences></Experiences>
    <Projects></Projects>
    <Courses></Courses>
    <Contact></Contact>
    <Footer></Footer>
    <LeftSidebar></LeftSidebar>
  
     </div>)}

    </div>
    
  )
}
