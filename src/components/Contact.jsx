import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit bg-gradient-to-b from-black to-gray-800 text-gray-400'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-200'>Contact</p>
          <div className='flex justify-center text-2xl'>
          <p className='py-6'>Submit the form below to get in touch!</p>
          </div>
            
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/xboDZLdg" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none' />

            <input type="text" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none my-4' />

            <textarea placeholder='Enter your text...' name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-gray-200 focus:outline-none'></textarea>

            <button className='text-black font-bold bg-gradient-to-r from-yellow-400 to-yellow-100 cursor-pointer px-6 py-3 my-8 mx-auto flex-items-center rounded-md hover:scale-110 duration-300 hover:from-indigo-400 hover:to-indigo-400 hover:text-white'>Let's chat!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
