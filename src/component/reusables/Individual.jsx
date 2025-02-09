import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Individual = () => {
    const [username, setUsername] = useState("")
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
      console.log(username, email, fullname, phonenumber);
      e.preventDefault();
      if(!username.trim() || !email.trim() || !fullname.trim() || !phonenumber.trim()){
        setError('All fields are required ')
      }else{
        setError('');
        navigate('/verify')
      }
      setUsername("")
      setEmail("")
      fullname("")
      phonenumber("")
    }
  return (
    <div className="flex flex-col gap-5">
        <form onSubmit={handleSubmit}  >
        <p>{error}</p>
        <div>
            <input type="user" placeholder='Username' className='w-full rounded-md mt-6  bg-white px-3 py-2'  value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div>
            <input type="name" placeholder='Full Name'  className='w-full rounded-md mt-6 bg-white px-3 py-2' value={fullname} onChange={(e)=> setFullname(e.target.value)}/>
        </div>
        <div>
            <input type="email" placeholder='Email'  className='w-full rounded-md mt-6 bg-white px-3 py-2' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div>
            <input type="phonenumber" placeholder='Phone Number'  className='w-full rounded-md mt-6 bg-white px-3 py-2'value={phonenumber} onChange={(e)=> setPhonenumber(e.target.value)} />
        </div>
        <div>
            <input type="text" placeholder='Referral Code (optional)'  className='w-full rounded-md mt-6 bg-white px-3 py-2' />
        </div>
        <p className=' mt-7 mb-4'>By clicking the Sign Up button below, you agree to TradExpress <span className='text-purple-500'>terms and service</span></p>
      <div>
        <button type='submit' className=' w-full bg-[#7C20BF] text-white  px-12 py-2 rounded-md '>Sign Up</button>
      </div>
      </form>
      
    </div>
  )
}

export default Individual
