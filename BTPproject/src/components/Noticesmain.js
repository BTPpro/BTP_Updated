import React from "react";
import Notices from "./Notices";
import Facebook1 from "../images/facebook1.png";
import Google1 from "../images/google1.png";
import Gunit from "../images/gunit.png";
import Ketan from "../images/ketan.png";
import Sidhi from "../images/siddhi.png";
import NoticesmainCss from "./Noticesmain.module.css";

function Noticesmain()
{
    return (
        <div className={NoticesmainCss.card}>
        <h3 className={NoticesmainCss.recent}>RECENT</h3>
        <Notices 
        img={Google1}
        heading="Google just posted a job opportunity"
        time="3 hours"/>
        <Notices 
        img={Gunit}
        heading=" Gunit Varshney shared his interview experience"
        time="9 hours"/>
        <Notices 
        img={Sidhi}
        heading="Siddhi Agarwal shared her interview experience"
        time="12 hours"/>
        <h3 className={NoticesmainCss.recent}>EARLIER</h3>
        <Notices 
        img={Facebook1}
        heading="Facebook SDE intern recruitment’s last registration date has been changed"
        time="2 day ago"/>
         <Notices 
         img={Ketan}
        heading="Ketan Jakkar just shared his interview experience"
        time="9 hours"/>
    
        </div>
    )
}

export default Noticesmain;