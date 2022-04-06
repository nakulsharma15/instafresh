import "./Styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <>
        <nav>
            <div className="nav-am flex-center-sb">
                <Link className="logo" to="/"><h1 className="text-xl">Insta<span style={{color:"var(--insta-yellow)"}}>Fresh</span></h1></Link>    
                    

                <h3 className="delivery-time">delivery in 9 minutes</h3>

                <div className="search_bm">
                    <input style={{borderColor: "black"}} className="text-m search-bar" placeholder="Search" type="search" />
                    <i className="search-icon fas fa-search"></i>
                </div>

               

                <div style={{color: "black"}} className="ecom-icon flex-align-center">

                    <div className="links text-m">
                        <Link to="/login" style={{color:"black"}} className="log-btn">Login</Link>
                    </div>

                    <Link to="/cart" className="text-m cart-btn" >Cart | <span>5</span></Link>

                    <Link to="/wishlist" className="text-m wishlist-btn"> Wishlist | <span>6</span></Link>
                   
                </div>
            </div>      
            

            <div className="search_am">
                <input className="text-m search-bar" placeholder="Search" type="search" />
                <i className="search-icon fas fa-search"></i>
            </div>

        </nav>
           
        </>
    )
}