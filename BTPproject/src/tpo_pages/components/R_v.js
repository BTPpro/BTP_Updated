import React from "react";
import R_vcss from "./R_v.module.css"
import U_Data from "./R_v_unvarified.data"
import V_Data from "./R_v_varified_data"
import R_v_listitem from "./R_v_listitem"
export default function R_v() {
    return (
<>
<div className ={R_vcss.list_heading}>
    <p  className ={R_vcss.list_1}>#</p>
    <p  className ={R_vcss.list_2}>Company Id</p>
    <p  className ={R_vcss.list_3}>Company Name</p>
    <p  className ={R_vcss.list_4}>View</p>
</div>
<div >

{
        V_Data.map((value)=>(
        <div key= {value.id} className={ R_vcss.child}>
          
          <R_v_listitem details={value} />
          
        </div>  
          )
        )
      }  
{/* {
        U_Data.map((value)=>(
        <div key= {value.id} className={ R_vcss.child}>
          <R_v_listitem details={value} />
        </div>  
          )
        )
      }   */}
</div>

</>
    );
}