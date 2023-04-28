import { useEffect } from "react";
import Scheduler from "./Scheduler";

export default function Lab7() {
   useEffect(() => {document.title = "Лабораторная №7"}, []);
   return(<>
      <Scheduler />
   </>)
}