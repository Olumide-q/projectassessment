import React from 'react'

const WhyCard = ({myGraphic}) => {
  return (
    <div className='bg-white lg:w-[330px] h-[338px]'>
      <div className='flex flex-col items-center px-8 py-14 '>
        <span><img src={myGraphic.image} alt="" /></span>
      <h3 className='font-semibold'>{myGraphic.title}</h3>
      <p className='text-sm text-center'>{myGraphic.desc}</p>
      </div>
    </div>
  )
}

export default WhyCard
