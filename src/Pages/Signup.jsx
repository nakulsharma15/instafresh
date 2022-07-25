import { Link } from "react-router-dom";
import { Header , Footer } from "../Components/index.js";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function Signup() {


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
            signupHandler(values)
            actions.resetForm();
        },
    },
    );


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