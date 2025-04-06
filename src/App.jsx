import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Playfull from './Components/Playfull'
import FeatureProject from './Components/FeatureProject'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Footerbottom from './Components/Footerbottom'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div   className='w-full  text-white bg-zinc-900 min-h-screen' >

      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Playfull/>
      <FeatureProject/>
      <Cards/>
      <Footer/>
      <Footerbottom/>

    </div>
  )
}

export default App
