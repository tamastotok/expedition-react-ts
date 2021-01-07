import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Backgrounds from "./components/Background";
import PageNumber from "./components/PageNumber";
import TextContent from "./components/TextContent";
import BlogPost from "./components/BlogPost";
import Sidebar from "./components/Sidebar";
import Socialbar from "./components/Socialbar";
import Share from "./components/Share";
import {
   numberAnimation,
   backgroundAnimation,
   subtitleAnimation,
   firstTitleAnimation,
   secondTitleAnimation,
   descriptionAnimation,
   sidebarAnimation,
   backgroundSlide,
} from "./components/Animations";

//! NOT DESIGNED UNDER width: 1160px

function App() {
   const [deltaY, setDeltaY] = useState(0);
   const [index, setIndex] = useState(0);
   const [transformValue, setTransformValue] = useState(0);
   const isDisabled = useRef<boolean>(true);

   const handleWheel = (e: any) => {
      if (isDisabled.current) {
         setDeltaY(e.deltaY);
         if (e.deltaY === -100) {
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

   const sidebarRef = useRef<HTMLDivElement | any>();

   useEffect(() => {
      if (deltaY !== 0) {
         isDisabled.current = false;

         numberAnimation(numberRef, transformValue);
         backgroundAnimation(backgroundRef, transformValue);
         subtitleAnimation(subtitleRef, transformValue);
         firstTitleAnimation(firsTitleRef, transformValue);
         secondTitleAnimation(secondTitleRef, transformValue);
         descriptionAnimation(descriptionRef, transformValue);
         sidebarAnimation(sidebarRef, index);

         setTimeout(() => {
            isDisabled.current = true;
         }, 1200);
      }
   }, [index]);

   const [isHide, setIsHide] = useState(true);

   const showBlogPost = () => {
      isDisabled.current = false;
      setIsHide(false);
      backgroundSlide(backgroundRef, index, -15);
   };

   const hideBlogPost = () => {
      backgroundSlide(backgroundRef, index, 0);
      setTimeout(() => {
         setIsHide(true);
         isDisabled.current = true;
      }, 1500);
   };

   return (
      <div className="App" onWheel={(e: React.WheelEvent) => handleWheel(e)}>
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
         <Sidebar sidebarRef={sidebarRef} />
         <Socialbar />
         <Share />
      </div>
   );
}

export default App;
