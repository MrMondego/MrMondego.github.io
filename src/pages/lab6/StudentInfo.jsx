import { useEffect } from "react";
import { useState } from "react";

import "../../css/lab6.css"

export default function StudentInfo(props) {
    const [studentInfo, setStudentInfo] = useState({
        fio: "",
        birthData: "",
        universityEnterYear: "",
        faculty: "",
        group: 0,
        specialization:"",
        email: "",
        phone: ""
    });

    const setField = (prop, value) => {
        setStudentInfo({
            ...studentInfo,
            [prop]: value
        })
    }

    useEffect(() => {
        console.log(studentInfo);
        props.dataCallback(studentInfo)
    })

    return(<>
        <div className="lab6-student-info">
            <input type="text" name="fio" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="birthData" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="universityEnterYear" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="faculty" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="group" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="specialization" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="email" onChange={e => {setField(e.target.name, e.target.value)}} />
            <input type="text" name="phone" onChange={e => {setField(e.target.name, e.target.value)}} />
        </div>
    </>)
}