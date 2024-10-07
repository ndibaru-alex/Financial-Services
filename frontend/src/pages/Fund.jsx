import React from 'react'
import { desk2,desk6 } from '../assets'
import { styles } from '../style'
import Feedback from '../components/Feedbacks'

const Fund = () => {
  return (
    <>
    <div className='flex justify-center items-center md:flex-row flex-col md:flex-[0.75]  rounded-2xl p-10'>  
        <div className='md:max-w-[550px] max-w-[300px] p-5'>
          <img src={desk2} alt="lex" className='md:h-96 md:w-auto md:block hidden rounded' />
        </div>     
        
        <div className='md:max-w-[500px] max-w-[600px] mx-5'>
          <div className='flex flex-col shadow-inner gap-3'>
           
            <h4  className={styles.sectionSubText}>Fund Administration</h4>
             <div className='mt-2 text-[17px] max-w-3xl leading-[30px]'>
               Good pensions management is a balance of achieving operational efficiency whilst meeting exacting standards of governance and evolving legislation for trustees.
             </div>
           
          </div>
        </div>
       
      </div>
       <div className='flex justify-center items-center md:flex-row flex-col md:flex-[0.75]  rounded-2xl p-10'>  
            
        
        <div className='md:max-w-[500px] max-w-[600px] mx-5'>
          <div className='flex flex-col shadow-inner gap-3'>
           
            <h4  className={styles.sectionSubText}>We help you navigate governing standards</h4>
             <div className='mt-2 text-[17px] max-w-3xl leading-[30px]'>
              <p>
                We can help you navigate these changes more smoothly. Whatever you pension scheme – Defined Benefit, Defined Contribution, or Hybrid – we provide efficient administration and make sure you meet your legal obligations with complete confidence.

            Outsourcing benefits administration to CPF allows you the room to focus on your organizational core business, while we take care of your employee’s welfare.
              </p>
             </div>
           
          </div>
        </div>
         <div className='md:max-w-[550px] max-w-[300px] p-5'>
          <img src={desk6} alt="lex" className='md:h-96 md:w-auto md:block hidden rounded' />
        </div>      
       
      </div>
       <Feedback/>
      </>
  )
}

export default Fund
