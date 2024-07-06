import React from 'react'
import logo from "../assets/1.svg"

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[100]'>
        <div className='flex gap-5 text-4xl font-semibold sm:text-3xl'>
              <img src={logo} width={40}></img>
             <h1 className="text-mint  J Font">J</h1>
            
            
             <h1 className="text-blue font-roboto M">M</h1>
        </div>
    </div>
  )
}

export default Loader