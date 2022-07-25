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
            toast.success("Added to Cart" );
            dispatchUser({ type: "UPDATE_CART", payload: cart })
        }
    } catch (err) {
        console.log("Something bad happened", err);
        toast.error("Couldn't complete request");
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
            toast.success("Removed from Cart" );
            dispatchUser({ type: "UPDATE_CART", payload: cart })
        }
    } catch (err) {
        console.log("oops something bad happened", err);
        toast.error( "Couldn't complete request");
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
            toast.success("Cart Updated");
            dispatchUser({ type: "UPDATE_CART", payload: cart })
        }
    } catch (err) {
        console.log("oops something bad happened", err);
        toast.error( "Couldn't complete request");
    }
}

export { addToCart, removeFromCart, handleIncrementDecrement };