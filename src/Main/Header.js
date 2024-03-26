// import React, { useState } from "react";
// import Logo from "../Img/Re-Mastered.png";
// import "./Main.css";
// import { FaSearch } from "react-icons/fa";
// import { CiShoppingCart } from "react-icons/ci";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     navigate(`/search-results?query=${searchQuery}`);
//   };

//   return (
//     <div className="DashboardDivv">
//       <div className="search-box">
//         <img src={Logo} className="Logo" alt="Logo Image" />
//         <input
//           type="text"
//           placeholder="Search Amazon.in "
//           className="Searchbar"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="SearchIcon" onClick={handleSubmit}>
//           <FaSearch />
//         </button>
//         <button className="Signin" onClick={() => navigate("/Signin")}>
//           Sign in
//         </button>
//         <button className="Cart" onClick={() => navigate("/Cart")}>
//           <CiShoppingCart className="CartIcon" /> Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from "react";
// import Logo from "../Img/Re-Mastered.png";
// import "./Main.css";
// import { FaSearch ,FaUserCircle} from "react-icons/fa";
// import { CiShoppingCart } from "react-icons/ci";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUser } from "react-icons/fa"; // Import user icon from React Icons
// import axios from "axios"; // Assuming you're using Axios for HTTP requests

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [user, setUser] = useState(null); // User state
//   const [showUserName, setShowUserName] = useState(false); // State to control user name visibility
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if user is logged in
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/user");
//         setUser(response.data);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setUser(null);
//       }
//     };

//     fetchUser();
//   }, []); // Run once on component mount

//   const handleSubmit = () => {
//     navigate(`/search-results?query=${searchQuery}`);
//   };

//   const handleLogout = () => {
//     // Perform logout logic
//     setUser(null);
//   };

//   const handleUserClick = () => {
//     setShowUserName(!showUserName); // Toggle user name visibility
//   };

//   return (
//     <div className="DashboardDivv">
//       <div className="search-box">
//         <img src={Logo} className="Logo" alt="Logo Image" />
//         <input
//           type="text"
//           placeholder="Search Amazon.in "
//           className="Searchbar"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button className="SearchIcon" onClick={handleSubmit}>
//           <FaSearch />
//         </button>
//         {user ? (
//           <>
//             <span className="UserName" onClick={handleUserClick}>
//               Hello, {user.name}
//               {showUserName && <span className="UserNamePopup"> ({user.name})</span>}
//             </span>
//             <FaUser className="UserIcon" />
//             <button className="Signin" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/Signin" className="Signin">Sign in</Link>
//         )}
//         <button className="Cart" onClick={() => navigate("/Cart")}>
//           <CiShoppingCart className="CartIcon" /> Cart
//         </button>
//         <button className="User">
//           <FaUserCircle className="Username" /> User
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
// Header.js
// Header.js
import React, { useState, useEffect } from "react";
import Logo from "../Img/Re-Mastered.png";
import "./Main.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = ({ user }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality here
  };

  return (
    <div className="DashboardDivv">
      <div className="search-box">
        <img src={Logo} className="Logo" alt="Company Logo" />
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="Searchbar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="SearchIcon"
          onClick={() => navigate(`/search-results?query=${searchQuery}`)}
        >
          <FaSearch />
        </button>
        {user ? (
          <>
            <span className="UserName">
              Hello, {user.name}
            </span>
            <FaUserCircle className="UserIcon" />
            <button className="Signin" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/Signin" className="Signin">Sign in</Link>
        )}
        <Link to="/cart" className="Cart">
          <BsCartFill className="CartIcon" /> Cart
        </Link>
        <div className="User">
          {user ? (
            <FaUserCircle className="UserIcon" />
          ) : (
            <HiOutlineUserCircle className="UserIcon" />
          )}
          User
        </div>
      </div>
    </div>
  );
};

export default Header;







