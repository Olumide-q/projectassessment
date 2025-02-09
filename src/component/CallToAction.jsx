import React from 'react'
import logo from '../assets/icons/ion_logo-apple.svg'
import google from '../assets/icons/logos_google-play-icon.svg'

const CallToAction = () => {
  return (
    <div className='bg-[#EDE9EF] w-full mx-auto p-12 lg:py-12  '>
      <div className=' flex flex-col lg:w-[35%] mx-auto items-center gap-8 '>
       <div className='text-center flex flex-col gap-2'>
       <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
       <h1 className='font-bold text-2xl '>Create your account for free and start trading today!</h1>
       </div>
       <div className='flex flex-col gap-6'>
        <button className='bg-[#7C20BE] text-purple-500 px-22 rounded py-2'>Get Started</button>
        <div className='flex flex-col lg:flex-row items-center gap-2'>
        <div className='border rounded-sm flex px-1 lg:px-2 lg:py-2 items-center '>
               <span> <img src={logo} alt="" /></span>
               <p className='flex flex-col'><span className='text-sm text-gray-500'>Download on the</span>  App Store</p>
                </div>
                <div className='flex  border px-3 lg:px-2 lg:py-2 rounded-sm gap-2'>
                      <span><img src={google} alt="" /> </span>
                      <p className='flex flex-col '><span className='text-sm text-gray-500'>Get on </span>Google play</p>
                      </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default CallToAction
