import "./Styles/Banner.css";
import {Link} from "react-router-dom";

export default function Banner() {

    return (
        <>
            <div className="banner">
                <div className="banner-text">
                    <div>
                        <h1 >Welcome to <span style={{ color: "var(--green-500)" }}>Insta</span><span style={{ color: "var(--insta-yellow)" }}>Fresh</span></h1>
                    </div>

                    <div className="banner-offer">
                        <h1>get 50% off on your first order.</h1>
                    </div>
                    <div>
                        <Link to="/productlisting"><button className="banner-btn">shop now</button></Link>
                    </div>
                </div>

                <div className="banner-image">
                    <img className="" src="https://res.cloudinary.com/nakulsharma15/image/upload/v1648229016/Banner%20Images/R-removebg-preview_s9llxu.png" alt="groceries" />
                </div>
     
            </div>

        </>
    )
}