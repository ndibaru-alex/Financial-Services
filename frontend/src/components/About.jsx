import React from 'react'
import {Tilt} from 'react-tilt'
import {styles } from '../style'
import desk2 from '../assets/desk2.webp'
import {about, services} from '../constants'
import {motion} from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'
import { FaDownload } from "react-icons/fa";
import { SectionWrapper } from '../hoc'
import { Link } from 'react-router-dom'




const About = () => { 
  return (
    <section  className='p-1 '  >
      <motion.div variants={textVariant} >
       <p className={` text-center pt-4 ${styles.sectionHeadText}`}>About Us</p>       
       </motion.div>
      <div className='flex justify-center items-center md:flex-row flex-col md:flex-[0.75]  rounded-2xl p-10'>  
        <div className='md:max-w-[550px] max-w-[300px] p-5'>
          <img src={desk2} alt="lex" className='md:h-96 md:w-auto md:block hidden rounded' />
        </div>     
        
        <div className='md:max-w-[500px] max-w-[600px] mx-5'>
          <div className='flex flex-col shadow-inner gap-3'>
            {
              about.map( (exp,index) =>{
                return(
                  <motion.p 
                  variants={fadeIn('','',0.1,1)}
                  key={index}
                  
                 
                  >
                    <h4  className={styles.sectionSubText}>{exp.title}</h4>
                    <div className='mt-2 text-[17px] max-w-3xl leading-[30px]'>
                      {exp.points}
                    </div>
                  </motion.p>
                  
                  
                )
              })
            }
          </div>
        </div>
       
      </div>
      {/* <motion.div variants={textVariant} className='flex  justify-center items-center py-6'>

       <Link to={'/'}><button className='flex bg-[#151030] gap-3 items-center p-3 rounded-[20px] hover:bg-[#11193a] hover:text-red-500'><span></span>More About Us</button></Link>  

       </motion.div> */}
       
    </section>
  )
}

export default SectionWrapper(About, "") 