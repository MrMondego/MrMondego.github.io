import { useState, useEffect } from "react"

import SignUpPasswordInput from "./SignUpPasswordInput"
import "../../css/lab5.css"
import PhoneInput from "react-phone-input-2";

function SignUpEmailInput({ update }) {
    let handleOnChange = ( e ) => {
        let email = e.target.value;
        let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(email) ) {
            e.target.className = "valid-input"
            update.email(email)
            update.inputs("email", true)
            // update[updateEmail](email);
            // update[updateFilledInputs]('email', true)
            // update[updateSubmit]()
        }
        else {
            e.target.className = "invalid-input"
            // update[updateSubmit]()
            // update[updateFilledInputs]('email', false)
        }
        update.subm()
    }
    
    return(<>
        <input type="email" name="email" id="email" onChange={e => handleOnChange(e)} />
    </>)
}

export default function SignUpForm() {
    const [canSubmit, setCanSubmit] = useState(true);
    const [email, setEmail] = useState("");
    const [filledInputs, setFilledInputs] = useState({
        name: false,
        lastName: false,
        patronymic: false,
        floor: false,
        email: false,
        password: false
    });
    const [birthYear, setBirthYear] = useState(1920);
    const [birthMonth, setBirthMonth] = useState(1);
    const [birthDay, setBirthDay] = useState(1);

    const updateEmail = (value) => {
        setEmail(value);
    }
    const updateSubmit = () => {
        Object.values(filledInputs).every(Boolean) ? setCanSubmit(false) : setCanSubmit(true)
    }
    const updateFilledInputs = (key, val) => {
        setFilledInputs({...filledInputs, [key]: val});
    }
    const updateInput = (e) => {
        e.target.value ? updateFilledInputs(e.target.name, true) : updateFilledInputs(e.target.name, false)
    }
    useEffect(() => {
        console.log(email);
        updateSubmit()
    })
    
    const birthYears = [];
    for(let i = 1920; i <= 2023; i++) {
        birthYears.push(<option value={i}>{i}</option>)
    }
    const birthDays = [];
    for(let i = 1; i <= 31; i++) {
        birthDays.push(<option key={i} value={i}>{i}</option>)
    }
    const handleOnChangeBirthYear = (e) => {
        setBirthYear(e.target.value);
    }
    const handleOnChangeBirthMonth = (e) => {
        setBirthMonth(e.target.value);
    }
    const handleOnChangeBirthDay = (e) => {
        setBirthDay(e.target.value);
    }

    return(<form className="lab5-form">
        <label htmlFor="lstname">Фамилия</label>
        <input type="text" name="lastName" id="lstname" onChange={e => updateInput(e)} />
        <label htmlFor="name">Имя</label>
        <input type="text" name="name" id="name" onChange={e => updateInput(e)} />
        <label htmlFor="patr">Отчество</label>
        <input type="text" name="patronymic" id="patr" onChange={e => updateInput(e)} />
        <label htmlFor="floor">Пол</label>
        <input type="radio" name="floor" value={0} onClick={(e) => updateFilledInputs("floor", e.target.checked)} />
        <input type="radio" name="floor" value={1} onClick={(e) => updateFilledInputs("floor", e.target.checked)} />
        <label>Дата рождения</label>
        <span>
            <select onChange={handleOnChangeBirthYear}>{birthYears}</select>
            <select onChange={handleOnChangeBirthMonth}>
                <option value="1">Январь</option>
                <option value="2">Февраль</option>
                <option value="3">Март</option>
                <option value="4">Апрель</option>
                <option value="5">Май</option>
                <option value="6">Июнь</option>
                <option value="7">Июль</option>
                <option value="8">Август</option>
                <option value="9">Сентябрь</option>
                <option value="10">Октрябрь</option>
                <option value="11">Ноябрь</option>
                <option value="12">Декабрь</option>
            </select>
            <select onChange={handleOnChangeBirthDay}>{birthDays.map((el, index) => (
                <option key={index} value={el.props.value} disabled={((birthMonth % 2 === 0) && (el.props.value === 31)) || (birthMonth === '2' && el.props.value > 27) ? true : false}>{el.props.children}</option>
            ))}</select>
        </span>
        <label htmlFor="email">Электронная почта</label>
        <SignUpEmailInput update={ {email: updateEmail, subm: updateSubmit, inputs: updateFilledInputs} } />
        <label htmlFor="phone">Номер телефона</label>
        <PhoneInput inputProps={{id: "phone"}} />
        <SignUpPasswordInput update={ {subm: updateSubmit, inputs: updateFilledInputs} } />
        <input type="submit" value="Сохранить" disabled={canSubmit} onClick={e => {e.preventDefault()}} />
    </form>)
}