import React from "react";
import { BiUser } from "react-icons/bi";
import { FaBullseye } from "react-icons/fa";
import { TbArchive } from "react-icons/tb";
import SidebarCSS from "./Sidebar.module.css"

export default function Sidebar(){
return (
    <div className={SidebarCSS.sidebar_box }>
        <div className={SidebarCSS.sidebar_item}>
        <div></div>
        <div className={SidebarCSS.hoverbox}>
        <BiUser />
        <span className={SidebarCSS.sidebar_text}>Basic Details</span>
        </div>
        </div>
         <div className={SidebarCSS.sidebar_item}>
         <div></div>
         <div className={SidebarCSS.hoverbox}>
          <FaBullseye />
          <span className={SidebarCSS.sidebar_text}>Skills</span>
          </div>
         </div>
         <div className={SidebarCSS.sidebar_item}>
            <div></div>
            <div className={SidebarCSS.hoverbox}>
          <TbArchive />
          <span className={SidebarCSS.sidebar_text}>Career Journey</span>
          </div>
         </div>
    </div>
)
}