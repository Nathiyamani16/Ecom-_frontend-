import React, {useState} from "react";
import "./Signinn.css";
import AmazonLogo from "../Img/amazon_Black.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        number,
        email,
        password,
      });

      console.log(response.data); 
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
    }
  };


  return (
    <div>
      <br />
      <img src={AmazonLogo} className="SigninLogo" />
      <div className="SiginInContainer">
        <div className="SigninCard">
          <h2>REGISTER HERE</h2>
          <p className="SigninP">Enter the Credentials to Register </p>
          <br />
          <input type="text" placeholder="Name" className="SigninEmail" onChange={(e) => setName(e.target.value)} />
          <br />
          <input
            type="number"
            placeholder="Contact Number"
            className="SigninEmail"
            onChange={(e) => setNumber(e.target.value)}
          />

          <br />
          <input type="email" placeholder="Email" className="SigninEmail"  onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="SigninEmail"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            className="SigninEmail"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button className="SigninButton" onClick={handleRegister}>Register</button>
          <br />
          <br />
          <p className="SigninP">Already have Account?</p>
          <button className="LoginButton" onClick={() => navigate("/Signin")}>
            Login
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Register;
