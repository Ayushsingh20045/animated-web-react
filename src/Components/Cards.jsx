import React from 'react'

const Cards = () => {
  return (
    <div className='main w-full h-screen bg-zinc-900 flex px-20 items-center gap-5'>
      <div className="cardcontainer w-1/2 h-[55vh]">

      <div className="card1 relative w-full h-full bg-[#004D43] rounded-2xl uppercase flex justify-center items-center ">
        <img className='w-44 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-4 py-2 rounded-[30px] border-[2px] border-[#CDEA68] text-[#CDEA68] font-semibold left-10 bottom-10 text-lg'>&copy; 2019-2022</button>
      </div> 
      </div>

      <div className="cardcontainer w-1/2 h-[55vh] flex gap-5 ">

      <div className="card2 relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl">

      <img className='w-44 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
      <button className='absolute px-4 py-2 rounded-[30px] border-[2px] border-zinc-300 text-zinc-300 font-semibold left-10 bottom-10 text-lg uppercase whitespace-nowrap'>rating 5.0 on clutch</button>
      </div>

      <div className="card3 relative w-1/2 h-full bg-[#212121] flex items-center justify-center rounded-xl">

      <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className='absolute px-4 py-2 rounded-[30px] border-[2px] border-zinc-300 text-zinc-300 font-semibold left-10 bottom-10 text-lg uppercase whitespace-nowrap'>business bootcamp allumni</button>

      </div>

      </div>
    </div>
  )
}

export default Cards
