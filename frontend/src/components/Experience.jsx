import React from 'react'
import {styles} from '../style'
import {SectionWrapper} from '../hoc'
import { textVariant } from '../utils/motion'
import {motion} from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import {experiences} from '../constants'
import "react-vertical-timeline-component/style.min.css";


const ExperienceCard = ({Exp}) =>{
  return(
   <VerticalTimelineElement
   contentStyle={{background : "#433c59",color : "#fff"}}
   contentArrowStyle={{ borderRight: "7px solid  #ccd0dc" }}
   date={Exp.date}
   iconStyle={{ background: Exp.iconBg }}
   
   >
    <div>
      <h3 className='text-white text-[18px] font-semibold'>{Exp.title}</h3>
      <p className='text-secondary text-[16px] font-medium' style={{margin: 0}}>{Exp.company_name}</p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>{
    Exp.points.map( (point,index)=>{
      return(
        <li key={index +'point'} className='text-white text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      )
    })
    }</ul>   

   </VerticalTimelineElement>
  )

}

const Experience = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-center` }>Our Values</p>
   
   </motion.div>
   
   <div className='mt-20 flex flex-col mb-[-70px]'>
    <VerticalTimeline>
      {
       experiences.map((experience,index)=>{
        return(
          <ExperienceCard key={index} Exp={experience}/>
        )
       })
      }
    </VerticalTimeline>
   </div>

   </>
  )
}

export default SectionWrapper(Experience, 'experiences') 