import App from "../App";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components";



function NavHome() {
  

  return (
    <div >

      
      <nav  style={{display:"flex", alignItems:"center",justifyContent:"space-between",padding:"19px"}}>
        
        <div style={{display:"flex",justifyContent:"space-between", marginLeft:"1000px"}}>
          <button style={{padding:"10px 25PX",margin:"0 10px",cursor:"pointer",backgroundColor:"#022B3A" ,borderColor:"#FFFFFF" , color:"#FFFFFF",fontFamily:" Arial, Helvetica, sans-serif",fontSize:"15px",borderStyle:"solid", fontWeight:"bold", borderRadius:"50px", color:"white"}}>Sign up</button>
          <button style={{padding:"10px 25PX",cursor:"pointer",backgroundColor:"#1F7A8C",borderColor:"#FFFFFF",color:"black",fontFamily:" Arial, Helvetica, sans-serif",fontSize:"15px" ,borderStyle:"solid", fontWeight:"bold", borderRadius:"50px"}}>Sign in</button>
        </div>
      </nav>
    </div>
  );
}

export default NavHome;