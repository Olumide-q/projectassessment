import React from 'react'
import icon from '../assets/icons/Group 127 (1).png'
import logo from '../assets/icons/ion_logo-apple.svg'
import google from '../assets/icons/logos_google-play-icon.svg'

const Hero = () => {
  return (
    <div className=' bg-[#7C20BF] lg:pt-29 '>
      <div className="relative flex w-full h-[665px] container mx-auto">
      <div className='lg:w-[40%] py-27 pl-8 flex flex-col gap-5'>
        <h1 className='font-semibold text-5xl text-white'>Buy, sell and manage your Crypto on TradExpress.</h1>
        <p className='text-sm text-white'>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN</p>
       <div className='flex flex-col gap-6'>
       <div>
       <button className='bg-white text-purple-500 lg:px-29  px-29 rounded-md py-2'>Get Started</button>
       </div>
        <div className='flex items-center gap-4 text-white text-sm '>
        <div className=' flex flex-row gap-2  '>
        <div className='border rounded-sm flex pr-4 items-center '>
       <span> <img src={logo} alt="" /></span>
       <p className='flex flex-col'><span className='text-sm text-gray-500'>Download on the</span>  App Store</p>
        </div>
      <div className='flex border pr-4 rounded-sm gap-2'>
      <span><img src={google} alt="" /> </span>
      <p className='flex flex-col '><span className='text-sm text-gray-500'>Get on </span>Google play</p>
      </div>
        </div>
          </div>
       </div>
  
      </div>
      <div className='hidden lg:block absolute right-10 h-full'>
      <img src={icon} alt="" className='h-full'/>
      </div>
      </div>
    </div>
    
  )
}

export default Hero

