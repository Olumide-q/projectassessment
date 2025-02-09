import React from 'react'
import { 
  FaQuoteLeft,
} from "react-icons/fa6";

const ReviewCard = ({myReveiw}) => {
  return (
    <div className='relative flex flex-col gap-12'>
      <div className=' bg-[#7C20BF] h-48  text-white px-8 text-center text-sm rounded-lg flex flex-col items-center justify-center'>
      <div className='text-[#7c20be] absolute bottom-[-14px] left-[10%] transform translate-y-[-100%] w-0 h-[64px] border-l-[18px] border-r-[18px] border-t-[32px] border-l-transparent border-r-transparent'>
      </div>
      <FaQuoteLeft  className='text-2xl text-white absolute top-4 left-4'/>
      <p>{myReveiw.desc}</p>
      </div>
     <div className='flex items-center gap-4 ml-6'>
     <img className='h-[63px] w-[63px]' src={myReveiw?.image} alt="" />
   <div className='flex flex-col'>
   <p>{myReveiw?.name}</p>
   <p>{myReveiw?.location}</p>
   </div>
     </div>
    </div>
  )
  
}

export default ReviewCard
