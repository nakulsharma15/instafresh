import toast from "react-hot-toast";
import axios from "axios";

const addToCart = async (product, dispatchUser) => {
    try {
        const res = await axios.post(
            "/api/user/cart",
            { product: product },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        if (res.status === 200 || res.status === 201) {
            const { cart } = res.data;
            dispatchUser({ type: "UPDATE_CART", payload: cart })
            toast.success("Added to Cart" );
        }
    } catch (err) {
        toast.error("Something went wrong, Please try again");
        console.log("Error:", err);
    }
};

const removeFromCart = async (product, dispatchUser) => {

    try {
        const res = await axios.delete(`/api/user/cart/${product._id}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { cart } = res.data;
            dispatchUser({ type: "UPDATE_CART", payload: cart })
            toast.success("Removed from Cart" );
        }
    } catch (err) {
        toast.error( "Something went wrong, Please try again");
        console.log("Error:", err);
    }

};

const removeFromCartAfterPayment = async (product, dispatchUser) => {

    try {
        const res = await axios.delete(`/api/user/cart/${product._id}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { cart } = res.data;
            dispatchUser({ type: "UPDATE_CART", payload: cart })
        }
    } catch (err) {
        toast.error( "Something went wrong, Please try again");
        console.log("Error:", err);
    }

};

const handleIncrementDecrement = async (product, dispatchUser, type) => {
    try {
        const res = await axios.post(`/api/user/cart/${product._id}`,
            {
                action: {
                    type: type
                }
            }
            , {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            });
        if (res.status === 200 || res.status === 201) {
            const { cart } = res.data;
            dispatchUser({ type: "UPDATE_CART", payload: cart })
            toast.success("Cart Updated");
        }
    } catch (err) {
        console.log("Error:", err);
        toast.error( "Something went wrong, Please try again");
    }
}

export { addToCart, removeFromCart, removeFromCartAfterPayment, handleIncrementDecrement };