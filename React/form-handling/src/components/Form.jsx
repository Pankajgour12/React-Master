import React from 'react'

const Form = () => {
  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10'>
       <input className='rounded-md px-2 py-1 text-base font-semibold border outline-none' type="text" placeholder='Enter name' />
       <input className='rounded-md px-2 py-1 text-base font-semibold border outline-none' type="email" placeholder='email' />
       <input className='rounded-md px-2 py-1 text-base font-semibold border outline-none' type="text" placeholder='description' />
       <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit"  />
       
      </form>
    </div>
  )
}

export default Form