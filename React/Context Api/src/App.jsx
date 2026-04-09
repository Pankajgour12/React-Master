import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Navbar from "./Components/Navbar";
import { UserProvider } from "./Context/UserContext";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;