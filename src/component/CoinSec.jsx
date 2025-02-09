import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import arry from '../assets/icons/Group 99.svg'
import arrow from '../assets/icons/Group 101.svg'

const CoinSec = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState("")

  const getCoin = async (data) =>{
    try {
      setLoading(true)
      const response = await axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=8',data);
      // console.log(response.data.data);
      
      setCoins(response.data.data)
      if(response.status === 201){
        setApiError("")
      }
    } catch (error) {
           setApiError(error.response.data.message)
           }finally { 
            setLoading(false)    
       }
       
  }
  useEffect(() => {
    getCoin()
   }, [])
  return (
  <marquee className="bg-[#EDE9EF] " direction="">
      <div className='w-[90%] lg:w-full flex  justify-between px-10 bg-[#EDE9EF] '>
    {coins.map((coin)=>(
      <div className='py-8 ' key={coin?.id}>
      <div className='flex flex-col gap-8 border-r px-8' > 
          <div className='flex gap-18'>
            <h1>{coin?.symbol}/NGN</h1>
            <div className=' flex'><p>{coin?.percent_change_24h}/%</p>
            <img src={arry} alt="" /></div>
          </div>
          <div>
            <p>{coin?.price_usd}NGN</p>
          </div>
        </div>
      </div>
    ))}
    {/* <div className='border-r text-black'></div>
    <div className='flex flex-col gap-8 '>
        <div className='flex gap-18'>
          <p>USDT/NGN</p>
          <div className=' flex'><p>+10.20%</p>
          <img src={arrow} alt="" /></div>
        </div>
        <div>
          <p>453.44 NGN</p>
        </div>
      </div>
      <div className='border-r-1 text-black'></div>
      <div className='flex flex-col gap-8 '>
        <div className='flex gap-18'>
          <p>ETH/NGN</p>
          <div className=' flex'><p>+253%</p>
          <img src={arrow} alt="" /></div>
        </div>
        <div>
          <p>818,490.32 NGN</p>
        </div>
      </div>
      <div className='border-r-1 text-black'></div>
      <div className='flex flex-col gap-8 '>
        <div className='flex gap-18'>
          <p>LTC/NGN</p>
          <div className=' flex'><p>81,002.32</p>
          <img src={arry} alt="" /></div>
        </div>
        <div>
          <p>818,490.32 NGN</p>
        </div>
      </div>
      <div className='border-r-1 text-black'></div>
      <div className='flex flex-col gap-8'>
        <p>XRP/N</p>
        <p>226.56</p>
      </div>
      {/* <div className='border-r-1 text-black'></div> */}
    </div> 
  </marquee>
  )
}

export default CoinSec


