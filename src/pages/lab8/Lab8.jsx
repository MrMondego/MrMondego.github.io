import { useEffect } from "react";
import Comments from "./Comments";
import "../../css/lab8.css";

export default function Lab8() {
   useEffect(() => {
      document.title = "Лабораторная №8";
   }, []);
   return(<>
      <Comments />
   </>)
}