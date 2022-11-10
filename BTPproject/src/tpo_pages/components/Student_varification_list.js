import React from "react";
import Student_varification_list_css from "./Student_varification.module.css"
import S_v_listitem from "./S_v_listitem"
import Data from "./S_vdata";
import Navbar from "./Navbar1";
export default function Student_varification_list () {
    return (
<>

<div div className={Student_varification_list_css.list_heading}>

    <p  className={Student_varification_list_css.list_1}>#</p>
    <p  className={Student_varification_list_css.list_2}>Roll No</p>
    <p  className={Student_varification_list_css.list_3}>Name</p>
    <p  className={Student_varification_list_css.list_4}>Phone No</p>
    <p  className={Student_varification_list_css.list_5}>Gender</p>
    <p  className={Student_varification_list_css.list_6}>Branch</p>
    </div>
<div className={Student_varification_list_css.dataScroll}>


<div  >
{
        Data.map((value)=>(
        <div key= {value.id} className={Student_varification_list_css.child}>
         {value.In  && <S_v_listitem details={value} />}
        </div>  
          )
        )
      }  
</div>
</div>

</>
    );
}