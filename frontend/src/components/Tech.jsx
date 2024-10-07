import React from 'react'
import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import { technologies } from "../constants"



const Tech = () => {
  return (
    <>
    <h3 className='flex justify-center items-center mb-5'>Technologies</h3>
    <div className='flex flex-row flex-wrap justify-center gap-5 mt-0'>  

      {technologies.map((tech,index)=>{
        return (
          <div className='w-24 h-24 cursor-pointer ' key={tech.name} >
            <BallCanvas icon={tech.icon}/>
            <p className='text-slate-400 text-[14px]'>{tech.name}</p>
          </div>
        )
      })}      
    </div>
    
    
    </>
  )
}

export default SectionWrapper(Tech, '') 