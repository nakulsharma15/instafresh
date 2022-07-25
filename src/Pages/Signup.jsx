import { Link } from "react-router-dom";
import { Header , Footer } from "../Components/index.js";

export default function Signup() {

    return (<div className="flex-column stick-bottom">
        <Header />
        <div className="container flex-center-column">

            <h2 className="text-xl">Sign up</h2>
            <div className="signup-form flex-center-column">
                <div className="flex-column">
                    <label htmlFor="name">Full Name:</label>
                    <input className="signup-input" type="text" id="name" />
                </div>

                <div className="flex-column">
                    <label htmlFor="email">Email:</label>
                    <input className="signup-input" type="text" id="email" />
                </div>

                <div className="flex-column">
                    <label htmlFor="password">Password:</label>
                    <input className="signup-input" type="password" id="password" />
                </div>

                <div className="flex-column">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input className="signup-input" type="password" id="confirm-password" />
                </div>

                <Link to="/"><button className="btn primary-btn">Sign up</button></Link>
            </div>

        </div>
        <Footer />
    </div>)
}