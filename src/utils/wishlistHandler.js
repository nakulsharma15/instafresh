import toast from "react-hot-toast";
import axios from "axios";

const addToWishlist = async (product, dispatchUser) => {
    try {
        const res = await axios.post(
            "/api/user/wishlist",
            { product: product },
            {
                headers: {
                    authorization: localStorage.getItem("Token"),
                },
            }
        );
        if (res.status === 200 || res.status === 201) {
            const { wishlist } = res.data;
            dispatchUser({ type: "UPDATE_WISHLIST", payload: wishlist })
            toast.success("Added to Wishlist");
        }
    } catch (err) {
        toast.error("Something went wrong, Please try again");
        console.log("Error:", err);
    }
};

const removeFromWishlist = async (product, dispatchUser) => {
    try {
        const res = await axios.delete(`/api/user/wishlist/${product._id}`, {
            headers: {
                authorization: localStorage.getItem("Token"),
            },
        });
        if (res.status === 200 || res.status === 201) {
            const { wishlist } = res.data;
            dispatchUser({ type: "UPDATE_WISHLIST", payload: wishlist })
            toast.success("Removed from Wishlist");
        }
    } catch (err) {
        toast.error("Something went wrong, Please try again");
        console.log("Error:", err);
    }
};

export { addToWishlist, removeFromWishlist };