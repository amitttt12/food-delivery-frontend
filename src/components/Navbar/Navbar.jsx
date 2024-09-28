// import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />

      <ul className="navbarMenu">
        <li
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          {" "}
          home
        </li>
        <li
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile app
        </li>
        <li
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </li>
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
