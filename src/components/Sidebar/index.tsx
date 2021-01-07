import React from "react";
import "./style.scss";

export default function Sidebar({ sidebarRef }: any) {
   return (
      <div ref={sidebarRef} id="sidebar">
         <div className="dots active"></div>
         <div className="dots"></div>
         <div className="dots"></div>
      </div>
   );
}
