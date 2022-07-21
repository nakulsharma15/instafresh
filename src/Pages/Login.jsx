import { Header , Footer} from "../Components/index.js";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {

    const loginHandler = () => {
        return toast.success("hi");
    }

    return (<div className="flex-column stick-bottom">

        <Header />

        <div className="container flex-center-column">

            <h2 className="text-xl login-header">Login</h2>
            <div className="login-form flex-center-column box-shadow">

                <div className="flex-column">
                    <label htmlFor="email">Email:</label>
                    <input className="login-input" type="text" id="email" required/>
                </div>
                <div className="flex-column">
                    <label htmlFor="password">Password:</label>
                    <input className="login-input" type="password" id="password" required/>
                </div>
                <div>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="confirm">Remember me</label>

                    <span className="signup">Don't have an account?, <Link className="signup-link" to="/signup">Signup</Link></span>
                </div>

                <Link to="/"><button className="btn primary-btn" type="submit" onClick={loginHandler}>Login</button></Link>

            </div>

        </div>

        <Footer />
    </div>)
}