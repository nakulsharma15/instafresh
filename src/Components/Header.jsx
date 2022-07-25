import "./Styles/Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import toast from "react-hot-toast";

export default function Header() {

    const { userDetails } = useAuth();
    const { wishList, cartList } = userDetails;
    const { isLoggedIn, logoutHandler } = useAuth();

    const token = localStorage.getItem("Token");

    const navigateHandler = () => {

        return isLoggedIn ? null :  toast('You need to login to continue!',
        {
          icon: '⚠️',
        }
      ) ;
    }

    return (
        <>
            <nav>
                <div className="nav-am flex-center-sb">

                    <div className="flex-sp-ev flex-align-center header-logo-div">

                        <Link className="logo" to="/"><h1 className="text-xl">Insta<span style={{ color: "var(--insta-yellow)" }}>Fresh</span></h1></Link>


                        <h3 className="delivery-time">delivery in 9 minutes</h3>
                    </div>


                    <div style={{ color: "black" }} className="ecom-icon flex-align-center">

                        <div className="links text-m">

                            {isLoggedIn ? <div onClick={() => logoutHandler()} style={{ color: "black" }} className="log-btn"> Logout</div> : <Link to="/login" style={{ color: "black" }} className="log-btn">Login</Link>}


                        </div>

                        <Link to="/cart" className="text-m cart-btn" onClick={navigateHandler}>Cart | <span>{cartList?.length}</span></Link>

                        <Link to="/wishlist" className="text-m wishlist-btn" onClick={navigateHandler}> Wishlist | <span>{wishList?.length}</span></Link>

                    </div>
                </div>

            </nav>

        </>
    )
}