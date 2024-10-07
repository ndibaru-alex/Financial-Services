import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../style'
import {staggerContainer} from '../utils/motion'

const sectionWrapper = (Component,idName) => 
  function HOC(){
     return(
        <motion.section
        variants={staggerContainer()}
        initial= "hidden"
        whileInView="show"
        viewport={{once : true , amount : 0.05}}
        className={`${styles.padding} max-w-full mx-auto relative z-0`}
        > 
        <span className='hash-span' id={idName}>
            &nbsp;
        </span>          
            <Component/>
        </motion.section>
     )
  }
  


export default sectionWrapper
