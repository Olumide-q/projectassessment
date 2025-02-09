import React, {useState} from 'react'
import Buy from '../component/reusables/Buy'
import Sell from '../component/reusables/Sell'

const Instant = () => {
   const [active, setActive] = useState("buy")
    
      
    const handleSetActive = (tab) => {
      setActive(tab)
    }
  return (
    <div className=' w-full lg:w-1/3 bg-[#fff] p-29 mx-auto flex flex-col  px-8'>
      <div className='bg-[#EEEDEE] my-12 p-8 space-y-4 flex flex-col gap-5  '>
        <h1 className='text-2xl text-center'>Buy/Sell Instantly</h1>
        <div className=' bg-white flex items-center  rounded-3xl w-full mx-auto'>
          <button
            onClick={() => handleSetActive("buy")}
            className={` ${ active === "buy" ? "bg-[#E4E4E4]" : "" } px-10 lg:px-12 py-2 rounded-3xl w-1/2 ease transition-all duration-200`}>Buy</button>
         
          <button
            onClick={() => handleSetActive("sell")}
            className={` ${ active === "sell" ? "bg-[#E4E4E4]" : "" } px-10 lg:px-12 py-2 rounded-3xl w-1/2 ease transition-all duration-200`}>Sell</button>
        </div>
        {active === 'buy' ?  <Buy/> : null}
        {active === 'sell' ?   <Sell/> : null}
       
     
        </div>
       
    </div>
  )
}

export default Instant
