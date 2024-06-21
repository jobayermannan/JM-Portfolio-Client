

import React from 'react';




export default function Header() {
  const imgStyle = {
    maxHeight: '100%',  // Ensures the image height does not exceed its container's height
    maxWidth: '100%',   // Ensures the image width does not exceed its container's width
  };

  return (
    <div className='bg-primary flex justify-center items-center h-24' >
      
      <img 
        className='h-auto max-h-full w-auto   max-w-full' // Use max-h-full and max-w-full to constrain image within its container
        style={imgStyle}
        src='/src/assets/2iBiErVX4nMny3BuaZWJRrEf12Q.svg' 
        alt='Logo of The Website' 
      />
    </div>
  );
}


