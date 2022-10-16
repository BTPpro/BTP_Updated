import Navbar from "./components/Navbar"
import Search from "./components/Search"
import SideMenu from "./components/SideMenu"
import { useRef, useState } from "react";
import { ReactDOM } from "react-dom";

import {
    Routes,
    Route,
  } from "react-router-dom";

export default function App(){
    console.log("Re-render")
    const [isMenuActive,setIsMenuActive] = useState(false);
    let menu=useRef();
    console.log(isMenuActive)
    const check=(thatMenu)=>{
        setIsMenuActive(true)
        menu=thatMenu;
    }
    const clickedFunc=(e)=>{
        console.log(e.target);
        if(menu.current || menu.current.contains(e.target)===false)
            setIsMenuActive(false)
        console.log(menu.current);

    }
    return (
        <div className="Appmain">

            <div  onClick={clickedFunc}>
            <Routes>
                <Route  path="/" element={<Navbar setIsMenuActive={check} />} />
                <Route  path="feed" element={<Navbar setIsMenuActive={check} />} />
                <Route  path="jobs" element={<Navbar setIsMenuActive={check} />} />
                <Route   path="notices" element={<Navbar setIsMenuActive={check} />} />
            </Routes> 
            <br />
            <Search searchCount={2000} />
            <br />
            </div>
            <SideMenu isMenuActive={isMenuActive} />
        </div>
    );
}