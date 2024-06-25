import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Components/Navigation.js";
import Form from "./Components/Form";

const Root=ReactDOM.createRoot(document.getElementById("root"));
  



const Start =()=>{
 return(
    <>
    <div>
        
      <Navigation/>
      <Form/>
    </div>
    </>
)


}
Root.render(<Start/>)