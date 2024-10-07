import React ,{useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import { styles} from '../style'
import {navLinks} from '../constants'
import { FsLogo } from '../assets'


const footer = () => {
    const [active, setactive] = useState('') 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
  return (
     <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
     <Link to={'/'} className='flex items-center gap-2' onClick={()=>{setactive(''); scrollTo({ top: 0, behavior: 
      'smooth' 
    })}}>
     <img src={FsLogo} alt='logo' className='w-48 h-28 object-contain'/>

      <p>&copy; <span >{year}</span>. All rights reserved.</p>
      
     </Link>
     <ul className='list-none hidden md:flex flex-col gap-3 '>
        <p className='text-[16px]'>Links</p>
      {
        navLinks.map( (link)=>(
        <li onClick={()=>setactive(link.title)} key={link.id} className={`${ active === link.title ? "text-[rgb(228,88,88)] " : "text-white"} hover:text-[rgb(228,88,88)] text-[14px] font-medium cursor-pointer `} >
          <Link to={`${link.to}`} >{link.title}</Link>
        </li>
        ))
      }
     </ul>

      
     </div>
  )
}

export default footer
