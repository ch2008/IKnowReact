 import Form from "./Form";
//  const style={
//   display:block
//  }
 //  this is how we write named export
export const Reservation=(props)=>{
    
    return(
        <>
        <div  >
          <Form/>
          <h3>
           { props.value}
          </h3>
        </div>
        </>
    )

}
 