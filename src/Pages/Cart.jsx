import { Link } from "react-router-dom";
import { Header , CartCard , BillDetail , Footer } from "../Components/index.js";
import { useAuth } from "../Context/AuthContext.js";

export default function Cart() {

    const { userDetails } = useAuth();

    const { cartList } = userDetails;


    return (<div className="flex-column stick-bottom">
        <Header /> 
        <h1 style={{textAlign:"center", margin:"1rem"}}>My Cart</h1>
        
        {(cartList?.length === 0) ? <div className="flex-center flex-column"><h2>You don't have any items in your cart</h2><button className="redirect-button"><Link to="/productlisting">start shopping</Link></button></div> : 
        <div className="flex-sp-ev" style={{flexWrap:"wrap"}}>
            <div >
            {cartList?.map((Item) => <div key={Item._id}><CartCard product={Item}/></div> )} 
            </div>
            
            <BillDetail />
        </div>}
        
        <Footer />
    </div>)
}

