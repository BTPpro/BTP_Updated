import React from "react";
import tpoCSS from "./tpo_page.module.css"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom";
import Teams from "./components/Teams";

export default function tpo() {
      return (
          <div className={tpoCSS.main}>
            <div className={tpoCSS.sidebar}>
                <Sidebar />
            </div>
            <div className={tpoCSS.pages}>
                <Outlet/>
            </div>
          </div>  
      );
  }
