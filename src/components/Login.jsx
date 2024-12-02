import React from 'react'
import { motion } from 'framer-motion'

const Login = () => {
   
    return (
      <motion.div initial={{opacity:0, x:100}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Login'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Login</h1>
          <form>
          <div  className='flex flex-wrap'>
              <div className='w-full md:w-1/2 text-left '>
                  Your Email
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
              </div>
              <div className='w-full md:w-1/2 text-left md:pl-4'>
                  Password
                  <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="Password" name='Password' placeholder='Password' required />
              </div>
          </div>
          
          <button className='bg-blue-600 text-white py-2 px-12 mt-2 mb-10 rounded'>Login</button>
          </form>
      </motion.div>
    )
}

export default Login