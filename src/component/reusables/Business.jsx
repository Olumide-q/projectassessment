import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const Business = () => {
    const{
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = async (data)=>{
        console.log(data)
        navigate('/verify')
    }
  return (
    <div className="flex flex-col gap-5">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input type="user" placeholder='Username' className='w-full rounded-md mt-6  bg-white px-3 py-2'
            {...register('username',{required: 'username is required' })}
            />
            {errors.username && <p className='text-[#d73c3c]'>{errors.username.message}</p>}
        </div>
        <div>
            <input type="name" placeholder='Business Name'  className='w-full rounded-md mt-6 bg-white px-3 py-2'
            {...register('name',{required:'Business Name is required',
                pattern:{
                      value: /^[a-zA-Z]+$/,
                      message: 'Please enter a valid Business Name'
                }
            })}/>
            {errors.name && <p className='text-[#d73c3c]'>{errors.name.message}</p>}
        </div>
        <div>
            <input type="email" placeholder='Email'  className='w-full rounded-md mt-6 bg-white px-3 py-2'
            {...register('email',{required: 'username is required',
                pattern:{
                     value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: 'Please enter a valid email address'
                }
             })} />
             {errors.email && <p className='text-[#d73c3c]'>{errors.email.message}</p>}
        </div>
        <div>
            <input type="phonenumber" placeholder='Phone Number'  className='w-full rounded-md mt-6 bg-white px-3 py-2'
             {...register('phonenumber',{required: 'Phone number is required' })}/>
               {errors.phonenumber && <p className='text-[#d73c3c]'>{errors.phonenumber.message}</p>}
        </div>
        <div>
            <input type="text" placeholder='Referral Code (optional)'  className='w-full rounded-md mt-6 bg-white px-3 py-2' />
        </div>
        <p className=' mt-7 mb-4'>By clicking the Sign Up button below, you agree to TradExpress <span className='text-purple-500'>terms and service</span></p>
      <div>
        <button type='submit' className=' w-full bg-[#7C20BF] text-white   px-12 py-2 rounded-md '>Sign Up</button>
      </div>
      </form>
     
    </div>
   
  )
}

export default Business
