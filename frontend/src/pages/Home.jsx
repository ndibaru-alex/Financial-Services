import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Feedback from '../components/Feedbacks'

import { SectionWrapper } from '../hoc'


const Home = () => {
  return (
    <section >
     <Banner/>
     <About/>
     <Projects/>
     <Feedback/>
    </section>
  )
}

export default SectionWrapper( Home, "")
