// import React, {useState} from "react";
// import "./Signinn.css"
// import { useNavigate } from "react-router-dom";
// import AmazonLogo from "../Img/amazon_Black.png"
// import axios from "axios";

// const Signin = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleLogin = async () => {
//         try {
//           const response = await axios.post("http://localhost:5000/api/login", {
//             email,
//             password,
//           });
//           console.log(response.data);
//           navigate('/profile')
//         } catch (error) {
//           console.error("Login failed:", error.response.data.error);
//         }
//       };

//     return(
//         <div>
//             <br />
//             <img src={AmazonLogo} className="SigninLogo"/>
//         <div className="SiginInContainer">
//         <div className="SigninCard">
//             <h2>LOGIN</h2>
//             <p className="SigninP">Enter the Credentials to Login </p>
//             <input type="text" placeholder="Email" className="SigninEmail" onChange={(e) => setEmail(e.target.value)}/>
//             <br />
//             <input type="password" placeholder="Password" className="SigninEmail" onChange={(e) => setPassword(e.target.value)} />
//             <br />
//             <button className="LoginButton" onClick={handleLogin}>Login</button>
//             <br />
//             <br />
//             <a href="/" className="NewToAmazon" >Terms and Conditions</a>
//             <p className="SigninP">New to Amazon</p>
//             <button className="SigninButton" onClick={() => navigate('/Register')}>Create a New Account</button>
//             <br />
//             <br />
//             <br />
//         </div>
//         </div>
//         </div>

//     )
// }

// export default Signin

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AmazonLogo from "../Img/amazon_Black.png";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Signin Component
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      // Navigate to the profile page with the email parameter
      navigate(`/profile/${email}`);
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
    }
  };

  return (
    <div>
      <br />
      <img src={AmazonLogo} className="SigninLogo" />
      <div className="SiginInContainer">
        <div className="SigninCard">
          <h2>LOGIN</h2>
          <p className="SigninP">Enter the Credentials to Login </p>
          <input type="text" placeholder="Email" className="SigninEmail" onChange={(e) => setEmail(e.target.value)}/>
             <br />
             <input type="password" placeholder="Password" className="SigninEmail" onChange={(e) => setPassword(e.target.value)} />
             <br />
             <br />
             <button className="LoginButton" onClick={handleLogin}>Login</button>
             <br />
            <br />
             <a href="/" className="NewToAmazon" >Terms and Conditions</a>
             <p className="SigninP">New to Amazon</p>
             <button className="SigninButton" onClick={() => navigate('/Register')}>Create a New Account</button>
             <br />
             <br />
             <br />
        </div>
      </div>
    </div>
  );
};

export default Signin;
