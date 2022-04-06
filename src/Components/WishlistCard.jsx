import { useUserDetail } from "../Context/UserDetailContext";
import "./Styles/WishlistCard.css";

export default function WishlistCard({ Item }) {

    const { userDetail, setUserDetail } = useUserDetail();

    const { wishlist , cart } = userDetail;

    const removeHandler = (id) => {

        const updatedWishlist = wishlist.filter((item) => item._id !== id);
        setUserDetail({ ...userDetail, wishlist: updatedWishlist });
    }

    const moveToCartHandler = (Item) => {
        const updatedWishlist = wishlist.filter((item) => item._id !== Item._id);

        const findProductInCart = cart.find((item) => item._id === Item._id);

        (findProductInCart) ? setUserDetail({ ...userDetail, wishlist: updatedWishlist}) : setUserDetail({ ...userDetail, wishlist: updatedWishlist , cart:[...cart , {...Item , count:1}]});
    }

    return (
        <>
            <div class="instafresh-card card card-with-badge card-with-text-overlay card-with-dismiss">
                <div class="card-img flex-justify-center">
                    <img class="card-img flex-justify-center" src={Item.imageUrl} alt="Product" />
                </div>
                <div class="card-title item-price-detail">
                    <h3>{Item.name}</h3>
                    <p>₹{Item.price}  {!(Item.discount === 0) ? <s class="text-s">₹{Item.prevPrice}</s> : null}</p>
                </div>

                <div className="discount-badge">
                    {!(Item.discount === 0) ? <div class="discount special-badge text-overlay">{Item.discount}% off</div> : null}
                </div>

                <i onClick={() => removeHandler(Item._id)} class="text-overlay dismiss-icon far fa-times-circle delete-icon" ></i>


                <div class="card-info flex-sb-c">
                    {Item.quantity}
                    <div class="badge-rating text-m product-rating">
                        <i class="fas fa-star"></i>
                        {Item.rating}
                    </div>
                </div>

                <div class="card-footer">
                    <button class="add-to-cart-btn btn icon-btn" onClick={() => moveToCartHandler(Item)}> Move to Cart</button>
                </div>
            </div>
        </>
    );
}