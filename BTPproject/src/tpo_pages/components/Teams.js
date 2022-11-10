import React from "react";
import {Route} from "react-router-dom";
import { Routes } from "react-router-dom";
import TeamCss from "./teams.module.css";
import Navbar from "./Navbar1";

function Teams()
{
    return (<div className={TeamCss.mainDiv}>
        <Navbar />
        <Routes>
        <Route path="/tpo/student_verification/all_students">
              <div className={TeamCss.outerDiv}>
           <h1>All students</h1>
          </div>
          </Route>
        <Route path="/tpo/student_verification/acceptable">
        <div className={TeamCss.outerDiv}>
           <h1>Acceptable</h1>
             </div> 
        </Route>
          


        <Route path="/tpo/student_verification/rejectable">
        <div  className={TeamCss.outerDiv}>
  <h1>Rejectable</h1>
  </div>
        </Route>

       



        </Routes>

    </div>
    );
}

export default Teams;

