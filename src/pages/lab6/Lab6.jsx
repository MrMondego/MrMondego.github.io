import { useEffect, useState } from "react";
import Notes from "./Notes";
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
        <h1>Задание 1</h1>
        <StudentInfo dataCallback={studentInfoHander} />
        <StudentInfoHandler data={data} />
        <h1>Задание 2</h1>
        <Notes />
    </>)
}