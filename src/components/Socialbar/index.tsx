import React from "react";
import facebook from "./../../img/icons/facebook.png";
import twitter from "./../../img/icons/twitter.png";
import instagram from "./../../img/icons/instagram.png";
import "./style.scss";

export default function Socialbar() {
   return (
      <div className="social-container">
         <p>follow us</p>
         <img src={facebook} alt="facebook" />
         <img src={twitter} alt="twitter" />
         <img src={instagram} alt="instagram" />
      </div>
   );
}
