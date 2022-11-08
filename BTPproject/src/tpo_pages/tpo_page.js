import React from "react";
import tpoCSS from "./tpo_page.module.css"
// import S_v_p_approvable from "./components/S_v_p_approvable"
// import Student_varification_list from "./components/Student_varification_list"
// import R_v from "./components/R_v"

export default function tpo() {
      return (
          <div className={tpoCSS.main}>
            <div className={tpoCSS.sidebar}>
                Hello
            </div>
            <div className={tpoCSS.pages}>
             {/* <S_v_p_approvable/>
                 <Student_varification_list/>
               <R_v/> */}
            </div>
          </div>  
      );
  }

