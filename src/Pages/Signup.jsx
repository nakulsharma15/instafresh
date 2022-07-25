import { Header, Footer } from "../Components/index.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useAuth } from "../Context/AuthContext.js";
import axios from "axios";


export default function Signup() {

    const navigate = useNavigate();

    const { dispatchUser, userDetails, setIsLoggedIn } = useAuth();

    const handleSignup = async (credentials) => {
        try {
            const response = await axios.post("/api/auth/signup", credentials);
            if (response.status === 200 || response.status === 201) {
                setIsLoggedIn(true);
                const { data } = response;
                const { createdUser } = data;
                dispatchUser({ type: "LOGIN_USER", payload: createdUser })
                localStorage.setItem("Token", data.encodedToken);
                toast.success("You're successfully signed in");
                navigate("/");
            }
            else {
                if (response.status = 404)
                    toast.error("Something went wrong, Please check your credentials");
            }
        } catch (error) {
            console.log("Error: ", error);
            toast.error("Something went wrong, Please try again in some time");
        }
    }


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name cannot be empty"),
            lastName: Yup.string().required("Last Name cannot be empty"),
            email: Yup.string().required("Email cannot be empty").min(5, "Please enter a valid email address"),
            password: Yup.string().required("Password cannot be empty").min(6, "Password's length should be greater than 6"),
            confirmPassword: Yup.string().required("Kindly Re-Enter the Password").oneOf([Yup.ref("password"), null], "Passwords doesn't match")
        }),
        onSubmit: (values, actions) => {
            handleSignup(JSON.stringify(values));
            actions.resetForm();
        },
    },
    );


    return (<div className="flex-column stick-bottom">
        <Header />
        <div className="container flex-center-column">

            <h2 className="text-xl">Sign up</h2>
            <div className="signup-form flex-center-column">

                <form onSubmit={formik.handleSubmit}>

                    <div className="flex-column margin-one-bottom">
                        <label htmlFor="name">First Name:</label>
                        <input className="signup-input" type="text" id="firstName" name="firstName"  {...formik.getFieldProps("firstName")} />

                        {
                            (formik.touched.firstName && formik.errors.firstName) && <p className="error-message">{formik.errors.firstName}</p>
                        }
                    </div>

                    <div className="flex-column margin-one-bottom">
                        <label htmlFor="name">Last Name:</label>
                        <input className="signup-input" type="text" id="lastName" name="lastName" {...formik.getFieldProps("lastName")} />

                        {
                            (formik.touched.lastName && formik.errors.lastName) && <p className="error-message">{formik.errors.lastName}</p>
                        }
                    </div>

                    <div className="flex-column margin-one-bottom">
                        <label htmlFor="email">Email:</label>
                        <input className="signup-input" type="text" id="email" name="email" {...formik.getFieldProps("email")} />

                        {
                            (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
                        }
                    </div>

                    <div className="flex-column margin-one-bottom">
                        <label htmlFor="password">Password:</label>
                        <input className="signup-input" type="password" id="password" name="password" {...formik.getFieldProps("password")} />

                        {
                            (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                        }
                    </div>

                    <div className="flex-column margin-one-bottom">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input className="signup-input" type="password" id="confirm-password" name="confirmPassword" {...formik.getFieldProps("confirmPassword")} />

                        {
                            (formik.touched.confirmPassword && formik.errors.confirmPassword) && <p className="error-message">{formik.errors.confirmPassword}</p>
                        }
                    </div>

                    <button className="btn primary-btn" type="submit">Sign up</button>

                </form>
            </div>

        </div>

        <Footer />
    </div>)
}