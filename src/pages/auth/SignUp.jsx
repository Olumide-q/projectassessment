import React, { useState } from 'react'
import Business from '../../component/reusables/Business'
import Individual from '../../component/reusables/Individual'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'



const SignUp = () => {
  const [current, setCurrent] = useState("individual")
  // const navigate = useNavigate()
    
  const handleSetCurrent = (tab) => {
    setCurrent(tab)
  }
  return (
    <div className=' w-full  bg-[#fff] mx-auto p-29 flex  justify-center  text-center px-8'>
      
        <div className='bg-[#E4E4E4] my-12 p-8 space-y-4 flex flex-col gap-2  w-[350px] md:w-[601px]'>
        <h1 className='text-2xl'>Welcome</h1>
        <div className=' bg-white flex items-center shadow-md rounded-3xl w-full mx-auto'>
          <button
          onClick={() => handleSetCurrent("individual")}
           className={` ${ current === "individual" ? "bg-[#E4E4E4]" : "" } px-10 lg:px-12 py-2  rounded-3xl w-1/2 ease transition-all duration-200`}>Individual</button>
         
          <button onClick={() => handleSetCurrent("business")} className={`${
            current === "business" ? "bg-[#E4E4E4]" : "" }  px-10 lg:px-29 py-2 rounded-3xl  w-1/2 ease transition-all duration-200`}>Business</button>
        </div>
       {current === 'business' ?  <Business/> : null}
       {current === 'individual' ?   <Individual/> : null}
          
      <div className='flex mx-auto gap-1'>
        <p>Already have an account ?</p>
        <Link to='/login' className='text-purple-500' >Click here</Link>
      </div>
        </div>
    </div>
  
  )
}

export default SignUp

