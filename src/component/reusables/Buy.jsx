import React from 'react'
import arrow from '../../assets/icons/gridicons_dropdown.svg'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Buy = () => {
    const{
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()
    const navigate = useNavigate()
    const onSubmit =  (data) => {
        console.log(data)
      navigate('/')
    }
  return (
    <div className=''>
       <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[100%]  gap-16'>
         <div className='flex'>
         <label className='flex flex-col font-semibold gap-2 w-full' htmlFor="coin">Coin to Buy
            {/* <input className='bg-white px-2 py-3 rounded-md relative'  type="text" placeholder='Bitcoin (BTC)' />
            <img className="w-5 h-5 absolute translate-y-10 translate-x-64" src={arrow} alt="" /> */}
            <select name="" id="" className='bg-white px-2 py-3 font-light rounded-md '>
                <option value="">Bitcoin (BTC)</option>
                <option value="">Etherum (ETH)</option>
            </select>
           </label>
         </div>
           <label className='flex flex-col gap-4 font-semibold w-full'  htmlFor="currency">Currency
            {/* <input className='bg-white px-2 py-3 font-light rounded-md ' type="text" placeholder='Naira (NGN)' /> */}
            <select name="" id="" className='bg-white px-2 py-3 font-light rounded-md '>
                <option value="">Naira (NGN)</option>
                <option value="">Euro($)</option>
            </select>
           </label>
           <div className='flex flex-col'>
  <label htmlFor="" className='font-semibold py-2'>Amount</label>
<div className="bg-white w-full h-11 flex items-center">
  <span className='border-r border-black h-full flex items-center px-3'>NGN</span>
<input type="number" placeholder='' className='w-full h-full px-2 outline-none' />
</div>
</div>
           
            <button className=' w-full bg-[#7C20BF] text-white  px-12 py-3 rounded-md '>Continue</button>
        </form>
    </div>
  )
}

export default Buy
