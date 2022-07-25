import "./Styles/BillDetail.css";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function BillDetail() {

    const { userDetails, dispatchUser } = useAuth();

    const navigate = useNavigate();

    const { cartList } = userDetails;

    const originalPriceList = cartList.map((item) => (item.prevPrice === 0) ? { ...item, prevPrice: item.price } : item);

    const originalPrice = originalPriceList.reduce((acc, curr) => { return acc + curr.qty * curr.prevPrice }, 0);

    const mrp = cartList.reduce((acc, curr) => { return acc + curr.qty * curr.price }, 0);

    const billTotal = mrp + 9;

    const placeOrderHandler = () => {

        dispatchUser({ type: "UPDATE_CART", payload: [] });
        toast('Congratulations! Your order has been placed.',
            {
                icon: '🥳'
            }
        );
        navigate("/");
    }

    return (
        <div>
            <div className="price-detail box-shadow">

                <h2>Bill Details</h2>

                <div className="price-detail-section flex-sb">
                    <p>MRP:</p>
                    <p>₹{mrp}/-</p>
                </div>

                {(originalPrice - mrp !== 0) ? <div className="price-detail-section flex-sb discount">
                    <p>Product Discount</p>
                    <p>- ₹{originalPrice - mrp}/-</p>
                </div> : null}


                <div className="price-detail-section flex-sb">
                    <p>Packaging Charges</p>
                    <p className="packaging-charge">free</p>
                </div>

                <div className="price-detail-section flex-sb">
                    <p>Delivery Charges</p>
                    <p><s className="striked-price">₹25</s>₹9</p>
                </div>

                <div className="price-detail-section flex-sb bill-total">
                    <strong>Bill Total</strong>
                    <strong>₹{billTotal}/-</strong>
                </div>

                <div className="content-center">
                    <button className="buy-btn btn primary-btn icon-btn order-btn" onClick={placeOrderHandler}> Place Order</button>
                </div>
            </div>

        </div>);
}

