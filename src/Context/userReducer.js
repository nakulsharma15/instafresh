const userReducer = (state, { type, payload }) => {
    switch (type) {
        case "LOGIN_USER":
            const { firstName, cart, wishlist } = payload
            return {
                ...state,
                firstName: firstName,
                cartList: cart,
                wishList: wishlist
            }
        case "LOGOUT_USER":
            return {
                isLoggedIn: false,
                firstName: "",
                cartList: [],
                wishList: []
            }
        case "UPDATE_CART":
            return { ...state, cartList: payload }
        case "UPDATE_WISHLIST":
            return { ...state, wishList: payload }
        default:
            break;
    }
}

export default userReducer