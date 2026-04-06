import { Route, Routes } from "react-router-dom"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Home from "../Components/Home"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  )
}

export default Routing