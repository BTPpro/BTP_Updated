import React from "react";
import Jobcard from "./Jobcards";
import Search from "./searches";
import AppCss from "./app.module.css";

function Jobs()
{
    return (
        <div className={AppCss.carding_div}>
      <p className={AppCss.txt} >LATEST JOB POSTINGS</p>
     <Jobcard />
     <Search />
        </div>
        
    )
}

export default Jobs;