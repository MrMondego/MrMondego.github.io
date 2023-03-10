import JobChoose from "./JobChoose"
import JobList from "./JobList"
import { useState, useEffect } from "react";

export default function JobMenu() {
    const [chosed, updateChosed] = useState("");
    function setChoose(value) {
        updateChosed(value);
    }
    useEffect(() => { updateChosed(chosed); console.log(chosed) })
    return(<>
        <h1>Задание 2</h1>
        <div className="jobmenu">
            <JobChoose update={setChoose} />
            <JobList profession={chosed} />
        </div>
    </>)
}