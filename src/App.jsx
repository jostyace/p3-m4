import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./App.css";
import logo from './assets/shared/logo.svg'

function App() {
  return (
    <Router>
      
        <nav className="w-full flex h-24 bg-transparent mt-8 absolute">
          <div  className="w-5/12 flex items-center"> <img src={logo} alt="" className=" h-12 w-12 mx-14" /><div className="w-full h-[1px]  border-b-[1px] border-white border-opacity-25 -mr-8 z-[1]"></div></div>
          <ul className="flex items-center w-7/12 uppercase bg-opacity-[0.04] backdrop-blur-md font-barlowcondensed text-base font-normal text-white bg-white gap-12 justify-center">
            <li className="h-full">
              <NavLink className={({ isActive }) => `h-full flex justify-center items-center border-b-2 ${isActive ? "border-b-white": "border-b-transparent hover:border-b-white hover:border-opacity-50"}`} to="/" ><span className=" font-bold pr-2">00</span> Home</NavLink>
            </li>
            <li className="h-full flex justify-center items-center">
              <NavLink className={({ isActive }) => `h-full flex justify-center items-center border-b-2 ${isActive ? "border-b-white": "border-b-transparent hover:border-b-white hover:border-opacity-50"}`} to="/destination"><span className=" pr-2 font-bold">01</span> Destination</NavLink>
            </li>
            <li className="h-full flex justify-center items-center">
              <NavLink className={({ isActive }) => `h-full flex justify-center items-center border-b-2 ${isActive ? "border-b-white": "border-b-transparent hover:border-b-white hover:border-opacity-50"}`} to="/crew"><span className=" pr-2 font-bold">02</span> Crew</NavLink>
            </li>
            <li className="h-full flex justify-center items-center">
              <NavLink className={({ isActive }) => `h-full flex justify-center items-center border-b-2 ${isActive ? "border-b-white": "border-b-transparent hover:border-b-white hover:border-opacity-50"}`} to="/technology"><span className="  pr-2 font-bold">03</span> Technology</NavLink>
            </li>
          </ul>
        </nav>
    
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Router>
  );
}

export default App;
