
const Menu = () => {
    const Menus=["Breakfast"," Lunch","dinner"," Afterdinner tea"];

    let imageUrl = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2R8ZW58MHx8MHx8fDA%3D'


    return (
        <>
            <div className="menu" >
                <div className="close" onClick={()=>{
                    const closed=document.querySelector(".menu");
                     closed.style.display = "none";
                }}>
                <h4>close</h4>
                </div>
            

                <div className="MenuImage">
                    <img src={imageUrl} alt="food image" />
                </div>
                <div className="menuList">
                    <ul>
                     <li>BREAKFAST</li>
                     <li>LUNCH</li>
                     <li>DINNER</li>
                     <li>AFTER DINNER TEA</li>
                </ul>
                </div>


            </div>

        </>
    )

}
export default Menu