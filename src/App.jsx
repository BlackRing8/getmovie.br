import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Mylist from "./pages/My-list";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <div className="App dark:bg-black">
     <NavBar/>
     <div className="text-center">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/mylist" element={<Mylist/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
