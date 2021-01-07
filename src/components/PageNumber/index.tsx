import React from "react";
import "./style.scss";

export default function PageNumber({ numberRef }: any) {
   return (
      <div ref={numberRef} id="number-container">
         <h1>1</h1>
         <h1>2</h1>
         <h1>3</h1>
      </div>
   );
}
