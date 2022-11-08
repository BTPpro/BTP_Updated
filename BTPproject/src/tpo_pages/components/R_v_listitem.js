import React from "react";
import R_v_listitemcss from "./R_v_listitem.module.css"

export default function R_v_listitem (props) {

    return (
       
        <>
        <div className={R_v_listitemcss.list_heading}>
    <p className={R_v_listitemcss.list_1}>{props.details.id}</p>
    <p className={R_v_listitemcss.list_2}>{props.details.Companyid}</p>
    <p className={R_v_listitemcss.list_3}>{props.details.Companyname}</p>
    <p className={R_v_listitemcss.list_4}><button className={R_v_listitemcss.button_view} >View</button></p>

</div>
        </>
    )
    ;}