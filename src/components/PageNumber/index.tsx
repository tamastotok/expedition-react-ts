import "./style.scss";

export default function PageNumber({ numberRef }: any) {
   return (
      <div id="number-container">
         <div ref={numberRef} id="number-pages">
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
         </div>
         <h1>3</h1>
      </div>
   );
}
