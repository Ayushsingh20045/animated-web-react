import React, { useEffect, useState } from 'react'

const Playfull = () => {
    const [rotate, setrotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2 ;  
            let deltaY = mouseY - window.innerHeight/2 ;      //isse mereko mere screen ke center se mouse ki kya duri h vo difference mil jayega.

            //now find the angle only using formula and convert radians to degree by multiply:

          var angle =   Math.atan2(deltaY,deltaX)*(180/Math.PI);

          setrotate(angle-180);
        
         
 
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.8" className="w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center relative">
       <div className="eyesdiv absolute  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-12 items-center ">
       <div className=" whitepart w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
<div className="blackpart w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
<div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line w-full absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  h-10  ">
<div className=" underblackpart w-8 h-8 rounded-full bg-zinc-100"></div>
</div>

</div>
       </div>

       <div className=" whitepart  w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
       <div className="blackpart w-2/3 h-2/3 bg-zinc-900 rounded-full relative ">

       <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line w-full  h-10  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]   ">
<div className=" underblackpart w-8 h-8 rounded-full bg-zinc-100"></div>
</div>
       </div>
       </div>

       </div>
      </div>
    </div>
  )
} 

export default Playfull
