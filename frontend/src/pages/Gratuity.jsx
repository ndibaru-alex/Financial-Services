import React from 'react'
import { desk7,desk6 } from '../assets'
import { styles } from '../style'
import Feedback from '../components/Feedbacks'


const Gratuity = () => {
  return (
     <>
    <div className='flex justify-center items-center md:flex-row flex-col md:flex-[0.75]  rounded-2xl p-10'>  
        <div className='md:max-w-[550px] max-w-[300px] p-5'>
          <img src={desk7} alt="lex" className='md:h-96 md:w-auto md:block hidden rounded' />
        </div>     
        
        <div className='md:max-w-[500px] max-w-[600px] mx-5'>
          <div className='flex flex-col shadow-inner gap-3'>
           
            <h4  className={styles.sectionSubText}>Gratuity Management services</h4>
             <div className='mt-2 text-[17px] max-w-3xl leading-[30px]'>
               Our Gratuity Management services are tailored with the modern employer in mind. 
               We appreciate that gratuity must be paid to employees at the end of their contract and is often a major financial obligation – one that demands advance planning and budgeting.
             </div>
           
          </div>
        </div>
       
      </div>
       <div className='flex justify-center items-center md:flex-row flex-col md:flex-[0.75]  rounded-2xl p-10'>  
            
        
        <div className='md:max-w-[500px] max-w-[600px] mx-5'>
          <div className='flex flex-col shadow-inner gap-3'>
           
            <h4  className={styles.sectionSubText}>We handle remittances</h4>
             <div className='mt-2 text-[17px] max-w-3xl leading-[30px]'>
              <p>
               To reduce the burden, we sign an agreement with the employer, to which they will be remitting employees’ 
               accrued gratuity on a monthly basis. CPF manages the gratuity for your employees by investing the same and
                ensures adequate financial resources are available to pay them when their term ends. Employees stand to benefit
                 twofold; from the interest earned over their contract period, and from the tax benefit realizable by having their
                  funds invested through a registered Pension Funds Administrator.
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

export default Gratuity
