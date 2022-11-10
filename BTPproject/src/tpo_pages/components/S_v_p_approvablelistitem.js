import React from "react";
import Navbar from "./Navbar1";
import S_v_p_approvablelistitemcss from "./S_v_p_approvablelistitem.module.css"

export default function S_v_p_approvablelistitem (props) {

    return (
       
        <>
        <div className={S_v_p_approvablelistitemcss.list_heading}>
    <p className={S_v_p_approvablelistitemcss.list_1}>{props.details.id}</p>
    <p className={S_v_p_approvablelistitemcss.list_2}>{props.details.Rollno}</p>
    <p className={S_v_p_approvablelistitemcss.list_3}>{props.details.Name}</p>
    <p className={S_v_p_approvablelistitemcss.list_4}>{props.details.Activeb}</p>
    <p className={S_v_p_approvablelistitemcss.list_5} ><button className={S_v_p_approvablelistitemcss.approvebutton} >Approve</button></p>

</div>
        </>
    )
    ;}