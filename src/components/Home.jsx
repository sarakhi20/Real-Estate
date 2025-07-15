

import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Contact from './Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Payment from './Payment'
import Footer from './Footer'


const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      
         
      <Footer/>
    
     
    </div>
  )
}

export default Home
