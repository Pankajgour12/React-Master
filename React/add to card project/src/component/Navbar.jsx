import React from 'react'

const Navbar = ({favCount}) => {
  
  return (
    <div className='max-w-4xl  p-4 mx-auto flex justify-between items-center border rounded-full mt-3 text-white/10  '>
        <h1 className='text-2xl text-orange-300 font-bold'>Orange🍊</h1>
        <div className='flex text-lg font-semibold gap-2 px-3 py-2 bg-orange-500  rounded-full'>
             <h2 className=' text-black'>Add to fav</h2>
             <h2 className='text-black'>{favCount}</h2>
     </div>
    </div>
  )
}

export default Navbar