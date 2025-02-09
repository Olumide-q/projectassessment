import React from 'react'
import Review from '../component/Review'
import Hero from '../component/Hero'
import CoinSec from '../component/coinSec'
import Why from '../component/Why'
import Steps from '../component/Steps'
import CallToAction from '../component/CallToAction'
import Footer from '../layouts/Footer'


const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <CoinSec/>
        <Why/>
        <Steps/>
        <CallToAction/>
      <Review/>
      <Footer />
      
     
    </div>
  )
}

export default Home
