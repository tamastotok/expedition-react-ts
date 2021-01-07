import faroe_bg from "./../../img/page-1/faroe_bg.jpg";
import ship_bg from "./../../img/page-2/ship_bg.jpg";
import reyk_bg from "./../../img/page-3/reyk_bg.jpg";
import "./style.scss";

export default function Backgrounds({ backgroundRef }: any) {
   return (
      <div ref={backgroundRef} id="background-container">
         <img src={faroe_bg} alt="Faroe Island" />
         <img src={ship_bg} alt="Ship" />
         <img src={reyk_bg} alt="Reykjavik" />
      </div>
   );
}
