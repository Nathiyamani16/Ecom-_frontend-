// import React, {useState} from "react";
// import "./Signinn.css";
// import AmazonLogo from "../Img/amazon_Black.png";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const Register = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");


//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/signup", {
//         name,
//         number,
//         email,
//         password,
//       });

//       console.log(response.data); 
//     } catch (error) {
//       console.error("Registration failed:", error.response.data.error);
//     }
//   };


//   return (
//     <div>
//       <br />
//       <img src={AmazonLogo} className="SigninLogo" />
//       <div className="SiginInContainer">
//         <div className="SigninCard">
//           <h2>REGISTER HERE</h2>
//           <p className="SigninP">Enter the Credentials to Register </p>
//           <br />
//           <input type="text" placeholder="Name" className="SigninEmail" onChange={(e) => setName(e.target.value)} />
//           <br />
//           <input
//             type="number"
//             placeholder="Contact Number"
//             className="SigninEmail"
//             onChange={(e) => setNumber(e.target.value)}
//           />

//           <br />
//           <input type="email" placeholder="Email" className="SigninEmail"  onChange={(e) => setEmail(e.target.value)} />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             className="SigninEmail"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="SigninEmail"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <br />
//           <button className="SigninButton" onClick={handleRegister}>Register</button>
//           <br />
//           <br />
//           <p className="SigninP">Already have Account?</p>
//           <button className="LoginButton" onClick={() => navigate("/Signin")}>
//             Login
//           </button>
//           <br />
//           <br />
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, {useState} from "react";
// import "./Signinn.css";
// import AmazonLogo from "../Img/amazon_Black.png";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [registrationSuccess, setRegistrationSuccess] = useState(false);

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/signup", {
//         name,
//         number,
//         email,
//         password,
//       });

//       console.log(response.data);
//       setRegistrationSuccess(true);
//     } catch (error) {
//       console.error("Registration failed:", error.response.data.error);
//     }
//   };

//   return (
//     <div>
//       <br />
//       <img src={AmazonLogo} className="SigninLogo" />
//       <div className="SiginInContainer">
//         <div className="SigninCard">
//           {registrationSuccess && <p>You are registered!</p>}
//           <h2>REGISTER HERE</h2>
//           <p className="SigninP">Enter the Credentials to Register </p>
//           <br />
//           <input type="text" placeholder="Name" className="SigninEmail" onChange={(e) => setName(e.target.value)} />
//           <br />
//           <input
//             type="number"
//             placeholder="Contact Number"
//             className="SigninEmail"
//             onChange={(e) => setNumber(e.target.value)}
//           />

//           <br />
//           <input type="email" placeholder="Email" className="SigninEmail"  onChange={(e) => setEmail(e.target.value)} />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             className="SigninEmail"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="SigninEmail"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <br />
//           <button className="SigninButton" onClick={handleRegister}>Register</button>
//           <br />
//           <br />
//           <p className="SigninP">Already have Account?</p>
//           <button className="LoginButton" onClick={() => navigate("/Signin")}>
//             Login
//           </button>
//           <br />
//           <br />
//           <br />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AmazonLogo from "../Img/amazon_Black.png";
import axios from "axios";
import "./Signinn.css";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Define 'error' state


  // Define validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Contact number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name: values.name,
        number: values.number,
        email: values.email,
        password: values.password,
      });

      console.log(response.data);
      navigate("/Signin");
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <br />
      <img src={AmazonLogo} className="SigninLogo" />
      <p className="ErrorMessage">{error}</p>

      <div className="SiginInContainer">
        <div className="SigninCard">
          <h2>REGISTER HERE</h2>
          <p className="SigninP">Enter the Credentials to Register </p>
          <Formik
            initialValues={{
              name: "",
              number: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="text" name="name" placeholder="Name" className="SigninEmail" />
                <ErrorMessage name="name" component="div" className="error" />
           
                <Field type="number" name="number" placeholder="Contact Number" className="SigninEmail" />
                <ErrorMessage name="number" component="div" className="error" />
              
                <Field type="email" name="email" placeholder="Email" className="SigninEmail" />
                <ErrorMessage name="email" component="div" className="error" />
                <br />
                <Field type="password" name="password" placeholder="Password" className="SigninEmail" />
                <ErrorMessage name="password" component="div" className="error" />
                <br />
                <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="SigninEmail" />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
                <br />
             
                <button type="submit" className="SigninButton" disabled={isSubmitting}>Register</button>
              </Form>
            )}
          </Formik>
         
          <br />
          <p className="SigninP">Already have an account?</p>
          <button className="LoginButton" onClick={() => navigate("/Signin")}>Login</button>
      
          
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;



