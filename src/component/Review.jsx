import React from 'react'
import { review } from '../Db'
import ReviewCard from './reusables/ReviewCard'

const Review = () => {
  return (
    <div className='w-11/12 justify-between flex flex-col mx-auto my-15 gap-12'>
      <h1 className='font-semibold text-center text-3xl'>Customer’s Review</h1>
     <div className='flex flex-col lg:flex-row gap-7'>
     {review.map((rev)=>(
            <div key={rev?.id}>
                <ReviewCard myReveiw={rev} />
            </div>
        )
      )}
     </div>
    </div>
  )
}

export default Review
