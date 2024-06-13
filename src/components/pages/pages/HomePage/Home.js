import React from 'react'
import HeroSection from "../../HeroSection"
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven} from './Data'
import Pricing from '../../Pricing'

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
      <Pricing />
      <HeroSection {...homeObjSix} />
      <HeroSection {...homeObjSeven} />
    </>
  )
}

export default Home
