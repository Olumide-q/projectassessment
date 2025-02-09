import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import vector from '../assets/icons/Vector (3).svg'

const Footer = () => {
  return (
    <div className='flex flex-col gap-2'>
    <div className='w-full bg-[#EDE9EF]'>
   <div className='w-11/12 mx-auto  px-6 py-4 lg:px-18 lg:py-10 flex flex-col gap-8 lg:flex-row justify-between '>
   <div className=''> 
      <ul>
       <li className='font-semibold'>Products</li>
       <li className='text-sm'>Bitcoin</li>
       <li className='text-sm'>Alt</li>
       <li className='text-sm'>Fiat</li>
       <li className='text-sm'>Refill</li>
       <li className='text-sm'>P2P</li>
      </ul>
      </div>
      <div>
        <ul>
         <li className='font-semibold'>Learn</li>
         <li className='text-sm'>Blog</li>
         <li className='text-sm'>Help Center</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
       <p className='font-semibold'>Contact</p>
       <p className='text-sm'>hello@tradexpress.com</p>
       <p className='text-sm'>support@tradexpress.com</p>
       <div className='lg:flex lg:space-x-4 flex flex-row gap-2'>
       <FaTwitter />
       <FaTelegramPlane />
       <IoLogoWhatsapp />
       <FaFacebookF />
       </div>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold'>Company</p>
        <p className='text-sm'>About Us</p>
        <p className='text-sm'>Careers</p>
        <p className='text-sm'>Rates</p>
        <p className='text-sm'>Mobile</p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold'>Legal</p>
        <p className='text-sm'>Privacy Policy</p>
        <p className='text-sm'>Anti-Money Laundering</p>
        <p className='text-sm'>Terms & Conditions</p>
      </div>
   </div>
    </div>
    <div className='bg-white  mx-auto lg:py-4 gap-2 flex flex-row items-center text-sm'>
      <span className=''><img src={vector} alt="logo" className='w-6' /></span>
      <p>2021 Tradexpress Technologies. All Right Reserved</p>
    </div>
    </div>
  )
}

export default Footer
