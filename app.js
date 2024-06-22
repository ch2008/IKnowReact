import React from "react";
import ReactDOM from "react-dom/client";

const Root=ReactDOM.createRoot(document.getElementById("root"));

const hello=()=>{
    return(
        
        <div>
        <h1> hello from react </h1>
        </div>
        
    )
}
 


Root.render(hello)