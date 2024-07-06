import React from 'react';
import logo from '../assets/1.svg';

export default function Header({ imgMargin, textMargin, dashboard }) {
  const imgStyle = {
    maxHeight: '100%',  // Ensures the image height does not exceed its container's height
    maxWidth: '100%',   // Ensures the image width does not exceed its container's width
    marginLeft: imgMargin,
    marginRight: imgMargin,
  };
  const textStyle = {
    marginLeft: textMargin,
    marginRight: textMargin,
  };
  return (
    <div
      className='bg-primary flex justify-between items-center h-20 sm:h-20 mb-0'
      
    >
      <div className=''>
        <img src={logo} className='h-12 w-12' style={imgStyle} />
      </div>
      <div style={textStyle}>
       {
        dashboard ?<span className='text-mint font-medium'>Dashboard</span>:   (<h1 className='text-xl text-white cursor cursor-pointer'>
        Theme <span className='text-mint'> |</span>
        <a href='/src/assets/Resume/Jobayer_Mannan.pdf' download='Jobayer_Mannan.pdf'>
          <button className='text-blue'>
            Resume
          </button>
        </a>
      </h1>) 
       }
      </div>
    </div>
  );
}


