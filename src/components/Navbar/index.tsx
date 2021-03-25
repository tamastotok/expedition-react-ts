import logo from "./../../img/icons/logo.png";
import "./style.scss";

export default function Navbar() {
   return (
      <header>
         <div id="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
         </div>

         <img id="logo" src={logo} alt="logo" />
         <nav>
            <ul>
               <a style={{ marginLeft: "60px" }} href="foo">
                  home
               </a>
               <a href="foo">trips</a>
               <a href="foo">activities</a>
               <a href="foo">magazine</a>
               <a href="foo">media</a>
               <a href="foo">about us</a>
               <a style={{ marginRight: "60px" }} href="foo">
                  contact
               </a>
            </ul>
         </nav>
      </header>
   );
}
