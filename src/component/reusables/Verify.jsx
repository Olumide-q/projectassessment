import React from 'react'
import gift from '../../assets/image/Rectangle 26.jpg'

const Verify = () => {
  return (
    <div className='w-full  bg-[#fff] mx-auto flex p-29  justify-center  text-center px-8'>
      <div className=' bg-[#FBF8FD] my-12 p-8 space-y-4 shadow-md flex flex-col gap-2  w-[350px] md:w-[601px]'>
        <h1 className='text-3xl'>You're Almost In!</h1>
        <h1 className='font-semibold text-4xl'>Welcome Iretiayo</h1>
        <div className=' mx-auto'>
        <img className='' src={gift} alt="" />
        </div>
       <div className='w-8/12 mx-auto text-sm pb-12'>
       <p>An activation link has been sent to Ireti4tech@gmail.com Please click on the link to verify your email and activate your TradExpress account.</p>
       </div>
        <div className='mx-auto bg-[#7C20BF] rounded-md '>
        <button className='lg:px-21 py-3 text-white text-sm'>Sign Up</button>
        </div>
        <div className='flex flex-col gap-2 lg:flex-row  mx-auto justify-between text-sm'>
            <p>Already have an account ?</p>
            <p className='text-purple-500'>Click here</p>
        </div>
      </div>
    </div>
  )
}

export default Verify
