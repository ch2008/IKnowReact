import React from "react";
import ReactDOM from "react-dom/client";

const Root=ReactDOM.createRoot(document.getElementById("root"));
  



const Button=()=>{
    return(
        <>
    <div className="btn">
        <h4> click me</h4>
    </div>
    </>
    )
}

 const Hello=()=>{
   return(
    <>
    <div className="navigation">
     <div>
      <h1>
         React
      </h1>
     </div>
     <Button/>
     <Button/>
     <Button/>
     <Button/>
     <Button/>
     <Button/>
  </div>

   
 </>
   )
 }
 
 


  Root.render(<Hello/>)