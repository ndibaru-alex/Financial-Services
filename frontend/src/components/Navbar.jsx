import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { styles} from '../style'
import {navLinks} from '../constants'
import {FsLogo, finance} from '../assets'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [active, setactive] = useState('') 
  const [toogle, setToogle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
     <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
     <Link to={'/'} className='flex items-center gap-2' onClick={()=>{setactive(''); scrollTo({ top: 0, behavior: 
      'smooth' 
    })}}>
     <img src={FsLogo} alt='logo' className='w-48 h-28 object-contain'/>
      
     </Link>
     <ul className='list-none hidden md:flex flex-row gap-10 '>
      {
        navLinks.map( (link)=>(
        <li onClick={()=>setactive(link.title)} key={link.id} className={`${ active === link.title ? "text-[rgb(228,88,88)] " : "text-white"} hover:text-[rgb(228,88,88)] text-[18px] font-medium cursor-pointer `} >
          <Link to={`${link.to}`} >{link.title}</Link>
        </li>
        ))
      }
     </ul>

       <div className='md:hidden flex flex-1 justify-end items-center  '>
        <button className='w-[80px] h-[40px] cursor-pointer  ' onClick={ ()=> setToogle(!toogle)}>
          {
            toogle ? <IoCloseSharp size={50}/>
            : 
            <AiOutlineMenuUnfold size={50}/>
        }
          
        </button>
        <div className={`${!toogle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 mt-4 my-2 min-w-[140px] z-10 rounded-xl`}>
         <ul className='list-none justify-end items-start flex flex-col gap-4 '>
      {
        navLinks.map( (link)=>(
        <li onClick={()=>setactive(link.title)} key={link.id} className={`${ active === link.title ? "text-white " : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer `} >
          <Link to={`${link.to}`} >{link.title}</Link>
        </li>
        ))
      }
     </ul>
        </div>
      </div>   
     </div>
    </nav>
  )
}

export default Navbar