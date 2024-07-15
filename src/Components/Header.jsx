import React, { useState } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'antd/dist/antd'; // Ensure the correct import for CSS
import logo from '../assets/1.svg'; // Adjust the path to your logo

export default function Header({ imgMargin, textMargin, dashboard }) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '/src/assets/Resume/Jobayer_Mannan.pdf';
    link.download = 'Jobayer_Mannan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Set downloaded state to true to show the message
    setDownloaded(true);

    // Optionally, reset the state after a few seconds
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className='bg-primary flex justify-between items-center h-20 sm:h-20 mb-0'>
      <div style={{ marginLeft: imgMargin, marginRight: imgMargin }} className='flex items-center'>
      <Link to="/">
    <img src={logo} alt="Logo" style={{ height: '50px' }} />
  </Link>
      </div>
      <div style={{ marginLeft: textMargin, marginRight: textMargin }} className='flex items-center gap-4'>
        {dashboard ? (
          <span className='text-mint font-medium'>Dashboard</span>
        ) : (
          <>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button type="" className='unique-button ' onClick={handleDownload}>
                Resume
              </Button>
            </motion.div>
            {downloaded && <span className='text-mint'>Resume downloaded successfully!</span>}
          
            <Link to="/blog">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button type="" className='unique-button'>
                  Blog
                </Button>
              </motion.div>
            </Link>
           
          </>
        )}
      </div>
    </div>
  );
}