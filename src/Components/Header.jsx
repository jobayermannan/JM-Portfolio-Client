

import React from 'react';
import logo from "../assets/1.svg"




export default function Header() {
  const imgStyle = {
    maxHeight: '100%',  // Ensures the image height does not exceed its container's height
    maxWidth: '100%',   // Ensures the image width does not exceed its container's width
  };

  return (
    <div className='bg-primary flex justify-between items-center h-24 sm:h-20' >
    <img src={logo} className='h-12 w-12'></img>
      <h3 className='text-xl text-white cursor cursor-pointer'>Theme <span className='text-mint'> |</span> Resume</h3>
    </div>
  );
}


