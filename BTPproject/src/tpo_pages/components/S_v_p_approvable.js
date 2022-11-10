import React from "react";
import S_v_p_approvablecss from "./S_v_p_approvavble.module.css"
import A_Data from "./S_v_p_approvabledata"
import R_Data from "./S_v_p_rejectabledata"
import S_v_p_approvablelistitem from "./S_v_p_approvablelistitem"
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar1";
export default function S_v_p_approvable() {
    return (
<>
<div className ={S_v_p_approvablecss.list_heading}>
    <p className ={S_v_p_approvablecss.list_1}>#</p>
    <p className ={S_v_p_approvablecss.list_2}>Roll no</p>
    <p className ={S_v_p_approvablecss.list_3}>Name</p>
    <p className ={S_v_p_approvablecss.list_4}>Active Backlog</p>
    <p className ={S_v_p_approvablecss.list_5}>Approve</p>
</div>
<div >

{
        A_Data.map((value)=>(
        <div key= {value.id} className={S_v_p_approvablecss.child}>
          <S_v_p_approvablelistitem details={value} />
        </div>  
          )
        )
      }  
</div>

</>
    );
}