import React from 'react'

const Footer = () => {
  return (
    <div className='footermain w-full h-screen bg-zinc-900 p-20 flex  font-[neueMontreal]'>

      <div className='leftpart w-1/2 h-full flex flex-col justify-between '>
      
     <div className="heading">
     <h1 className='text-[6vw] leading-none -mb-7  tracking-tighter font-semibold uppercase'>eye-</h1>
     <h1 className='text-[6vw] leading-none -mb-7 tracking-tighter   font-bold uppercase'>opening</h1>
     </div>
    

      </div>
      <div className='rightpart w-1/2 h-full capitalize'>

      <h1 className='text-[6vw]  tracking-tighter font-semibold uppercase'>presentations</h1>

      <div className="details ">

        <h1 className='text-xl mb-4 mt-3'>S:</h1>
        <a className='block mb-2 text-xl underline ' href="#">instagram</a>
        <a className='block mb-2 text-xl underline ' href="#">behance</a>
        <a className='block mb-2 text-xl underline ' href="#">facebook</a>
        <a className='block  text-xl underline ' href="#">linkedin</a>
      </div>

     <div className="flex items-center justify-between pr-10">
     <div className="details2 ">
        <h1 className='text-xl mb-4 mt-8'>L:</h1>
        <a className='block mb-2 text-xl underline ' href="#">202-1965 W 4th Ave</a>
        <a className='block mb-8 text-xl underline ' href="#">Vancouver, Canada</a>
        <a className='block mb-2 text-xl underline ' href="#">30 Chukarina St</a>
        <a className='block mb-2 text-xl underline ' href="#">Lviv, Ukraine</a>
      </div>

     <div className="details2 ">
        <h1 className='text-xl mb-4 mt-8'>M:</h1>

        <a className='block mb-2 text-xl underline ' href="#">Home</a>
        <a className='block mb-2 text-xl underline ' href="#">Services</a>
        <a className='block mb-2 text-xl underline ' href="#">Our work</a>
        <a className='block mb-2 text-xl underline ' href="#">About us</a>
        <a className='block mb-2 text-xl underline ' href="#">Insights</a>
        <a className='block mb-2 text-xl underline ' href="#">Contact us</a>
      </div>
     </div>

      <div className="details3 ">
        <h1 className='text-xl mb-5 mt-8'>E:</h1>
        <a className='block mb-2 text-xl underline ' href="#">hello@ochi.design</a>
        
      </div>

      </div>



    </div>
  )
}

export default Footer
