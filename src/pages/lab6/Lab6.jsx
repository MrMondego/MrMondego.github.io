import { useEffect, useState } from "react";
import StudentInfo from "./StudentInfo";
import StudentInfoHandler from "./StudentInfoHandler";

export default function Lab6() {
    const [data, setData] = useState({});

    const studentInfoHander = (data) => {
        setData(data)
    }
    
    useEffect(() => {
        document.title = "Лабораторная №6";
    })

    return(<>
        <StudentInfo dataCallback={studentInfoHander} />
        <StudentInfoHandler data={data} />
    </>)
}