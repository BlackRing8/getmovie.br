import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import { NavBar } from "./components/Navbar";

const App = () => {  
  return (
    <div className="App bg-white dark:bg-black">
     <NavBar/>
     <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
