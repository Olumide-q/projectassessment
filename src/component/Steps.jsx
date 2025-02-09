import React from 'react'
import img1 from '../assets/image/cuate copy.jpg'
import img2 from '../assets/image/rafiki copy.jpg'
import img3 from '../assets/image/cuate copy 2.jpg'
import icon1 from '../assets/icons/emojione-monotone_keycap-1.svg'
import icon2 from '../assets/icons/emojione-monotone_keycap-2.svg'
import icon3 from '../assets/icons/emojione-monotone_keycap-3.svg'

const Steps = () => {
  return (
    <div className='flex flex-col w-11/12 mx-auto mt-10'>
      <div className='text-center lg:w-[40%] mx-auto  items-center flex flex-col gap-4'>
        <h1 className='font-semibold text-2xl'>Buy and Sell your Cryptocurrency in 3 simple steps</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio molestie amet.</p>
      </div>
      <div className='mt-10 mb-10 flex flex-col  gap-10'>
      <div className='flex flex-col lg:flex-row items-center gap-16 justify-between'>
      <span className='flex gap-4'>
      <img src={icon1} alt="" />
       <div>
       <h1 className='font-bold text-2xl'>Create a free Account</h1>
       <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
       </div>
      </span>
       <div className=''>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row items-center  lg:gap-16 justify-between'>
        <div className=''>
          <img src={img2} alt="" />
        </div>
        <span className='flex gap-5'>
        <img src={icon2} alt="" />
        <div className=''>
        <h1 className='font-bold text-2xl'>Deposit</h1>
        <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
        </div>
        </span>
      </div>
      <div className='flex flex-col lg:flex-row items-center gap-16 justify-between'>
        <span className='flex gap-4'> 
        <img src={icon3} alt="" />
        <div>
        <h1 className='font-bold text-2xl'>Buy/ Sell Crypto</h1>
        <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
        </div>
        </span>
        <div className=''>
          <img src={img3} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Steps
