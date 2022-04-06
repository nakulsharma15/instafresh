import "./Styles/Card.css";
import { useUserDetail } from "../Context/UserDetailContext";
import { Link } from "react-router-dom";

export default function Card({ Item }) {

    const { userDetail, setUserDetail } = useUserDetail();

    const { wishlist, cart } = userDetail;

    const addToWishlistHandler = (Item) => {
        const findProductInWishlist = wishlist.find((item) => item._id === Item._id);

        if (findProductInWishlist) {
            const updatedWishlist = wishlist.filter((item) => item._id !== Item._id);
            setUserDetail({ ...userDetail, wishlist: updatedWishlist });
        }

        else {
            setUserDetail({ ...userDetail, wishlist: [...wishlist, Item] })
        }
    }

    const addToCartHandler = (Item) => {
        setUserDetail({ ...userDetail, cart: [...cart, { ...Item, count: 1 }] });
    }


    return (
        <>
            <div className="instafresh-card card card-with-badge card-with-text-overlay">

                <div className="card-img flex-justify-center">
                    <img className="card-img flex-justify-center" src={Item.imageUrl} alt="Product" />
                </div>

                <div className="card-title item-price-detail">
                    <h3>{Item.name}</h3>
                    <p>₹{Item.price}  {!(Item.discount === 0) ? <s className="text-s">₹{Item.prevPrice}</s> : null}</p>
                </div>

                <div className="discount-badge">
                    {!(Item.discount === 0) ? <div className="discount special-badge text-overlay">{Item.discount}% off</div> : null}
                </div>

                <div className="card-info flex-sb-c">
                    {Item.quantity}
                    <div className="badge-rating text-m product-rating">
                        <i className="fas fa-star"></i>
                        {Item.rating}
                    </div>
                </div>

                <div className="card-footer">
                    {(cart.find((item) => item._id === Item._id)) ?
                        <Link to="/cart"><button className="add-to-cart-btn btn icon-btn"> Go to Cart</button></Link> :
                        <button className="add-to-cart-btn btn icon-btn" onClick={() => addToCartHandler(Item)}> Add to Cart</button>
                    }

                    <button className="card-icon" onClick={() => addToWishlistHandler(Item)}> {(wishlist.find((item) => item._id === Item._id)) ?
                        <i className="fas fa-heart"></i> :
                        <i className="far fa-heart"></i>} </button>
                </div>

            </div>

        </>)
}