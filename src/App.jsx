// import NewsList from "./components/NewsList/NewsList.jsx"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"

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
