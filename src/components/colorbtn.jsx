import React, { useState } from "react";

const colorbtn = ({colorname }) => {
   
  return (
    <button
      className="colorbtn"
           
      onClick={(e) => {
          
        let rn= Math.round(Math.random()*8);
    rn = rn+'0%';
    console.log(rn);
        if(rn>'1% ' &&  rn<'70%'){
            e.target.parentNode.style.top=rn;
        }
        e.target.parentNode.parentNode.style.background=colorname;
        e.target.parentNode.parentNode.parentNode.style.background=colorname;
      }}
    >
      {colorname}
    </button>
  );
};

export default colorbtn;
