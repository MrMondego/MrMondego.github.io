import { useCallback } from "react";
import { useEffect, useState } from "react";
import Notes from "./Notes";
import StudentInfo from "./StudentInfo";
import StudentInfoHandler from "./StudentInfoHandler";

export default function Lab6() {
    const [data, setData] = useState({});
    const [notesArr, setNotesArr] = useState([]);

    const updateNotesArray = notes => {
        setNotesArr(notes);
    }

    const studentInfoHander = useCallback((data) => {
        setData(data)
    }, [])
    
    useEffect(() => {
        document.title = "Лабораторная №6";
    }, [])

    return(<>
        <h1>Задание 1</h1>
        <StudentInfo dataCallback={studentInfoHander} />
        <StudentInfoHandler data={data} />
        <h1>Задание 2</h1>
        <Notes handleNotes={updateNotesArray} />
        <div className="notes-container">
         {notesArr?.map(entry => entry)}
        </div>
    </>)
}