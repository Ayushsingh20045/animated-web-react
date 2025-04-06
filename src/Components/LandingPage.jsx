import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-1'>

     <div className="textstructure mt-36 p-20 overflow-hidden ">

       {["We create","eye-opening","presentations"].map((item,index)=>{

        return <div className="masker font-['Founders Grotesk'] ">
          <div className="w-fit  flex items-center">
       {index===1?(<motion.div initial={{width:0}} animate={{width:'9vw'}} transition={{ease:[0.45, 0, 0.55, 1],duration:1}}  className='miniImg w-[7.3vw] h-[5.3vw] mr-3 bg-red-900 relative top-1 ml-1 rounded-md overflow-hidden'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMQpw8mWNlWR_IK-RnDLBfG1UeD5ZN3NnCA&s" alt="" className='w-full h-full  object-cover' />
       </motion.div>):null}

    <h1 className='font-[600] text-[7vw] leading-[6.3vw] tracking-tight uppercase'>{item}</h1>
    </div>
    </div>
       })}

     </div>

     <div className="bottompart border-t-[1px] border-zinc-700 mt-12 px-20 pt-6 flex items-center justify-between">

{["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
    return <p className='text-xl capitalize font-normal tracking-tight leading-none'>{item}</p>
})}
<div className="startproject flex items-center gap-3 ">
    <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-3xl uppercase text-lg">start the project</div>
    <div className="circle w-12 h-12 border-[1px] border-zinc-500 rounded-full flex justify-center items-center">
   <span className='rotate-[45deg]'> <FaArrowUp /></span>
    </div>
</div>

     </div>

    </div>
  )
}

export default LandingPage
