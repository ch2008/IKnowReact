

const Form=()=>{
return(
    <>
   <div className="form">
    <p className="cross" onClick={()=>{
         const form=document.querySelector(".form");
         form.style.display="none";
    }}
    >X</p>
   <div>

   <p> number of people</p>
    <input type="text" name="name" />
    </div>
    <div>
    <p> find a date</p>
    <input type="date"  />

   </div>

   <div className="findTable">
    <h3>
        Find a table
    </h3>
  

   
   </div>
   <p>
   This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
   </p>
   </div>
    </>
)
}

export default Form ;