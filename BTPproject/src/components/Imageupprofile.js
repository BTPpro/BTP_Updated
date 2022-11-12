import React from 'react'
import  Appcss from  '../App.module.css';
export default function Resume() {
  // for image
  const imga= "images/Rectangle 3.png"
    return (
        <img className={Appcss.profile} src= {imga} alt=""/>

    );
}