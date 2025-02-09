import React from 'react'
import { why } from '../Db'
import WhyCard from './reusables/WhyCard'

const Why = () => {
  return (
    <div className='bg-[#EDE9EF]  px-10 py-27 flex flex-col gap-10 h-full'>
      <div className='lg:w-11/12 mx-auto text-center flex flex-col gap-6'>
        <h1 className='text-2xl font-semibold'>Why do people get involved with Cryptocurrencies?</h1>
       <div>
       <button className='border border-purple-500 text-purple-500 px-6 py-2 rounded-md'>See Less</button>
       </div>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-28 gap-10 lg:h-95 justify-center'>
      {why.map((graphic)=>{
        return(
          <div className='' key={graphic?.id}>
            <WhyCard myGraphic={graphic}/>
          </div>
        )
      })}
      </div>
      
      
    </div>
  )
}

export default Why
