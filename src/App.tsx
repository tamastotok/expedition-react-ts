import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Backgrounds from "./components/Background";
import PageNumber from "./components/PageNumber";
import TextContent from "./components/TextContent";
import BlogPost from "./components/BlogPost";

import Socialbar from "./components/Socialbar";
import Share from "./components/Share";
import {
   numberAnimation,
   backgroundAnimation,
   subtitleAnimation,
   firstTitleAnimation,
   secondTitleAnimation,
   descriptionAnimation,
   backgroundSlide,
} from "./components/Animations";

import next from "./img/icons/next.png";
import back from "./img/icons/back.png";

//! NOT DESIGNED UNDER (max-width: 540px)

function App() {
   const [deltaY, setDeltaY] = useState(0);
   const [index, setIndex] = useState(0);
   const [transformValue, setTransformValue] = useState(0);
   const isDisabled = useRef<boolean>(true);

   const handleWheel = (e: any) => {
      if (isDisabled.current) {
         setDeltaY(e.deltaY);

         if (e.deltaY < 0) {
            // Wheel Up
            setIndex((prev) => (prev === 0 ? prev : prev - 1));
            setTransformValue((prev) => (prev !== 0 ? prev + 100 : 0));
         } else {
            // Wheel Down
            setIndex((prev) => (prev === 2 ? prev : prev + 1));
            setTransformValue((prev) => (prev !== -200 ? prev - 100 : -100));
         }
      }
   };

   const numberRef = useRef<HTMLDivElement | any>();
   const backgroundRef = useRef<HTMLDivElement | any>();

   const textContentRefs = {
      subtitleRef: useRef<HTMLDivElement | any>(),
      firsTitleRef: useRef<HTMLDivElement | any>(),
      secondTitleRef: useRef<HTMLDivElement | any>(),
      descriptionRef: useRef<HTMLDivElement | any>(),
   };
   const {
      subtitleRef,
      firsTitleRef,
      secondTitleRef,
      descriptionRef,
   } = textContentRefs;

   useEffect(() => {
      if (deltaY !== 0 || buttonIsClicked) {
         isDisabled.current = false;
         numberAnimation(numberRef, transformValue);
         backgroundAnimation(backgroundRef, transformValue);
         subtitleAnimation(subtitleRef, transformValue);
         firstTitleAnimation(firsTitleRef, transformValue);
         secondTitleAnimation(secondTitleRef, transformValue);
         descriptionAnimation(descriptionRef, transformValue);

         setTimeout(() => {
            isDisabled.current = true;
            setButtonIsClicked(false);
         }, 1200);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [index]);

   // Hide and Show blogpost when "read more" is clicked
   const [isHide, setIsHide] = useState(true);

   const showBlogPost = () => {
      if (isDisabled.current) {
         isDisabled.current = false;
         setIsHide(false);
         backgroundSlide(backgroundRef, index, -15);
      } else return false;
   };

   const hideBlogPost = () => {
      backgroundSlide(backgroundRef, index, 0);
      setTimeout(() => {
         setIsHide(true);
         isDisabled.current = true;
      }, 1500);
   };
   // -----

   // Scroll function when buttons are clicked
   const [buttonIsClicked, setButtonIsClicked] = useState(false);
   const scrollUp = () => {
      if (isDisabled.current) {
         setButtonIsClicked(true);
         setIndex((prev) => (prev === 0 ? prev : prev - 1));
         setTransformValue((prev) => (prev !== 0 ? prev + 100 : 0));
      }
   };

   const scrollDown = () => {
      if (isDisabled.current) {
         setButtonIsClicked(true);
         setIndex((prev) => (prev === 2 ? prev : prev + 1));
         setTransformValue((prev) => (prev !== -200 ? prev - 100 : -100));
      }
   };
   // -----

   return (
      <div
         className="App"
         onWheel={(e: React.WheelEvent | React.TouchEvent) => handleWheel(e)}
      >
         <Navbar />
         <Backgrounds backgroundRef={backgroundRef} />
         <PageNumber numberRef={numberRef} />
         <TextContent
            textContentRefs={textContentRefs}
            showBlogPost={showBlogPost}
         />
         {!isHide ? (
            <BlogPost index={index} hideBlogPost={hideBlogPost} />
         ) : null}

         <Socialbar />
         <div id="button-container">
            <button id="scrollup-button" onClick={scrollUp}>
               <img src={back} alt="back-button" />
            </button>
            <button id="scrolldown-button" onClick={scrollDown}>
               <img src={next} alt="next-button" />
            </button>
         </div>
         <Share />
      </div>
   );
}

export default App;
