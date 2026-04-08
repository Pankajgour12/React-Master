
import './App.css'
import Navbar from './components/Navbar'
import Routing from './utils/Routing'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-stone-800/20 max-w-7xl mx-auto'>
      <Navbar />
      <Routing/>
    </div>
  )
}

export default App