import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HoMe from "./pages/home";
import Projek from "./pages/Projek";
import Blog from "./pages/Blog";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <>
     <NavBar/>
     <div className="text-center">
      <Routes>
        <Route path="/" element={<HoMe/>}/>
        <Route path="/projek" element={<Projek/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
     </div>
    </>
  );
}

export default App;
