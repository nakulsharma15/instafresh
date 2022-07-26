import "../App.css";
import { Header, Footer, WishlistCard } from "../Components/index.js";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext.js";


export default function Wishlist() {

    const { userDetails } = useAuth();
    const { wishList } = userDetails;

    return (<div className="flex-column stick-bottom">
        <Header />

        <h1 className="center-heading-text">My Wishlist</h1>

        {(wishList.length === 0) ? <div className="flex-center flex-column">
            <h2>You don't have any items in your wishlist</h2><button className="redirect-button"><Link to="/productlisting">start shopping</Link></button></div> :

            <div className="products wishlist-products flex-sp-ev">{wishList.map((Item) => <div key={Item._id}><WishlistCard Item={Item} /></div>)}</div>}

        <Footer />

    </div>)
}