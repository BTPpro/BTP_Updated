import React from 'react'
import student from './studentanalys.module.css'
const studentanalys = () => {
    document.body.style.backgroundColor = "#F7F9FB"
  return (
    <div className={student.main}>
     
        <div className={student.div1}>
        <span className={student.heading}>Our Analysis shows that you are looking for <span style={{color:'#0077B5'}}>Data Science Jobs</span></span> 
            <div className={student.div1p1}>Recommended skills for you</div>
            <div className={student.div1p2}>Recommended courses and certifications
            <div  className={student.div1p21} >Course Links</div>
            </div>
            
        </div>
        <div className={student.div2}>
             <div className={student.div2p1}>Some pie chart analysis
             <div className={student.div2p11}>PIE CHART ANALYSIS</div>
             </div>
            
            <div className={student.div2p2}>Some bar graph analysis
            <div className={student.div2p12}>BAR GRAPH ANALYSIS</div>
             
            </div>
        </div>
      
    </div>
  )
}

export default studentanalys
