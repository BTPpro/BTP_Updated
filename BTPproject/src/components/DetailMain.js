import React from "react";
import DetailMainCSS from "./DetailMain.module.css"

export default function DetailMain() {
  return (
    <div className={DetailMainCSS.details_head}>
      <img className={DetailMainCSS.profile_img} src="./images/profileimg.png" alt="img" />
      <div className={DetailMainCSS.details_row}>
        <div className={DetailMainCSS.row}>
          <div className={DetailMainCSS.row_item }>
          <input placeholder="First Name" className={DetailMainCSS.input}></input>
          <hr className={DetailMainCSS.hr}></hr>
          </div>
          <div className={DetailMainCSS.row_item}>
          <input  placeholder="Middle Name" className={DetailMainCSS.input}></input>
          <hr className={DetailMainCSS.hr}></hr>
          </div>
          <div className={DetailMainCSS.row_item}>
          <input  placeholder="Last Name" className={DetailMainCSS.input}></input>
          <hr className={DetailMainCSS.hr}></hr>
          </div>
        </div>
        <div className={DetailMainCSS.row}>
        <div className={DetailMainCSS.row_item}>
          <input  placeholder="Date Of Birth" className={DetailMainCSS.input}></input>
          <hr className={DetailMainCSS.hr}></hr>
          </div>
          <div className={DetailMainCSS.row_item}>
          <input  placeholder="Gender" className={DetailMainCSS.input}></input>
          <hr className={DetailMainCSS.hr}></hr>
          </div>
          <div className={DetailMainCSS.row_item}>
          <input  placeholder="Maritial Status" className={DetailMainCSS.input}></input>
          <hr className={DetailMainCSS.hr}></hr>
          </div>
        </div>
      </div>
    </div>
  );
}
