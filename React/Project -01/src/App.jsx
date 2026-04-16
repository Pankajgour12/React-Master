import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counterSlice';

function App() {

  const dispatch = useDispatch();

  const count = useSelector(state=>state.counter.value)



  return (
   <div className='bg-stone-800 min-h-screen w-full text-white flex flex-col gap-4 justify-center items-center'>

   <h1 className='text-5xl'>Value of : {count}</h1>

   <button
   
   onClick={()=>{
    dispatch(increment())

   }}
   
   className='px-4 py-2 rounded-md bg-fuchsia-800 border-amber-100'>Increment</button>
   <button onClick={()=>{
    dispatch(decrement())
    
    
   }} className='px-4 py-2 rounded-md bg-fuchsia-900 border-amber-100'>Decrement</button>
    

        

   
   </div>
  )
}

export default App;
