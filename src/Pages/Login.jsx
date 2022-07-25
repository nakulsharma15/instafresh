import { Header, Footer } from "../Components/index.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext.js";
import axios from "axios";

export default function Login() {

  const testCredentials = {
    email: "nakulsharma@gmail.com",
    password: "Nakul@123",
  }

  const navigate = useNavigate();
  const location = useLocation();

  const { dispatchUser, userDetails, setIsLoggedIn } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      if (response.status === 200 || response.status === 201) {
        setIsLoggedIn(true);
        const { data } = response;
        const { foundUser } = data;
        dispatchUser({ type: "LOGIN_USER", payload: foundUser })
        localStorage.setItem("Token", data.encodedToken)
        navigate(location.state?.from?.pathname === undefined ? "/" : location.state?.from?.pathname, { replace: true });
      }
      else {
        if (response.status === 404)
          console.log("Error 404");
      }
    } catch (error) {
      console.log("We couldn't sign you in", error);
    }
  }

  return (<div className="flex-column stick-bottom">

    <Header />

    <div className="container flex-center-column">

      <h2 className="text-xl login-header">Login</h2>
      <div className="login-form flex-center-column box-shadow">

        <div className="flex-column">
          <label htmlFor="email">Email:</label>
          <input className="login-input" type="text" id="email" required />
        </div>

        <div className="flex-column">
          <label htmlFor="password">Password:</label>
          <input className="login-input" type="password" id="password" required />
        </div>

        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="confirm">Remember me</label>

          <span className="signup">Don't have an account?, <Link className="signup-link" to="/signup">Signup</Link></span>
        </div> 

        <div> <button className="btn primary-btn" type="submit" onClick={() => handleLogin(testCredentials)}>Login</button></div>

      </div>

    </div>

    <Footer />
  </div>)
}