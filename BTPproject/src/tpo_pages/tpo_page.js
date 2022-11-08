import React from "react";
import Sidebar from "./components/Sidebar";
import tpoCSS from "./tpo_page.module.css";
import { Outlet } from "react-router-dom";

export default function tpo() {
  return (
    <div className={tpoCSS.main}>
      <div className={tpoCSS.sidebar}>
        <Sidebar />
      </div>
      <div className={tpoCSS.pages}>
        <Outlet />
      </div>
    </div>
  );
}
