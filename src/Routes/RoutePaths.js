import { Route, Routes } from "react-router-dom";
import { Home, Login, ProductListing, Signup,Wishlist,Cart,MockMan,NoMatch } from "../Pages/index";

function RoutePaths () {

    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="*" element={<NoMatch />}/>
        </Routes>
    )
}
export default RoutePaths;

