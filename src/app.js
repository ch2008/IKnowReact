import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Components/Navigation.js";
import Form from "./Components/Form";
import Menu from "./Components/Menu.js";
import Body from "./Components/Body.js";

const Root=ReactDOM.createRoot(document.getElementById("root"));
  



const Start =()=>{
 return(
 <>
 <div className="main">
   <Body/> 

    <div>
      <Navigation/>
     
     </div>
     
 <div>
    <Menu/>
    </div>
    
     
    <div>
    <Form/>
    </div>

    </div>
    
    </>
   
)


}
Root.render(<Start/>)