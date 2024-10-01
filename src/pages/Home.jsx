import React, { useRef, useEffect } from 'react'
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
import MessageMe from './MessageMe'
import { motion } from 'framer-motion'
import RocketEmoji from '../Components/RocketEmoji'

export default function Home() {
  const {portfolioData} = useSelector(state => state.root)
  const sectionRefs = useRef([])

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 7)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-text"
    >
      {portfolioData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pr-20">
          <Header />
          <div ref={el => sectionRefs.current[0] = el}><Intro /></div>
          <div ref={el => sectionRefs.current[1] = el}><About /></div>
          <div ref={el => sectionRefs.current[2] = el}><Experiences /></div>
          <div ref={el => sectionRefs.current[3] = el}><Projects /></div>
          <div ref={el => sectionRefs.current[4] = el}><Courses /></div>
          <div ref={el => sectionRefs.current[5] = el}><Contact /></div>
          <div ref={el => sectionRefs.current[6] = el}><MessageMe /></div>
          <Footer />
          <LeftSidebar />
          <RocketEmoji sectionRefs={sectionRefs} />
        </div>
      )}
    </motion.div>
  )
}
