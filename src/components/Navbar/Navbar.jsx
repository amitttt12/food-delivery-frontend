// import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbarMenu">
        <Link
          to='/'
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          {" "}
          home
        </Link>
        <a
          href="#exploremenu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#appDownload"
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      <div className="navbarRight">
        <img src={assets.search_icon} alt="search-icon" />

        <div className="navbarSearchIcon">
          <Link to='/cart'>  <img src={assets.basket_icon} alt="basket-icon" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => { setShowLogin(true) }}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
