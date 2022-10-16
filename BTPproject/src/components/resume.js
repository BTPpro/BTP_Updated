import React from 'react'
import resume1 from './assets/resume1.png'
const resume = () => {
  return (
    <div style={{height:'100%',width:'100%'}}>
    <div style={{fontSize:'9px',display:'flex',flexDirection:"row"}}>
    <div style={{borderRadius:'.5em', marginTop:'100px',height:'19em',background:' #FCFDFD',font:'Montserrat',justifyContent:'center',alignItems:'center', marginLeft:'7em',padding:'1.5em',width:'90em'}}>
      <p style={{font:'Montserrat',fontSize:'2em'}}>UPLOAD RESUME</p>
      <div style={{background:'white',padding:'2em',display:'flex' , flexDirection:'row'}}>
        <button style={{background:'white',border:'none'}}><img src={resume1} alt="" /></button>
        <span><p style={{font:'Montserrat',fontSize:'1.5em'}}><b>Drag and Drop your files here</b>
            </p>
        <p style={{font:'Montserrat',fontSize:'1em'}}>Limit 200mb per file *PDF </p>
        </span>
        <div style={{marginLeft:'50em',marginTop:'2em'}}>
        <button style={{color:'white',fontSize:'1em',background:'#0077B5',height:'3em',border:'none',borderRadius:'0.5em',}}>BROWSE</button>
        </div >

      </div>
    </div>
    <div  style={{ borderRadius:'.5em',marginTop:'11em',height:'25em',width:'24em',background:' #FCFDFD',font:'Montserrat', marginLeft:'5em',padding:'1em'}}>
    <p style={{fontFamily:'Montserrat',fontSize:'1.4em'}}>SAVED RESUMES</p>
    <div style={{display:'flex',flexDirection:'column',padding:'10px',gap:'1.5em'}}>
        <div style={{ background:'#E9F0F8',width:'23em',height: '5em',orderradius: '.4em'}}><span style={{padding:'2em',fontSize:'1.4em'}}>Resume Final Draft</span></div>
        <div style={{ background:'#E9F0F8',width:'23em',height: '5em',orderradius: '.4em'}}><span style={{padding:'2em',fontSize:'1.4em'}}>Resume Seconnd Draft</span></div>
        <div style={{ background:'#E9F0F8',width:'23em',height: '5em',orderradius: '.4em'}}><span style={{padding:'2em',fontSize:'1.4em'}}>Resume First Draft</span></div>
    </div>

    </div>
    </div>
    <div style={{marginTop:'5em',display:'flex',width:'600px',justifyContent:'space-between',paddingLeft:'15em'}}>
    <button   style={{height:'2em',width:'10em',borderRadius:'6px',border:'1px solid #D1F2FF'}}>PREVIEW</button>
    <button style={{height:'2em',width:'10em',borderRadius:'6px',border:'1px solid #D1F2FF'}}>UPLOAD</button>
    <button style={{height:'2em',width:'10em',borderRadius:'6px',border:'1px solid #D1F2FF'}}>ANALYZE</button>
    </div>
    </div>
    
    
  )
}

export default resume
