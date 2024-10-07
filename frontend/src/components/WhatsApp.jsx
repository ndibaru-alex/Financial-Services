import React from 'react'

import {Whatsapp,linked,Xlogo} from '../assets'

const WhatsApp = () => {
    const phoneNumber = +254705875302
    const message = '"Hello! I am interested in your web development services. Can we discuss the project further?';
    const encodedMessage = encodeURIComponent(message);
    const WhatsAppUrl = `#`

    const linkedUrl = '#'

  return (
    <div  className='flex flex-col gap-5=4  pr-3 z-1 justify-center items-center'>  
    <a href={WhatsAppUrl}>
     <img src={Whatsapp} className='h-12 w-12 rounded-full'/>
     </a>
     
     <a href={linkedUrl}  target="_blank"
      rel="noopener noreferrer">
     <img src={linked} className='h-16 w-16 rounded-full'/>    
    </a>
    </div>
  )
}

export default WhatsApp

