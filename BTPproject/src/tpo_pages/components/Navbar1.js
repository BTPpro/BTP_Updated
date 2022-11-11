import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navcss from "./navbar.module.css";

export default function Navbar()
{
    const [is1Active, set1Active] = useState(true);
    const [is2Active, set2Active] = useState(false);
    const [is3Active, set3Active] = useState(false);

    const handleClick1 = () => {
        set1Active(true);
        set2Active(false);
        set3Active(false);
      };
      const handleClick2 = () => {
        set1Active(false);
        set2Active(true);
        set3Active(false);
      };
      const handleClick3 = () => {
        set1Active(false);
        set2Active(false);
        set3Active(true);
      };


    return (
        <div  className={Navcss.navMainDiv}>
           <div >
            <ul className={Navcss.NavDiv}>
                <li >
                   <Link 
                    onClick={handleClick1}
                    className={Navcss.navItem} to="all_students"><div className={is1Active
                        ? Navcss.sidebar_item + " " + Navcss.active
                        : Navcss.sidebar_item}>All Students</div></Link>
                </li>
                <li  >
                <Link 

                 onClick={handleClick2}
                  className={Navcss.navItem}to="acceptable"><div className={is2Active
                    ? Navcss.sidebar_item + " " + Navcss.active: Navcss.sidebar_item}>Approvable</div></Link>
                </li>
                <li  >
                <Link
                 onClick={handleClick3}
                  className={Navcss.navItem} to="rejectable"><div className={is3Active
                    ? Navcss.sidebar_item + " " + Navcss.active: Navcss.sidebar_item}>Rejectable</div></Link>
                </li>
            </ul>
           </div>
           <div className={Navcss.outletDiv}>
           <Outlet />
           </div>
          
        </div>
           
    );
}