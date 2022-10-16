import React, { useState } from "react";
import  Appcss from  '../App.module.css';
import {
  FaCommentDots,
  FaShareAlt,
  FaRegThumbsUp,
  FaThumbsUp,
} from "react-icons/fa";
import Content from "./Content";
export default function Landingpagecomp() {
  // for count-like
  const [countlike, Setcountlike] = React.useState(0);
  const [likeimage, Setcountimage] = React.useState(<FaRegThumbsUp />);
  const [preservetextcount, Setpreservetextcount] = useState("one");
  function increasecount() {
    if (preservetextcount === "one") {
      Setcountlike(countlike + 1);
      Setcountimage(<FaThumbsUp />);
      Setpreservetextcount("zero");
    } else {
      Setcountlike(countlike - 1);
      Setpreservetextcount("one");
      Setcountimage(<FaRegThumbsUp />);
    }
  }
  const Landingpagecompname = "Gaurav Agrawal";
  const Landingpageskill = "Web developer";
  const Landingpageimage= "images/person-modified.png"
  return (
    <>
      <div className={Appcss.main}>
        <div className={Appcss.containersecond}>
          <img src={Landingpageimage} className={Appcss.main_image} alt="" />
          <div className={Appcss.containersecond_details}>
            <h1 className={Appcss.containersecond_name}>{Landingpagecompname}</h1>
            <h6 className={Appcss.containersecond_about}>{Landingpageskill}</h6>
          </div>
        </div>
        <div className={Appcss.transform}>
        <Content />
        </div>
        <hr className={Appcss.readmore_under} />
        <din className={Appcss.undernavbar}>
          <i onClick={increasecount} className={Appcss.like_icon}>
            {likeimage}
          </i>
          <p className={Appcss.like_text}>{countlike}</p>

          <i className={Appcss.comment_icon} onClick={increasecount}>
            {" "}
            <FaCommentDots />
          </i>
          <p Classname={Appcss.comment_text}>{countlike}</p>

          <i className={Appcss.share_icon}>
            <FaShareAlt />
          </i>
          <p className={Appcss.share_text}>Share</p>
        </din>
      </div>
    </>
  );
}
