import { useUserDetail } from "../Context/UserDetailContext";
import "./Styles/CartCard.css";

export default function CartCard({ Item }) {

    const {userDetail , setUserDetail } = useUserDetail();

    const {cart , wishlist} = userDetail;

    const decreaseCount = (Item) => {
        if(Item.count === 1) {
            const updatedCart = cart.filter((item) => item._id !== Item._id);
            setUserDetail({...userDetail , cart: updatedCart});
        }

        else {
           const updatedCart = cart.map((item) => (item._id === Item._id) ? {...item , count: item.count - 1} : item);
           setUserDetail({...userDetail , cart: updatedCart})
        }
    }

    const increaseCount = (Item) => {
        const updatedCart = cart.map((item) => (item._id === Item._id) ? {...item , count: item.count + 1} : item);
           setUserDetail({...userDetail , cart: updatedCart})
    }

    const removeFromCartHandler = (Item) => {
        const updatedCart = cart.filter((item) => item._id !== Item._id)

        setUserDetail({...userDetail , cart:updatedCart});
    }

    const moveToWishlistHandler = (Item) => {

        const updatedCart = cart.filter((item) => item._id !== Item._id);

        const findProductInWishlist = wishlist.find((item) => item._id === Item._id);

        (findProductInWishlist) ? setUserDetail({...userDetail , cart: updatedCart}) : setUserDetail({...userDetail , wishlist: [...wishlist , Item] , cart: updatedCart})
    }


    return (<>
        <div className="card horizontal-card cart-horz-card  card-with-badge">
            <div className="h-card-header">
                <div className="h-card-img">
                    <img className="h-card-img" src={Item.imageUrl} alt="Product" />
                </div>
                <div className="card-title">
                    <h3 className="text-l">{Item.name} </h3>
                    <div className="product-info">
                        <p>₹{Item.price}  {!(Item.discount === 0) ? <s className="text-s">₹{Item.prevPrice}</s> : <s></s>}<span className="item-qty">({Item.quantity})</span></p>
                    </div>

                    <div className="cart-product-info flex-sb">
                        <div className="text-m product-rating">
                            <i className="fas fa-star"></i>
                            {Item.rating}
                        </div>

                        <div className="product-qty">
                            <p><button onClick={() => decreaseCount(Item)}>-</button><span>{Item.count}</span><button onClick={() => increaseCount(Item)}>+</button></p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="card-footer">
                <button class="btn icon-btn remove-from-cart-btn text-m" onClick={() => removeFromCartHandler(Item)}>Remove From Cart</button>
                <button class="cart-btn btn icon-btn outline-secondary-btn" onClick={() => moveToWishlistHandler(Item)}>Move to Wishlist</button>
            </div>
        </div>

    </>)
}