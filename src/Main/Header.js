import React, { useState } from "react";
import Logo from "../Img/Re-Mastered.png";
import "./Main.css";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search-results?query=${searchQuery}`);
  };

  return (
    <div className="DashboardDivv">
      <div className="search-box">
        <img src={Logo} className="Logo" alt="Logo Image" />
        <input
          type="text"
          placeholder="Search Amazon.in "
          className="Searchbar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="SearchIcon" onClick={handleSubmit}>
          <FaSearch />
        </button>
        <button className="Signin" onClick={() => navigate("/Signin")}>
          Sign in
        </button>
        <button className="Cart" onClick={() => navigate("/Cart")}>
          <CiShoppingCart className="CartIcon" /> Cart
        </button>
      </div>
    </div>
  );
};

export default Header;

