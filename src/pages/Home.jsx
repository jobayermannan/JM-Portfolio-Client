import React from 'react'
import Header from '../Components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'

import LeftSidebar from './LeftSidebar'

export default function Home() {
  return (
	   <div className='bg-primary px-36 sm:px-5 '>
       <Header></Header>
    <Intro></Intro>
    <About></About>
    <Experiences></Experiences>
    <Projects></Projects>
    <Courses></Courses>
    <Contact></Contact>
    <Footer></Footer>
    <LeftSidebar></LeftSidebar>
  
     </div>

  )
}
