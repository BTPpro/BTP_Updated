import React from "react";
import Post1Css from "./posts.module.css"

function post1(props)
{
    return (
        <div >
          <div className={Post1Css.post}>
             <img className={Post1Css.img} src={props.img} alt="img"/>
             <div className={Post1Css.main}>
             <h2 className={Post1Css.h2}>{props.heading}</h2>
            <span className={Post1Css.span1}>{props.part1}</span><span className={Post1Css.span2}>{props.part2}</span>
            <p className={Post1Css.p}> On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters,</p>

             </div>
            
            <button className={Post1Css.apply}>APPLY</button>
            </div>
        
        </div>
        
        
    )
}

export default post1;