import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Show from "../pages/Show"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/show" element={<Show />} />
    </Routes>
    
  )
}

export default Router