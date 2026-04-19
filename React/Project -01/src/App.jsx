import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  return (
    <div className='bg-stone-900 min-h-screen w-full text-white flex flex-col gap-6 justify-center items-center'>

      <h1 className='text-4xl font-bold'>
        Value: {count}
      </h1>

      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(increment())}
          className='px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition'
        >
          + Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className='px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition'
        >
          - Decrement
        </button>
      </div>

      

      <div className='flex gap-3 items-center'>
        <input
          type="number"
          className='px-4 py-2 rounded-md border '
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />

        <button
          onClick={() => dispatch(incrementByAmount(Number(num)))}
          className='px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition'
        >
          Add Amount
        </button>
      </div>

    </div>
  )
}

export default App;