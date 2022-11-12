import React from 'react'
import r from './Rc.module.css'
import Modal from "./Modal";

import {useState} from 'react';

const Rc = () => {

  const [message, setMessage] = useState('');
  const[head,sethead]= useState('Generate');
  const [modalOpen, setModalOpen] = useState(false);
  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
  if(head==="Generate"){
    setMessage('');
    sethead('View Credentials')}
    else if(head==='View Credentials'){

      setModalOpen(true);
      sethead('Generate')
    }


  };
 

  return (
   
   
  
    
    <div className={r.main}>
       {modalOpen && <Modal setOpenModal={setModalOpen} />}
      
        <p className={r.head}>Welcome Admin
        <p className={r.red}>Please generate credentials for the recruiting company</p>
        </p>
        
        < div className={r.div1}>
           
            <p className={r.head1}>  Company Name*   <input className={r.input}  id="message"
        name="message"
        type="text"
        onChange={handleChange}
        value={message} required /></p> 
           
           
            
            <button onClick={handleClick} className={r.button} >{head}</button>

        </div>
        

      

      
    </div> 
    
  )
}

export default Rc
