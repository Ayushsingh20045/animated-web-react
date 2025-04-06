import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
 
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.001" className='w-full py-20 bg-[#004D43] rounded-t-3xl '>

      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap  overflow-hidden">

      <motion.h1 initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",duration:8,repeat:Infinity}} className='text-[20vw] font-["Founders Grotesk"] uppercase font-bold leading-none tracking-tighter -mb-[7vw] -mt-[3vw] pr-12'>we are ochi</motion.h1>

      <motion.h1  initial={{x:0}} animate={{x:'-100%'}} transition={{ease:"linear",duration:8,repeat:Infinity}}  className='text-[20vw] font-["Founders Grotesk"] uppercase font-bold leading-none tracking-tighter -mb-1  -mt-[3vw] pr-12'>we are ochi</motion.h1>

       
      </div>
    </div>
  )
}

export default Marque
