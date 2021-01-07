import React from "react";
import "./style.scss";

export default function TextContent({ textContentRefs, showBlogPost }: any) {
   const {
      subtitleRef,
      firsTitleRef,
      secondTitleRef,
      descriptionRef,
   } = textContentRefs;

   return (
      <div id="text-content">
         <div ref={subtitleRef} id="subtitle">
            <h2>Travel of the week</h2>
            <h2>Grønland</h2>
            <h2>Reykjavik</h2>
         </div>

         <div id="title">
            <div ref={firsTitleRef} id="first-row">
               <h1>Raw Beauty</h1>
               <h1>Wild North</h1>
               <h1>Iceland's</h1>
            </div>

            <div ref={secondTitleRef} id="second-row">
               <h1>Faroe Islands.</h1>
               <h1>Expedition</h1>
               <h1>Viking Heritage</h1>
            </div>
         </div>

         <div ref={descriptionRef} id="description">
            <p>
               The Faroe Islands - a North Atlantic archipelago located 200
               miles (320 km) north-northwest of the United Kingdom and about
               halfway between Norway and Iceland…
            </p>
            <p>
               Greenland is an autonomous constituent country of the Kingdom of
               Denmark between the Arctic and Atlantic Oceans, east of the
               Canadian Arctic Archipelago…
            </p>
            <p>
               Iceland is a Nordic island country in the North Atlantic, with a
               population of 360,390 and an area of 103,000 km2 (40,000 sq mi),
               making it the most sparsely populated country in Europe. The
               capital and …
            </p>
         </div>
         <button onClick={showBlogPost}>Read more...</button>
      </div>
   );
}
