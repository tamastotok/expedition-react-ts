export function numberAnimation(ref, value) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].animate(
         [{ transform: `translateY(${value}%)` }],
         {
            duration: 1000,
            easing: "cubic-bezier(.7,0,.3,1)",
            fill: "forwards",
         }
      );
   }
}

export function backgroundAnimation(ref, value) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].animate(
         [
            {
               transform: `translateY(${value}%)`,
            },
         ],
         {
            duration: 1000,
            easing: "cubic-bezier(.55,0,.55,1)",
            fill: "forwards",
         }
      );
   }
}

export function subtitleAnimation(ref, value) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].animate(
         [
            { opacity: 1 },
            { opacity: 0.0, offset: 0.1 },
            { opacity: 0.0, offset: 0.7 },
            {
               transform: `translateY(${value}%)`,
               opacity: 1,
            },
         ],
         {
            duration: 1000,
            easing: "cubic-bezier(.55,0,.55,1)",
            fill: "forwards",
         }
      );
   }
}

export function firstTitleAnimation(ref, value) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].animate(
         [
            {
               transform: `translateY(${value}%)`,
            },
         ],
         {
            duration: 800,
            easing: "cubic-bezier(.55,0,.55,1)",
            fill: "forwards",
         }
      );
   }
}

export function secondTitleAnimation(ref, value) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].animate(
         [
            {
               transform: `translateY(${value}%)`,
            },
         ],
         {
            duration: 800,
            delay: 100,
            easing: "cubic-bezier(.55,0,.55,1)",
            fill: "forwards",
         }
      );
   }
}

export function descriptionAnimation(ref, value) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].animate(
         [
            { opacity: 1 },
            { opacity: 0.0, offset: 0.1 },
            { opacity: 0.0, offset: 0.9 },
            {
               transform: `translateY(${value}%)`,
               opacity: 1,
            },
         ],
         {
            duration: 1000,
            easing: "cubic-bezier(.55,0,.55,1)",
            fill: "forwards",
         }
      );
   }
}

export function sidebarAnimation(ref, indexNumber) {
   for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].className = "dots";
      ref.current.children[indexNumber].className = "dots active";
   }
}

export function backgroundSlide(ref, index, value) {
   ref.current.children[index].animate(
      [
         {
            transform: `translate(${value}%,${index * -100}%)`,
         },
      ],
      { duration: 1500, easing: "cubic-bezier(.7,0,.3,1)", fill: "forwards" }
   );
}

export function blogPostClosingAnimation(ref) {
   ref.current.animate(
      [
         {
            transform: "translateY(100%)",
         },
      ],
      { duration: 1500, easing: "cubic-bezier(.7,0,.3,1)", fill: "forwards" }
   );
}
