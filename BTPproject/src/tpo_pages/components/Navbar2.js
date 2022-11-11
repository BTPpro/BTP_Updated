import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navcss from "./navbar.module.css";

export default function Navbar()
{
    const [is1Active, set1Active] = useState(true);
    const [is2Active, set2Active] = useState(false);

    const handleClick1 = () => {
        set1Active(true);
        set2Active(false);
      };
      const handleClick2 = () => {
        set1Active(false);
        set2Active(true);
      };


    return (
        <div  className={Navcss.navMainDiv}>
           <div >
            <ul className={Navcss.NavDiv}>
                <li >
                   <NavLink 
                    onClick={handleClick1}
                    className={Navcss.navItem} to="unverified"><div className={is1Active
                        ? Navcss.sidebar_item + " " + Navcss.active
                        : Navcss.sidebar_item}>Unverified recruiter</div></NavLink>
                </li>
                <li  >
                <NavLink 

                 onClick={handleClick2}
                  className={Navcss.navItem}to="verified"><div className={is2Active
                    ? Navcss.sidebar_item + " " + Navcss.active: Navcss.sidebar_item}>Verified recruiter</div></NavLink>
                </li>
            </ul>
           </div>
           <div className={Navcss.outletDiv}>
           <Outlet />
           </div>
          
        </div>
           
    );
}