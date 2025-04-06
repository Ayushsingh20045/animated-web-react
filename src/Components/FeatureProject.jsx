import { animate, motion, useAnimation } from "framer-motion";

import React, { useState } from "react";

const FeatureProject = () => {

  const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];

const handleHover = (index)=>{
  // card ke zero index ke use animate ko start kr denge:
   cards[index].start({y:0})
}

const handleHoverEnd=(index)=>{
  cards[index].start({y:'100%'})
}

 
 
  return (
    <div className="featuremain w-full  py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-16">
        <h1 className="capitalize text-7xl font-[neueMontreal] ">
          Featured projects
        </h1>
      </div>

     <div className="cardStructureDiv px-20">
     <div className="cards w-full flex flex-wrap gap-6 mt-20   justify-center ">

 {/* handleHover(0) here we pass 0 as index */}

<motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="relative cardContainer w-[47%] h-[80vh] mb-10 ">
<h1 className="absolute uppercase z-50 text-8xl tracking-tighter font-bold leading-none left-full  -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[#CDEA68] overflow-hidden ">
   {"Salience Labs".split('').map((item , index)=>(
    <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.02}} className="inline-block ">
  {item}
 </motion.span>
   )
  )}
  </h1>
<div className="card w-full h-full rounded-2xl    overflow-hidden">
    <img className=" w-full h-full bg-cover " src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt="" />
</div>
</motion.div>


<motion.div className="relative cardContainer w-[47%] h-[80vh]"  onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} >

  <h1 className="absolute uppercase z-50 text-8xl tracking-tighter font-bold leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[#CDEA68] overflow-hidden">
   {"Cardboard Spaceship".split('').map((item , index)=>(
     <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.02}} className="inline-block ">
     {item}
    </motion.span>
   )
  )}
  </h1>

  <div className="card w-full h-full rounded-2xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
      alt=""
    />
  </div>
</motion.div>

<motion.div className="relative cardContainer w-[47%] h-[80vh]" onHoverStart={()=>handleHover(2)} onHoverEnd={()=>handleHoverEnd(2)} >
  <h1 className="absolute uppercase z-50 text-8xl tracking-tighter font-bold leading-none left-full -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[#CDEA68] overflow-hidden">
   {"AH2 & Matt Horn".split('').map((item , index)=>(
     <motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.02}} className="inline-block ">
     {item}
    </motion.span>
   )
  )}
  </h1>

  <div className="card w-full h-full rounded-2xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
      alt=""
    />
  </div>
</motion.div>

<motion.div className="relative cardContainer w-[47%] h-[80vh]"  onHoverStart={()=>handleHover(3)} onHoverEnd={()=>handleHoverEnd(3)} >

  <h1 className="absolute uppercase z-50 text-8xl tracking-tighter font-bold leading-none right-full translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[#CDEA68] overflow-hidden">
   {"Fyde".split('').map((item , index)=>(
     <motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.02}} className="inline-block ">
     {item}
    </motion.span>
   )
  )}
  </h1>

  <div className="card w-full h-full rounded-2xl overflow-hidden">
    <img
      className="w-full h-full object-cover"
      src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
      alt=""
    />
  </div>
</motion.div>


</div>
     </div>
    </div>
  );
};

export default FeatureProject;
