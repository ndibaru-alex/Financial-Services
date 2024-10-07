import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { SectionWrapper } from '../hoc'


const Servies = () => {
  return (
   <div className='min-h-[calc(100vh-180px)] mt-1 md:flex '>

      <aside className='bg-[#151030] md:h-[60vh] h-[25vh] w-full md:max-w-60 rounded-[20px] '>

        <div>
            <h2 className='text-center pt-5'>Our Services</h2>
        </div>


          <div>
            <nav className='flex md:flex-col p-4'>
            <Link to={''} className='px-2 py-2 my-1 hover:bg-slate-200 bx-shodow hover:text-red-600'> Fund Administraton</Link>
            <Link  to={'gratuity'}  className='px-2 py-2 my-1 hover:bg-slate-200 bx-shodow hover:text-red-600'>Gratuity Management</Link>
             <Link  to={'training'}  className='px-2 py-2 my-1 hover:bg-slate-200 bx-shodow hover:text-red-600'>Training & Consultancy</Link>

            </nav>
          </div>

      </aside>
      <main className='w-full h-full p-4'>
     <Outlet/>
      </main>
      
    </div>
  )
}

export default SectionWrapper(Servies, '') 
