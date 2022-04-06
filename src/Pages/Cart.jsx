import { Link } from "react-router-dom";
import { Header , CartCard , BillDetail , Footer } from "../Components/index.js";
import { useUserDetail } from "../Context/UserDetailContext";

export default function Cart() {

    const { userDetail } = useUserDetail();

    const { cart } = userDetail;


    return (<div style={{display:"flex", flexDirection: "column", minHeight: "100vh"}}>
        <Header /> 
        <h1 style={{textAlign:"center", margin:"1rem"}}>My Cart</h1>
        
        {(cart.length === 0) ? <div><h2>You don't have any items in your cart</h2><button className="redirect-button"><Link to="/productlisting">start shopping</Link></button></div> : 
        <div className="flex-sp-ev" style={{flexWrap:"wrap"}}>
            <div >
            {cart.map((Item) => <CartCard Item={Item}/>)} 
            </div>
            
            <BillDetail />
        </div>}
        
        <Footer />
    </div>)
}

