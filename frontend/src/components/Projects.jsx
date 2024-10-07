import React from 'react'
import { Tilt } from 'react-tilt'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { Link } from 'react-router-dom'

const ProjectCard = ({ index,name,description,image,source_code_link}) =>{

    return(
     <motion.div variants={fadeIn('up',"spring",index*0.5,0.75)}  >
       <Tilt
       options={{
        max : 45,
        scale : 1,
        speed : 450
       }}
       className="bg-tertiary  p-5 rounded-2xl sm:w-[360px] w-full mx-6 cursor-pointer"
       >
          <Link to={source_code_link}>
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>         
        </div>      
        <div className='mt-5'>
       
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div> 
        </Link>
            
       </Tilt>
     </motion.div>   
    )

}


const Projects = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>Services</p>
    <h2 className={`${styles.sectionHeadText}`}> Our Services</h2>
   </motion.div>
   <div className='w-full flex'>
    <motion.p variants={fadeIn('','',0.1,1)} className='mt-3 text-secondary text-[17px] max-w-5xl'>
    We provide a complete range of services to turn your great ideas into profitable business solutions
    </motion.p>
   </div>

   <div className='mt-20 flex flex-wrap gap-7'>
    {
        projects.map((project,index)=>{
            return(
                <ProjectCard key={index + 'project'} {...project} index={index}/>
            )
        })
    }
   </div>
    <motion.div variants={textVariant} className='flex  justify-center items-center py-6'>
       <Link to={'/services'}><button className='flex bg-[#151030] gap-3 items-center p-3 rounded-[20px] hover:bg-[#11193a] hover:text-red-500'><span></span>More on Services</button></Link>     
       </motion.div>

    </>
  )
}

export default SectionWrapper( Projects, "")
