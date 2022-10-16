import  Appcss from  '../App.module.css';
import React, { useState } from 'react';
import Landingpagecomp from "./Landingpagecomp";
import Imageupprofile from "./Imageupprofile";
import Profileimage from "./Profileimage";
import Profilecontent from "./Profilecontent";
import Resume1 from "./Resume1";
export default function Landingpage() {
 

 
//for sort arrow
const[icon, Seticon]= useState("fa fa-angle-down")
 
  function setarrow(){
   if(icon==="fa fa-angle-down")
   Seticon("fa fa-angle-up")
   else Seticon("fa fa-angle-down")
  }
  return (
    <div className={ Appcss.landing_container}>
      <div className={Appcss.landpage_right}>
        <div className={Appcss.sort1}>
      <div className={Appcss.sort}>
     
        <p className={Appcss.sort_text1} >SORT BY: <span className={Appcss.sort_text} onClick={setarrow} >LATEST &nbsp;<i className={icon}></i></span></p>
      </div>
         <hr className={Appcss.sorthori} />
         </div>
      <div className={Appcss.rightfinal}>
      <Landingpagecomp/>
      <Landingpagecomp/>
      <Landingpagecomp/>
      <Landingpagecomp/>
      </div>
      </div>
      <div className={Appcss.landpage_left}>
        <div className={Appcss.photo}>
          <Imageupprofile/>
          <Profileimage/>
          <Profilecontent/>
        </div>
       <Resume1 />
      </div>
    </div>
  );
}
