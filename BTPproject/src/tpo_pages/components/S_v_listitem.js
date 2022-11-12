import React from "react";
import S_v_listitemcss from "./S_v_listitem.module.css"

export default function S_v_listitem (props) {

    return (
       
        <>
        <div className={S_v_listitemcss.list_heading}>
    <p className={S_v_listitemcss.list_1}>{props.details.id}</p>
    <p className={S_v_listitemcss.list_2}>{props.details.Rollno}</p>
    <p className={S_v_listitemcss.list_3}>{props.details.Name}</p>
    <p className={S_v_listitemcss.list_4}>{props.details.Phoneno}</p>
    <p className={S_v_listitemcss.list_5}>{props.details.Gender}</p>
    <p className={S_v_listitemcss.list_6}>{props.details.branch}</p>
</div>
        </>
    )
    ;}