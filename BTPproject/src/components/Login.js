import React from "react";
import { Link } from "react-router-dom";
import  Appcss from  '../App.module.css';
export default function Login() {
  return (
    <>
    <div  className={Appcss.button_collection} >
    <div className={Appcss.admin}>
      <Link  to={"/tpo/student_verification/all_students"}><button className={Appcss.admin_button}>Admin Login</button></Link>
    </div>
    <div className={Appcss.admin}>
      <Link  to={"/tpo/student_verification/all_students"}><button className={Appcss.admin_button}>Recruiter Login</button></Link>
    </div>
    <div className={Appcss.admin}>
      <Link  to={"/tpo/student_verification/all_students"}><button className={Appcss.admin_button}>User Login</button></Link>
    </div></div>
    <div className={Appcss.login}>
      <img
        className={Appcss.login_logo}
        src="images/college-login-logo.png"
        alt="Logoimage"
      />
      <input
        className={Appcss.input_mail + " " + Appcss.input}
        type="email"
        id="email"
        placeholder="College ID"
      />

      
      <input type = "password" className={Appcss.input_password + " " + Appcss.input} placeholder="Password"  />

      <div className={Appcss.signin_button_div}>
      <Link  to={"/feed"}>
        <button className={Appcss.signin_button} >
          SIGN IN
        </button>
      </Link>
      </div>
      
      
    </div>
    </>
  );
}
