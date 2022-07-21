import { Route, Routes } from "react-router-dom";
import { Home, Login, ProductListing, Signup,Wishlist,Cart,MockMan,NoMatch } from "../Pages/index";
import RequireAuth from "../utils/requiresAuth";

function RoutePaths () {

    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="/mock" element={<MockMan />} />
        <Route path="*" element={<NoMatch />}/>
        </Routes>
    )
}
export default RoutePaths;

