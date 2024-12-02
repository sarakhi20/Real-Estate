import React from 'react'
import { motion } from 'framer-motion'

const Signup = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b0821563-a2de-4e9e-82fe-4ed80f6fefcd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Signup Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <motion.div initial={{opacity:0, x:-200}} transition={{duration:1}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Signup'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Signup</h1>
        <form>
        <div  className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
            </div>
        </div>
        <div  className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Password
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="Password" name='Password' placeholder='Password' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Mobile-number
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="number" name='Mobile' placeholder='Mobile-number' required />
            </div>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mt-2 mb-10 rounded'>Signup</button>
        </form>
    </motion.div>
  )
}

export default Signup