import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    const [val , setVal] = useState({
        name: "Pankaj",
        isBanned: false
    })
   

  return (
    <div className='min-h-screen w-full
    flex flex-col justify-center items-center bg-stone-900 gap-5
    '>
        <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='text-5xl text-amber-50'>{count}</h1>
        <button
         className='px-4 py-2 bg-sky-300 rounded-2xl text-sm shadow '
        onMouseEnter={() => setCount(prev=> prev+1)}>Incress Value</button>

        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-5xl text-amber-50'> Name : {val.name}</h1>
            <h1 className='text-2xl text-amber-50'> Is Banned : {val.isBanned.toString()}</h1>

            <button
            onClick={()=>setVal({...val ,isBanned: !val.isBanned})}
            className='px-4 py-2 text-center  rounded-2xl shadow bg-amber-200 text-black '> Change </button>


        </div>
        
  


            


    </div>
  )
}

export default UseState