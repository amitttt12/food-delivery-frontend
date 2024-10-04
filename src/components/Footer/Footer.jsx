// import React from "react";

import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="footerContent">
                <div className="footerContentLeft">
                    <img src={assets.logo} alt="logo-footer" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
                        suscipit architecto accusamus hic explicabo, modi dolore numquam
                        autem aperiam qui eligendi doloribus harum quaerat iure cupiditate,
                        aliquid ipsam facere reiciendis?
                    </p>
                    <div className="footerSocialIcon">
                        <img src={assets.facebook_icon} alt="facebook-icon" />
                        <img src={assets.twitter_icon} alt="twitter-icon" />
                        <img src={assets.linkedin_icon} alt="linkedin-icon" />
                    </div>
                </div>
                <div className="footerContentCenter">
                    <h2>COMPANY</h2>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </div>
                <div className="footerContentRight">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+912221111</li>
                        <li>contact_food@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footerCopyright">Copyright 2024 © Tomato.com-All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
