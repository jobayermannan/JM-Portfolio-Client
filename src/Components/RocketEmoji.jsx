import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import rocket from '../assets/rocket.svg';

const colors = ['#ff4b4b', '#ff9f1c', '#4caf50', '#2196f3', '#9c27b0'];

const RocketEmoji = ({ sectionRefs }) => {
  const [direction, setDirection] = useState('up');
  const [showExhaust, setShowExhaust] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const prevScrollY = useRef(0);
  const [smokeY, setSmokeY] = useState(0);

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], ['10%', '90%']);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > prevScrollY.current) {
        setDirection('down');
        setSmokeY((prev) => Math.max(prev - 2, -20)); // Move smoke up when rocket goes down
      } else {
        setDirection('up');
        setSmokeY((prev) => Math.min(prev + 2, 20)); // Move smoke down when rocket goes up
      }
      prevScrollY.current = scrollPosition;

      sectionRefs.current.forEach((sectionRef, index) => {
        if (sectionRef && scrollPosition > sectionRef.offsetTop - window.innerHeight / 2) {
          setShowExhaust(true);
          setColorIndex(index % colors.length);
          setTimeout(() => setShowExhaust(false), 2000);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <motion.div 
      className="fixed right-4 z-50"
      style={{ top: yRange }}
    >
      <div className="relative">
        <motion.div
          className={`w-16 h-16 transition-all duration-300 ease-in-out rocket ${direction}`}
          animate={{ 
            y: direction === 'up' ? -20 : 20, // Changed this line
            rotate: direction === 'up' ? 0 : 180, // Changed this line
            transition: { duration: 0.3 }
          }}
        >
          <img src={rocket} alt="Rocket" className="w-full h-full" />
          <div className="rocket-glow" style={{ backgroundColor: colors[colorIndex] }}></div>
        </motion.div>
        {showExhaust && (
          <div className={`smoke-container ${direction}`} style={{ transform: `translateY(${smokeY}px)` }}>
            <div className="smoke"></div>
            <div className="smoke-layer" style={{ animationDelay: '0.5s' }}></div>
            <div className="smoke-layer" style={{ animationDelay: '1s' }}></div>
            <div className="smoke-layer" style={{ animationDelay: '1.5s' }}></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RocketEmoji;