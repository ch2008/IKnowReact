import {Reservation} from "./Reservation";
// named import 
const Navigation =()=>{
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <h2> The khana</h2>
                 <p> the country road <br/>
                     coimbatire,
                     Tamilnadu-641298
                  </p>

                <div className="reservation">
                < Reservation  value="RESERVATION"/>
                </div>
            </div>
            <div className="ListInfo">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>GALARY</li>
                    <li>MENU</li>
                    <li>ORDER-ONLINE</li>
                    <li>CONTACT</li>

                </ul>

            </div>
            <div className="reservation">
                < Reservation  value="EMAIL-SIGN UP" ></Reservation>
                </div>

        </div>
        </>
    )

}

export default Navigation ;