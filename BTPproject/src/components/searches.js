import React from "react";
import Searchpostcard from "./Searchpostcard";
import SearchCss from "./searches.module.css";

function search()
{
    return (
           <div className={SearchCss.search}>
           <h4 className={SearchCss.h4}>MY SEARCHES</h4>
           <Searchpostcard name="UI/UX designer" />
           <Searchpostcard name="Graphic designer"/>
           <Searchpostcard name="Web designer"/>
          </div>
       
    )
}

export default search;
