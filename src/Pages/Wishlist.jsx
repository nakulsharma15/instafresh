import { Header, Footer, WishlistCard } from "../Components/index.js";
import { useUserDetail } from "../Context/UserDetailContext";
import { Link } from "react-router-dom";

import "../App.css";

export default function Wishlist() {

    const { userDetail } = useUserDetail();
    const { wishlist } = userDetail;

    return (<div className="flex-column stick-bottom">
        <Header />

        <h1 className="center-heading-text">My Wishlist</h1>

        {(wishlist.length === 0) ? <div>

            <h2>You don't have any items in your wishlist</h2><button className="redirect-button"><Link to="/productlisting">start shopping</Link></button></div> :

            <div className="products wishlist-products flex-sp-ev">{wishlist.map((Item) => <div key={Item._id}><WishlistCard Item={Item} /></div>)}</div>}

        <Footer />

    </div>)
}