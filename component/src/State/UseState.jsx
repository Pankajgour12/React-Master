import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    const [val , setVal] = useState({
        name: "Pankaj",
        isBanned: false
    })

      const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
   

  return (
    <div className='min-h-screen w-full
    flex flex-col justify-center items-center bg-stone-900 gap-5
    '>
        <div className='flex flex-col justify-center items-center gap-3'>
          
      <h1 className='text-5xl text-amber-50'>{count}</h1>
        <button
         className='px-4 py-2 bg-sky-300 rounded-2xl text-sm shadow '
        onClick={() => setCount(prev=> prev+1)}>Incress Value</button>


        
        <button
         className='px-4 py-2 bg-sky-300 rounded-2xl text-sm shadow '
        onClick={() => setCount(prev=> prev-1)}>decress Value</button>



        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-5xl text-amber-50'> Name : {val.name}</h1>
            <h1 className='text-2xl text-amber-50'> Is Banned : {val.isBanned.toString()}</h1>

            <button
            onClick={()=>setVal({...val ,isBanned: !val.isBanned})}
            className='px-4 py-2 text-center  rounded-2xl shadow bg-amber-200 text-black '> Change </button>


        </div>

        <div className=" flex flex-col justify-center items-center gap-4 bg-gray-100 text-white">
      
      {/* Input */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        className="px-4 py-2 rounded-lg text-black outline-none"
      />

      {/* Output */}
      <h1 className="text-2xl text-emerald-500 font-bold">
        {text ? text : "Type something..."}
      </h1>

        <p className="text-sm text-gray-800">
        Characters: {text.length}
      </p>

    </div>
        
  


            


    </div>
  )
}

export default UseState