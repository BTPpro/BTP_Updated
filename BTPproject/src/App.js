import  './App.module.css';
import Landingpage from "./components/Landingpage.js";
import Login from "./components/Login";

import Resume from './components/resume';
import ResumeAnalyser from './components/resumeanalyser'
import Studentanalysis from './components/studentanalys';
import EditProfile from "./components/EditProfile";
import Jobs from "./components/Jobs"
import Noticesmain from "./components/Noticesmain";
import TpoPage from "./tpo_pages/tpo_page";
 import A_V from "./tpo_pages/components/A_v";
import R_V from "./tpo_pages/components/R_v";
import Navbar from "./components/Navbar";
import Navbar1 from './tpo_pages/components/Navbar1';
import Navbar2 from "./tpo_pages/components/Navbar2"
import S_v_p_approvable from "./tpo_pages/components/S_v_p_approvable";
import S_v_p_rejectable from "./tpo_pages/components/S_v_p_rejectable";
import Student_varification_list from './tpo_pages/components/Student_varification_list';
import SideMenu from "./components/SideMenu"
import  Rc from "./tpo_pages/components/Rc"
import { useState } from "react";

import {
    Routes,
    Route,
  } from "react-router-dom";
import R_v from './tpo_pages/components/R_v';


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
                        <div  onClick={newCheck}><EditProfile /></div>
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

                <Route  path="tpo" element={<TpoPage />} >
                    <Route  path="student_verification" element={<Navbar1 />} >
                    <Route path="all_students" element={<Student_varification_list/>} />
                    <Route path="acceptable" element={<S_v_p_approvable />} />
                    <Route path="rejectable" element={<S_v_p_rejectable />} />
                    </Route>
                    <Route  path="recruiter_verification" element={<Navbar2 />}>  
                    <Route path="unverified" element={<A_V/>} />
                    <Route path="verified" element={<R_v/>} />
                    </Route>
                    <Route  path="recruiter_credentials" element={<Rc />} />
                </Route>
            </Routes> 
            {/* <Search searchCount={2000} isSearchActive={true} /> */}
            </div>
            <SideMenu onClick={newCheck} check1={check1} isMenuActive={isMenuActive} />
        </div>
    );
}
