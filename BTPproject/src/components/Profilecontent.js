import React from "react";
import  Appcss from  '../App.module.css';
export default function Profilecontent() {
  // for name
  const name = "Gaurav Agrawal";
  // for image

  const details =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur nam quasi, modi consequatur impedit similique fugiat.";
  return (
    <>
      <div className={Appcss.details}>
        <h1 className={Appcss.landing_name}>{name}</h1>
        <p className={Appcss.landing_about}>{details} </p>
      </div>
    </>
  );
}
