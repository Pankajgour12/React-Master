import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
   

  return (
    <div className='min-h-screen w-full
    flex flex-col justify-center items-center bg-stone-900 gap-2
    '>
        <h1 className='text-9xl text-amber-50'>{count}</h1>
        <button
         className='px-4 py-2 bg-sky-300 rounded-2xl text-sm shadow '
        onMouseEnter={() => setCount(prev=> prev+1)}>Incress Value</button>

        
  


            


    </div>
  )
}

export default UseState