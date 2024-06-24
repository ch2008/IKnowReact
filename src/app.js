import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Components/Navigation";

const Root=ReactDOM.createRoot(document.getElementById("root"));
  



const Starts=()=>{
return(
    <>
    <div>
      <Navigation></Navigation>
    </div>
    </>
)


}
Root.render(Starts)