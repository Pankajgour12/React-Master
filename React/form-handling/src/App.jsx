
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Form from './components/Form'

function App() {

  const [users, setUsers] = useState([
   
    
  ])


  return (
 <div className='w-full h-screen bg-stone-500 flex flex-col items-center justify-center'>
    <div className="w-full max-w-5xl mx-auto">
       <Cards users={users} />
       <Form/>
     </div>
    
   

 </div>
  )
}

export default App
