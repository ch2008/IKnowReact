



const Form = () => {
    
    return (
        <>
            <div className="form">

            <div>
                
            <p className="cross" onClick={() => {
                    const form = document.querySelector(".form");
                    form.style.display = "none";
                }}
                >X</p>
            </div>


                <div>

                    <p> number of people</p>
                    <input type="text" name="name" />
                   
                </div>
                <div>
                    <p> find a date</p>
                    <input type="date" />

                </div>

                <div className="findTable" onClick={()=>{
                       const input=document.getElementsByTagName("input")
                     if (input.value=="") {
                     
                        alert("plese don't leave any box emptyss")
                        
                     } else {
                        
                     }
                }}>
                    <h3>
                        Find a table
                    </h3>



                </div>
                <p>
                    Terms of Service apply.
                </p>
            </div>
        </>
    )
}

export default Form;