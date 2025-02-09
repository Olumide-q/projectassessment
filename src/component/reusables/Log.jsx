import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Log = () => {
     const{
            register,
            handleSubmit,
            reset,
            formState: {errors}
        } = useForm()
        const navigate = useNavigate()
        const onSubmit = async(data) => {
            console.log(data)
            navigate('/')
        }
    
  return (
    <div className="w-full  bg-[#fff] mx-auto flex p-29  justify-center  text-center px-8  ">
      <div className='bg-[#E4E4E4] my-12 p-8 space-y-4 flex flex-col gap-2  w-[350px] md:w-[601px] m'>
      <h1 className='text-2xl '>Welcome Back</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10'>
        <div>
            <input type="user" placeholder='Username' className='lg:w-8/12 px-4 rounded-md   bg-white py-3'
             {...register('username',{required: 'username is required' })}
            />
             {errors.username && <p className='text-[#d73c3c] text-end'>{errors.username.message}</p>}
        </div>
        <div>
            <input type="password" placeholder='Password'  className='lg:w-8/12 py-3 px-4 rounded-md  bg-white'
             {...register("password",{
                required:"Password is required",
                minLength: {value: 8, message: "Password must be at least 8 characters long" },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                }
            })}
            />
            {errors.password && <p className='text-[#d73c3c] text-end'>{errors.password.message}</p>}
        </div>
        <div className='lg:w-8/12 mx-auto flex flex-col gap-4 lg:flex-row  lg:justify-between lg:text-center'>
                <label className='flex flex-row gap-2 text-center text-sm ' htmlFor="consent">
                <input  type="checkbox" value = "consent" />
                Remember Password </label>
                <p className='text-purple-500 text-sm'>Forgot Password?</p>
            </div>
            <div>
            <button type='submit' className=' lg:px-40 px-20 bg-[#7C20BF] text-white  py-3 rounded-md '>Log In</button>
          </div>
          <div className=' mx-auto flex gap-4'>
            <p>New User ?</p>
            <Link to='/signup' className='text-purple-500 '>Click here</Link>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Log
