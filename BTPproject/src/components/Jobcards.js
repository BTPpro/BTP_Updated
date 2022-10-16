import React from "react";
import Post1 from "./posts";
import Job from "./jobcards.module.css";
import Uiux from "../images/uiux.png";
import Facebook from "../images/facebook.png";
import Google from "../images/google.png";
import LinkedIn from "../images/linkedin.png";

function Jobcard()
{
    return (
        <div className={Job.post}>
           <Post1 heading="UI/UX designer"
                  img={Uiux}  part1="Upwork" part2="Remote only"/>
           <Post1 heading="Product designer" img={Facebook} part1="Facebook" part2="Mumbai, India"/>
           <Post1 heading="Part-time UX designer" img={Google} part1=" Google" part2="International"/>
           <Post1 heading="Web designer" img={LinkedIn} part1="LinkedIn" part2="Banglore, India"/>
        </div>
    )
}

export default Jobcard;