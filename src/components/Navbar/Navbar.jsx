// import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />

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
          <img src={assets.basket_icon} alt="basket-icon" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
