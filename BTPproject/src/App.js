import  './App.module.css';
import Landingpage from "./components/Landingpage.js";
import Login from "./components/Login";

import Resume from './components/resume';
import ResumeAnalyser from './components/resumeanalyser'
import Studentanalysis from './components/studentanalys';

import Jobs from "./components/Jobs"
import Noticesmain from "./components/Noticesmain";

import Navbar from "./components/Navbar"
// import Search from "./components/Search"
import SideMenu from "./components/SideMenu"
import { useState } from "react";

import {
    Routes,
    Route,
  } from "react-router-dom";

export default function App(){
    const [isMenuActive,setIsMenuActive] = useState(false);

    const [isSearchActive,setIsSearchActive] = useState(false);

    let [menu,setmenu]=useState(null);
    console.log(isMenuActive)
    const check=(thatMenu)=>{
        if(!menu)
            setmenu(thatMenu)
        setIsMenuActive(true)
        
    }

    const check1=()=>{
        setIsMenuActive(false);
    }

    const newCheck=()=>{
        console.log("hii");
        setIsSearchActive(false);
    }

    const newCheck1=()=>{
        setIsSearchActive(true);
    }

    const clickedFunc=(e)=>{
        console.log(e.target);
        if(menu && !menu.current.contains(e.target))
            setIsMenuActive(false);
    }
    return (
        <div className="Appmain">

            <div  onClick={clickedFunc}>
            <Routes>
                <Route  path="/" element={
                    <>
                        <Login />
                    </>
                } />
                <Route  path="/profile" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1}  setIsMenuActive={check} />
                    </>
                } />
                <Route  path="/resume" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1} setIsMenuActive={check} />
                        <div  onClick={newCheck}><Resume /></div>
                    </>
                } />
                <Route  path="/resume_analyzer" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1} setIsMenuActive={check} />
                        <div  onClick={newCheck}><ResumeAnalyser /></div>
                    </>
                } />
                <Route  path="/student_assessment" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1} setIsMenuActive={check} />
                        <div  onClick={newCheck}><Studentanalysis /></div>
                    </>
                } />
                <Route  path="feed" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1} setIsMenuActive={check} />
                        <div  onClick={newCheck}><Landingpage /></div>
                    </>
                } />
                <Route  path="jobs" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1} setIsMenuActive={check} />
                        <div  onClick={newCheck}><Jobs /></div>
                    </>
                } />
                <Route  path="notices" element={
                    <>
                        <Navbar isSearchActive={isSearchActive} setSearchTrue={newCheck1} setIsMenuActive={check} />
                        <div  onClick={newCheck}><Noticesmain /></div>
                    </>
                } />
            </Routes> 
            <br />
            
            {/* <Search searchCount={2000} isSearchActive={true} /> */}
            <br />
            </div>
            <SideMenu onClick={newCheck} check1={check1} isMenuActive={isMenuActive} />
        </div>
    );
}