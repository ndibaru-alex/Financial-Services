import React, { useEffect, useState } from 'react'

import { desk5,desk2,desk3,desk4,desk6,desk7 } from '../assets'


import { FaAnglesRight } from "react-icons/fa6"
import { FaAnglesLeft } from "react-icons/fa6"



const BannerProduct = () => {

  const desktopImages = [
   desk6,desk2,desk3,desk7
  ]

  const mobile =[ desk7,desk2,desk3,desk4]

  const [currentImage,setCurrentImage] = useState(0)

  const nextImage = () =>{
    
    if(desktopImages.length - 1 > currentImage){

       setCurrentImage( preve => preve+1)
    } 

  }

  const preveImage = () =>{
    if(currentImage !== 0){
        setCurrentImage(preve => preve-1)
    }
    
  }

  useEffect( () =>{

    const interval = setInterval( ()=>{
      if(desktopImages.length - 1 > currentImage ){
        nextImage()
      }else{
        setCurrentImage(0)
      }

    },5000)

    return () => clearInterval(interval)

  },[currentImage])

  return (
    <div className='container mx-auto px-4  rounded '>
      <div className='h-[500px] w-full bg-slate-200'>

        <div className='flex w-full h-full  relative overflow-hidden'>

          <div className='absolute z-20 h-full w-full md:flex hidden items-center'>
            <div className='flex justify-between w-full '>
              
              <button onClick={preveImage} className='text-3xl rounded-full p-1'><FaAnglesLeft/></button>
               <button onClick={nextImage} className='text-3xl  rounded-full p-1'><FaAnglesRight/></button>
            </div>
           
          </div> 
          
               

        { 
          desktopImages.map( (images,index) =>{
            return(
              <div className='hidden md:flex w-full h-full min-w-full min-h-full' key={index}>

            <img src={images} alt=""  className='w-full h-full transition-all' style={{transform : `translateX(-${currentImage * 100}%)`}} />
            
             </div>

            )
          })
        }

        {/* mobile version */}

        
        { 
          mobile.map( (images,index) =>{
            return(
              <div className='w-full h-full min-w-full min-h-full md:hidden'  key={index}>

            <img src={images} alt=""   className='w-full h-full transition-all' style={{transform : `translateX(-${currentImage * 100}%)`}} />
       
             </div>

            )
          })
        }


       
         

        
        </div>
         {/* <div className=' z-30 h-full w-full md:flex justify-center '>
                <h2 className='mt-7 text-[30px]'>Providing Finacial Services For you</h2>
            </div> */}
      </div>
    </div>
  )
}

export default BannerProduct
