import React from 'react'
import  Appcss from  '../App.module.css';
export default function Profileimage() {
    const proimage= "images/person-modified.png"
    
    return(
        <>

     <img className={Appcss.myprofile_image} src={proimage} alt="" />
     </>
    );
}