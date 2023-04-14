import { useEffect } from "react";
import { useState } from "react";

import "../../css/lab6.css"

export default function StudentInfo(props) {
    const [studentInfo, setStudentInfo] = useState({
        "ФИО": "",
        "Дата рождения": "",
        "Год поступления": "",
        "Факультет": "",
        "Группа": 0,
        "Специализация":"",
        "Почтовый адрес": "",
        "Номер телефона": ""
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
            <label>ФИО</label>
            <input type="text" name="ФИО" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Дата рождения</label>
            <input type="text" name="Дата рождения" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Дата поступления в университет</label>
            <input type="number" min="1900" max="2099" step="1" name="Год поступления" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Факультет</label>
            <input type="text" name="Факультет" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Группа</label>
            <input type="text" name="Группа" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Специализация</label>
            <input type="text" name="Специализация" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Адрес электронной почты</label>
            <input type="text" name="Почтовый адрес" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Номер телефона</label>
            <input type="text" name="Номер телефона" onChange={e => {setField(e.target.name, e.target.value)}} />
        </div>
    </>)
}