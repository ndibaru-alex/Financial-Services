import React,{useState,useRef}  from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import {EarthCanvas} from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name : '',
    email : '',
    message : ''
  })

  

  const [loading,setLoading] = useState(false)

  const handleChange = (e) =>{
    const {name,value} = e.target
     setForm({...form, [name]:value})

  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name : form.name,
        to_name : "Alexander",
        from_email: form.email,
        to_email : "alexgathege@gmail.com",
        message : form.message
      },
     
      import.meta.env.VITE_PUBLIC_KEY
              
    )
    .then(()=>{
      setLoading(false)
      alert("Thanks, will get back to you as soon as possible")
      setForm({
        name: "",
        email: "",
        message: "",
      })
    },
    (error)=>{
      setLoading(false)
      console.log(error)
      alert('something went wrong please resend')
      setForm({
        name: "",
        email: "",
        message: "",
      })
    }
  
  )

  }
  
  return (
    <div className='xl:mt-12 xl:flex xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-transparent p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-7'>

          <label htmlFor="name" className='text-white font-medium mb-2'><span>Name</span></label>
          <input type="text" placeholder=' enter your name' id='name' className=' px-4 py-6 text-black font-medium rounded-2xl bg-secondary' name='name' value={form.name} 
          onChange={handleChange} />
          <label htmlFor="email" className='text-white font-medium mb-2'><span>Email</span></label>
          <input type="email" id="email" placeholder='enter your email' className='px-4 py-6 text-black font-medium p-4 rounded-2xl bg-secondary' name='email' value={form.email}
          onChange={handleChange}/>
          <label htmlFor="message" className='text-white font-medium mb-2'><span>Message</span></label>
          <textarea rows={7} name="message" value={form.message} id="message" placeholder='your message' className='px-4 py-6 text-black font-medium rounded-2xl bg-secondary' 
          onChange={handleChange}></textarea>
          <button type='submit' className='bg-secondary text-black py-3 px-8 w-fit font-bold  shadow-md shadow-primary rounded-xl'>
              { 
                loading ? "sending ..." : "Send"
              }
          </button>

        </form>
      </motion.div>
      <motion.div  variants={slideIn('right','tween',0.2,1)} className='md:flex-1 xl:h-auto md:h-[550px] h-[350px] md:w-[750px]'>
            <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact') 