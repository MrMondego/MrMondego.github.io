import { useEffect } from "react";
import { useState } from "react";

import "../../css/lab6.css"

export default function StudentInfo({ dataCallback }) {
    const [studentInfo, setStudentInfo] = useState({
        "ФИО": "",
        "Возраст": "Ожидание...",
        "Факультет": "",
        "Курс": "Ожидание...",
        "Группа": "",
        "Специальность":"",
        "Электронная почта": "",
        "Оператор услуг электронной почты": "Ожидание...",
        "Номер телефона": "",
        "Оператор мобильной связи": "Ожидание...",
        "Дата рождения": "",
        "Год поступления": "",
    });

    const setField = (prop, value) => {
        setStudentInfo({
            ...studentInfo,
            [prop]: value
        })
    }

    useEffect(() => dataCallback(studentInfo),  [dataCallback, studentInfo])

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
            <input type="text" name="Специальность" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Адрес электронной почты</label>
            <input type="text" name="Электронная почта" onChange={e => {setField(e.target.name, e.target.value)}} />
            <label>Номер телефона</label>
            <input type="text" name="Номер телефона" onChange={e => {setField(e.target.name, e.target.value)}} />
        </div>
    </>)
}
