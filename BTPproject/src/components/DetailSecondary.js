import React from "react";
import DetailSecondaryCSS from "./DetailSecondary.module.css"

export default function DetailSecondary() {
  return (
    <div className={DetailSecondaryCSS.detailsec}>
      <div className={DetailSecondaryCSS.row2}>
        <input  placeholder="Course" className={DetailSecondaryCSS.input}></input>
        <hr className={DetailSecondaryCSS.hr}></hr>
    </div>
    <div className={DetailSecondaryCSS.row2}>
      <input  placeholder="Primary Specialization" className={DetailSecondaryCSS.input}></input>
      <hr className={DetailSecondaryCSS.hr}></hr>
      </div>
      <div className={DetailSecondaryCSS.row2}>
      <input  placeholder="Enrollment Number" className={DetailSecondaryCSS.input}></input>
      <hr className={DetailSecondaryCSS.hr}></hr>
      </div>
      <div className={DetailSecondaryCSS.row2}>
      <input  placeholder="Current Organisation" className={DetailSecondaryCSS.input}></input>
      <hr className={DetailSecondaryCSS.hr}></hr>
      </div>
      <div className={DetailSecondaryCSS.row2}>
      <input  placeholder="Roles And Responsibilities" className={DetailSecondaryCSS.input}></input>
      <hr className={DetailSecondaryCSS.hr}></hr>
      </div>
      <div className={DetailSecondaryCSS.row2}> 
      <input  placeholder="Email"  className={DetailSecondaryCSS.input}></input>
      <hr className={DetailSecondaryCSS.hr}></hr>
      </div>
      <button className={DetailSecondaryCSS.edit_btn} type="submit">
        <img src="./images/save.png" className={DetailSecondaryCSS.editimg}  alt=""/>
        
        <div  className={DetailSecondaryCSS.savedit}>SAVE EDIT</div>
      </button>
      <div>
        <br></br>
        <br></br>
    </div>
    </div>
  
  );
}
