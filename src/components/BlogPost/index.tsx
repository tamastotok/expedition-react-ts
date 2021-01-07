import React, { useRef } from "react";
import author from "./../../img/icons/author.svg";
import data from "./../../data.json";
import faroe_article_bg from "./../../img/page-1/faroe_article_bg.jpg";
import faroe_hero_img from "./../../img/page-1/faroe_hero_img.jpg";
import ship_article_bg from "./../../img/page-2/ship_article_bg.jpg";
import ship_hero_img from "./../../img/page-2/ship_hero_img.jpg";
import reyk_article_bg from "./../../img/page-3/reyk_article_bg.jpg";
import reyk_hero_img from "./../../img/page-3/reyk_hero_img.jpg";
import { blogPostClosingAnimation } from "../Animations";
import "./style.scss";

export default function BlogPost({ hideBlogPost, index }: any) {
   const blogPostRef = useRef<HTMLDivElement | any>();
   const heroImages = [faroe_hero_img, ship_hero_img, reyk_hero_img];
   const backgroundImages = [
      faroe_article_bg,
      ship_article_bg,
      reyk_article_bg,
   ];

   const blogPostAnimation = () => {
      blogPostClosingAnimation(blogPostRef);
   };

   return (
      <div ref={blogPostRef} className="iframe-container">
         <div className="left-side-container">
            <div className="left-side">
               <header>
                  <img src={author} alt="author" />
                  <div className="iframe-author">
                     <p>Article by</p>
                     <p>{data[index].blog.author}</p>
                  </div>
                  <button
                     id="back-button"
                     onClick={(e: React.MouseEvent) => {
                        hideBlogPost();
                        blogPostAnimation();
                     }}
                  >
                     BACK
                  </button>
               </header>
               <div className="top"></div>
               <div className="iframe-text-container">
                  <h1>{data[index].blog.title}</h1>
                  <p>{data[index].blog.article}</p>
                  <img src={heroImages[index]} alt="article" />
               </div>
            </div>
         </div>
         <div className="iframe-background-container">
            <img
               className="iframe-background"
               src={backgroundImages[index]}
               alt="article-background"
            />
         </div>
      </div>
   );
}
