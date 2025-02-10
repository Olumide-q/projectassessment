import React from 'react'
import icon from '../assets/Group 133.png'
import { NavLink } from 'react-router-dom'
import Instant from '../pages/instant'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import  {useState, useEffect, useRef} from 'react'

// import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef()
    const handleSetActive = (link) => {
        setActiveLink(link)
    }
    const closeMenubar = () => {
        setMenuOpen(false)
    }
    const openMenubar = () =>{
        if (window.innerWidth < 1024) { // Check if the screen width is less than 1024px (mobile devices)
            setMenuOpen(!menuOpen);
          }
    }
    const handleClickOutside = (event) => {
        if(navRef.current && !navRef.current.contains(event.target)){
            closeMenubar()
        }
    }
    //The mousedown event is used to detect when a mouse button is pressed down. 
    useEffect(()=> {
        if(menuOpen){
            document.addEventListener("mousedown", handleClickOutside)
        } else{
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return()=>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    },[menuOpen])
  return (
    <div className='bg-[#7C20BE] max-w-[1280px] md:w-full lg:w-full w-[90%]  mx-auto lg:px-20 py-4 flex justify-between items-center  shadow fixed z-50 right-0 left-0'>
     <NavLink to='/'>
        <img src={icon} alt='logo' className='' />
     </NavLink>
     
     <div className=''>
      
     <div className="lg:hidden text-2xl flex items-center cursor-pointer" 
            onClick={openMenubar}>
                {menuOpen ? <IoCloseOutline/> : <RxHamburgerMenu />}
            </div>   
            <div className={`lg:static absolute  top-16  ${
      menuOpen ? 'block opacity-100 w-[280px] right-0 p-8 bg-purple-700' : 'hidden opacity-0 top-[100%]'
    } lg:opacity-100 lg:flex lg:items-center lg:w-auto  font-bold  z-50 gap-5`}  ref={navRef}>
       <ul className='flex flex-col lg:flex-row text-white gap-8 items-center text-sm'>
            <li><NavLink  to='instant'className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'instant' ? "text-white-500" : "text-black-800 hover:text-gray-500"}`} onClick={()=> {handleSetActive('instant'); closeMenubar() }}>Instant Buy/Sell</NavLink></li>
            <li><NavLink to='log' className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'log' ? "text-purple-500" : "text-white-800 hover:text-gray-500"}`} onClick={()=> {handleSetActive('log'); closeMenubar() }} >Learn</NavLink></li>
            <NavLink to='login'className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'login' ? "text-purple-500" : "text-white-800 hover:text-gray-500"}`} onClick={()=> {handleSetActive('login'); closeMenubar() }}><button className='py-2 px-8 rounded-sm border border-white'>Login</button></NavLink>
            <NavLink to='signup'className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${activeLink === 'signup' ? "text-purple-500" : "text-white-800 hover:text-gray-500"}`} onClick={()=> {handleSetActive('signup'); closeMenubar() }}><button className='bg-white  text-purple-700 py-2 px-8 rounded-sm'>Get Started</button></NavLink>
        </ul>
    </div>
       
     </div>
 
    </div>
  )
}

export default NavBar
