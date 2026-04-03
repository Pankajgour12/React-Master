import React from 'react'

const Card = ({name,profession,image}) => {

 const alerted = ()=>{
    return(
       alert(`${name} is added to your friend list`)
    )
    

 }

  return (
    <div className='w-52 bg-stone-700 rounded-xl overflow-hidden '>
        <div className='w-full h-40 bg-stone-600 rounded-2xl overflow-hidden'>
            <img src={image} 
            className='w-full h-full object-cover'
            
             alt="img" />
        </div>
        <div className='w-full p-5 flex flex-col justify-between gap-2 items-start'>
          <h2 className='text-2xl text-shadow-amber-50 text-stone-100'>{name}</h2>
          <h5 className='text-red-100 text-xl'>{profession}</h5>

          <button 
          onClick={alerted}
          type='button'
          className='px-3  mt-4 py-1 text-sm text-white bg-black hover:bg-blue-500 font-semibold rounded-md'>

          add friend
          </button>


        </div>
        
    </div>
  )
}

export default Card