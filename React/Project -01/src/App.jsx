import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  const handleAdd = () => {
    if (num <= 0) return;
    dispatch(incrementByAmount(num));
    setNum(0);
  };

  return (
    <div className='bg-stone-900 min-h-screen w-full text-white flex flex-col gap-8 justify-center items-center'>

      <h1 className='text-5xl font-bold text-yellow-400'>
        {count}
      </h1>

      <div className='flex gap-4'>
        <button
          onClick={() => dispatch(increment())}
          className='px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition'
        >
          +
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className='px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition'
        >
          -
        </button>
      </div>

      <div className='flex gap-3 items-center'>
        <input
          type="number"
          className='px-4 py-2 rounded-md border text-black w-24 text-center'
          value={num}
          onChange={(e) => {
            const value = e.target.value;
            setNum(value === "" ? 0 : Number(value));
          }}
        />

        <button
          onClick={handleAdd}
          className='px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition'
        >
          Add
        </button>
      </div>

    </div>
  )
}

export default App;