import { Header, Footer } from "../Components/index.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthContext.js";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

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
        dispatchUser({ type: "LOGIN_USER", payload: foundUser });
        localStorage.setItem("Token", data.encodedToken);
        toast.success("You're successfully logged in")
        navigate(location.state?.from?.pathname === undefined ? "/" : location.state?.from?.pathname, { replace: true });
      }
      else {
        if (response.status === 404)
          console.log("Error 404");
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again in some time");
      console.log("We couldn't sign you in", error);
    }
  }

  const guestLoginHandler = () => {
    handleLogin(testCredentials);
  }


  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email cannot be empty").min(5, "Please enter a valid email address"),
      password: Yup.string().required("Password cannot be empty")
    }),
    onSubmit: (values, actions) => {
      handleLogin(JSON.stringify(values));
      actions.resetForm();
    },
  },
  );

  return (<div className="flex-column stick-bottom">

    <Header />

    <div className="container flex-center-column">

      <h2 className="text-xl login-header">Login</h2>
      <div className="login-form flex-center-column box-shadow">

        <form onSubmit={formik.handleSubmit}>

          <div className="flex-column margin-one-bottom">
            <label htmlFor="email">Email:</label>
            <input className="login-input" type="text" id="email" name="email" {...formik.getFieldProps("email")} required />

            {
              (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
            }
          </div>

          <div className="flex-column margin-one-bottom">
            <label htmlFor="password">Password:</label>
            <input className="login-input" type="password" id="password" name="password" {...formik.getFieldProps("password")} required />

            {
              (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
            }

          </div>

          <div className="flex-sp-ev flex-wrap margin-one-bottom flex-align-center">
            <p className="guest-login-btn" onClick={guestLoginHandler}>Login as Guest</p>

            <span className="signup">Don't have an account?, <Link className="signup-link" to="/signup">Signup</Link></span>
          </div>

          <div className="flex-justify-center"> <button className="btn primary-btn" type="submit">Login</button></div>

        </form>
      </div>

    </div>

    <Footer />
  </div>)
}