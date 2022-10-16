import React from "react";
import NoticesCss from "./Notices.module.css";

function Notices(props)
{
    return (
        <div className={NoticesCss.notices}>
            <div className={NoticesCss.notice1}>
                <img className={NoticesCss.image} src={props.img} alt="img"/>
                <div className={NoticesCss.content} >
                <h4 className={NoticesCss.para}>{props.heading}</h4>
            <span className={NoticesCss.p}>{props.time}</span>
                </div>
            
            </div>
        </div>
    )
}

export default Notices;