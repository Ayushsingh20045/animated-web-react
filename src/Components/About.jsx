import React from 'react'

const About = () => {
  return (
    <div   className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black  '>

        <h1 className='w-[78vw] text-[68px] font-[neueMontreal] tracking-tight leading-none mb-20 '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
</h1 >
<div className="aboutmaindiv w-full border-t-[1px] border-zinc-600 pt-10 flex ">

  <div className=" w-1/2 ">

  <h1 className='text-7xl mb-8'>Our approach:</h1>
  <button className='uppercase px-10 py-5 flex items-center justify-center gap-12 font-semibold text-lg bg-zinc-900 text-white rounded-[50px]'>read more
    <div className="w-3 h-3 rounded-full bg-white"></div>
  </button>

  </div>  
  <div className="w-1/2 h-[70vh] rounded-xl overflow-hidden">
  <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className='w-full h-full object-cover' /></div>
</div>

     
    </div>
  )
}

export default About
