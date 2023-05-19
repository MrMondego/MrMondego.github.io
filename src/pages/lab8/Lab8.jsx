import { useEffect } from "react";
import Comments from "./Comments";
import "../../css/lab8.css";

export default function Lab8() {
   useEffect(() => {
      document.title = "Лабораторная №8";
      document.body.style.backgroundColor = "rgb(30,30,30)";
      return(()=> {
         document.body.style.backgroundColor = "initial";
      })
   }, []);
   return(<>
      <Comments />
   </>)
}