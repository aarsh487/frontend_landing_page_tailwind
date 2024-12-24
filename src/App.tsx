import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"
import { Login } from "./pages/Login"

function App() {
  return (
    <div className="bg-gradient-to-r from-white to-[#F9FBFF]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
