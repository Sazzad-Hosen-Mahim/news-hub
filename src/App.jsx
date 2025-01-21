
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./page/About"
import Contact from "./page/Contact"
import Home from "./page/Home"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element=<Home/> />
      <Route path="/about" element=<About/> />
      <Route path="/contact" element=<Contact/> />
     </Routes>
    </BrowserRouter>
  )
}

export default App
