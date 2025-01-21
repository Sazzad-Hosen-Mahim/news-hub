import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Navabr from "./components/Navabr";
import Footer from "./components/footer";
import SingleNews from "./components/SingleNews/SingleNews";
import NewsList from "./components/NewsList/NewsList";

function App() {
  return (
    <BrowserRouter>
      <Navabr />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/news/:id" element=<SingleNews /> />
        <Route path="/news/category/:name" element={<NewsList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
