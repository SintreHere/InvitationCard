'use client'

import React, { useState } from 'react'
import NameTitle from './NameTitle';
function popup (){
  var display = 0;
  const[child,setchild] = useState(false);

  const [show,setShow] = useState(true);

  const check = () =>{
    setchild(true);
    setShow(!show)
    if(display == 1)
    {
      document.getElementById("box").style.display = 'block';
      display = 0
    }
    else
    {
      document.getElementById("box").style.display = "none";
    }
   
  };

    const[name,setName] = useState("");
    const nameChangeHandler = (e) => {
        setName(e.target.value)
        
     };



     
    

   
  return (
    
<div>
  {(child) && <NameTitle name = {name} />}
    <div className='w-100 h-100 justify-center items-center align-middle' id="box">
  
      <div className=' w-50 h-50 0 bg-transparent font-mono px-2 py-2 auto-rows-auto auto-cols-auto '>
        
      <input type="text" placeholder='Enter your Name' className='bg-transparent border-orange-300 items-center justify-center text-center placeholder:text-white' onChange={nameChangeHandler} value={name}/> 
  
      </div >
      <div className='pt-3'>
      <button className=' border-gray-100 items-center py-2 px-2 text-center font-kabel text-slate-100 justify-center bg-slate-600 rounded-md w-auto h-auto hover:bg-blue-400 hover:text-white-200' onClick={check}> Submit</button>
      </div>
     
        
       
    </div>
    </div>
    
  )
}

export default popup
