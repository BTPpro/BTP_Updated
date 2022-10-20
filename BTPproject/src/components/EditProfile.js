import React from "react"; 
import DetailMain from "./DetailMain";
import DetailSecondary from "./DetailSecondary";
import Sidebar from "./Sidebar";
import EditProfileCSS from "./EditProfile.module.css"

function EditProfile() {
    return (
      <div className={EditProfileCSS.main}>
        <div className={EditProfileCSS.leftside}>
        <Sidebar />
        </div>
        <div className={EditProfileCSS.rigthside}>
        <DetailMain />
        <DetailSecondary />
        </div>
      </div>
    );
  }
  
  export default EditProfile;