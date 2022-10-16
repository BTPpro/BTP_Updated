import React from 'react';
import  Appcss from  '../App.module.css';
import { Link } from "react-router-dom";

export default function Resume1() {
    // function openfile(){
    //     let input = document.createElement('input');
    //     input.type = 'file';
    //     input.onchange = _ => {
    //       // you can use this method to get file and perform respective operations
    //               let files =   Array.from(input.files);
    //               console.log(files);
    //           };
    //     input.click();
    
    //   }
return (

    <div className={Appcss.resume}>
    <p>RESUME</p>
    <hr className={Appcss.hr_resume} color="#f4f4f4" />
    <Link to={"/resume"}>
      <button className={Appcss.resume_button}>UPLOAD RESUME</button>
    </Link>
    <Link to={"/resume_analyzer"}>
      <button input-type="file" className={Appcss.resume_button}>
        RESUME ANALYSIS
      </button>
    </Link>
  </div>
);

}