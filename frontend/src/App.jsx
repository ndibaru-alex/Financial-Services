import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar,WhatsApp,Footer} from './components'

const App = () => {
  return (
    <div className='relative'>
    <Navbar/>
    <main className='min-h-[calc(100vh-200px)] mt-16'>
   <Outlet/>   
   </main>
   <div className='fixed bottom-[20px] right-4'> <WhatsApp/></div>
   
    <Footer/>

   
    
    </div>
  )
}

export default App
