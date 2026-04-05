import React from 'react'
import {useForm} from 'react-hook-form'

const Form = ({handleFormSubmitData}) => {

  const {register , handleSubmit,reset} = useForm()

  const handleFormSubmit = (data) =>{
    handleFormSubmitData(data);
    reset();
  }


  return (
    <div className='mt-10 flex gap-10 justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
       <input {...register('name')}  required  className='rounded-md px-2 py-1 text-base font-semibold border outline-none' type="text" placeholder='Enter name' />
       <input {...register('email')} required  className='rounded-md px-2 py-1 text-base font-semibold border outline-none' type="email" placeholder='email' />
       <input {...register('image')}  required className='rounded-md px-2 py-1 text-base font-semibold border outline-none' type="text" placeholder='Image URL' />
       <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit"  />
       
      </form>
    </div>
  )
}

export default Form