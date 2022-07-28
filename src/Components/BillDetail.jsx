import "./Styles/BillDetail.css";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { removeFromCartAfterPayment } from "../utils/cartHandler";

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

    const loadScript = async (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
          document.body.appendChild(script);
        });
      };

    const handlePayment = async () => {

        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          toast.error("Failed to initiate payment, please try again.");
        }
    
        const options = {
          key: process.env.REACT_APP_RZP_KEY_ID,
          amount: billTotal * 100,
          currency: "INR",
          name: "Instafresh",
          description: "Payment for your order",
          handler: function (response) {
            const order = {
              paymentId: response?.razorpay_payment_id,
            };
            cartList?.map((product) => removeFromCartAfterPayment(product, dispatchUser));
            toast.success(`🥳 Congratulations, Your order has been successfully placed!`);
            navigate("/");
          },
          prefill: {
            name: "Nakul Sharma",
            email: "nakul.sharma@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#0C1D9D",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };

    return (
        <div>
            <div className="price-detail box-shadow">

                <h2>Bill Details</h2>

                <div className="price-detail-section flex-sb">
                    <p>MRP:</p>
                    <p>₹{mrp}/-</p>
                </div>

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
                    <button className="buy-btn btn primary-btn icon-btn order-btn" onClick={handlePayment}> Place Order</button>
                </div>
            </div>

        </div>);
}

