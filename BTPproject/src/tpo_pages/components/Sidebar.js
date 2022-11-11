import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import SidebarCSS from "./sidebar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import pic from "../imgs/pro.jpg";

export default function Sidebar() {
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
    <div className={SidebarCSS.main}>
      <div className={SidebarCSS.profilediv}>
        <img className={SidebarCSS.profileimg} src={pic} alt="hi"></img>
        <p className={SidebarCSS.profilename}>David (Admin)</p>
      </div>
      <div className={SidebarCSS.sidebar_box}>
        <Link
          onClick={handleClick1}
          className={SidebarCSS.links}
          to="student_verification/all_students"
        >
          <div
            className={
              is1Active
                ? SidebarCSS.sidebar_item + " " + SidebarCSS.active
                : SidebarCSS.sidebar_item
            }
          >
            <div className={SidebarCSS.hoverbox}>
              <BsPeopleFill />
              <span className={SidebarCSS.sidebar_text}>
                Student Verification
              </span>
            </div>
          </div>
        </Link>
        <Link
          onClick={handleClick2}
          className={SidebarCSS.links}
          to="recruiter_verification/unverified"
        >
          <div
            className={
              is2Active
                ? SidebarCSS.sidebar_item + " " + SidebarCSS.active
                : SidebarCSS.sidebar_item
            }
          >
            <div className={SidebarCSS.hoverbox}>
              <RiBuilding2Fill />
              <span className={SidebarCSS.sidebar_text}>
                Recruiter Verification
              </span>
            </div>
          </div>
        </Link>
        <Link
          onClick={handleClick3}
          className={SidebarCSS.links}
          to="recruiter_credentials"
        >
          <div
            className={
              is3Active
                ? SidebarCSS.sidebar_item + " " + SidebarCSS.active
                : SidebarCSS.sidebar_item
            }
          >
            <div className={SidebarCSS.hoverbox}>
              <MdComputer />
              <span className={SidebarCSS.sidebar_text}>
                Recruiter Credentials
              </span>
            </div>
          </div>
        </Link>
      </div>

      <Link className={SidebarCSS.links + " " + SidebarCSS.logout_div} to={"/"}>
        <div>
          <p className={SidebarCSS.logout}>LOG OUT</p>
        </div>
      </Link>
    </div>
  );
}
