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
        <input type="email" name="email" id="email" form="lab5-form" onChange={e => handleOnChange(e)} />
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
        phone: false,
        password: false,
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
        updateSubmit()
    })
    
    const birthYears = [];
    for(let i = 1920; i <= 2023; i++) {
        birthYears.push(<option key={i} value={i}>{i}</option>)
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
    const handleOnChangePhoneInput = e => {
        const input = document.getElementById("phone")
        if(input.value.length > 7)
            updateFilledInputs("phone", true)
        else
            updateFilledInputs("phone",false)
    }

    return(<form id="lab5-form">
        <label htmlFor="lstname">Фамилия</label>
        <input type="text" name="lastName" id="lstname" form="lab5-form" onChange={e => updateInput(e)} />
        <label htmlFor="name">Имя</label>
        <input type="text" name="name" id="name" form="lab5-form" onChange={e => updateInput(e)} />
        <label htmlFor="patr">Отчество</label>
        <input type="text" name="patronymic" id="patr" form="lab5-form" onChange={e => updateInput(e)} />
        <label htmlFor="floor">Пол</label>
        <input type="radio" name="floor" form="lab5-form" value={0} onClick={(e) => updateFilledInputs("floor", e.target.checked)} />
        <input type="radio" name="floor" form="lab5-form" value={1} onClick={(e) => updateFilledInputs("floor", e.target.checked)} />
        <label>Дата рождения</label>
        <span>
            <select onChange={handleOnChangeBirthYear}>{birthYears}</select>
            <select onChange={handleOnChangeBirthMonth}>
                <option key={1+100} value="1">Январь</option>
                <option key={2+100} value="2">Февраль</option>
                <option key={3+100} value="3">Март</option>
                <option key={4+100} value="4">Апрель</option>
                <option key={5+100} value="5">Май</option>
                <option key={6+100} value="6">Июнь</option>
                <option key={7+100} value="7">Июль</option>
                <option key={8+100} value="8">Август</option>
                <option key={9+100} value="9">Сентябрь</option>
                <option key={10+100} value="10">Октрябрь</option>
                <option key={11+100} value="11">Ноябрь</option>
                <option key={12+100} value="12">Декабрь</option>
            </select>
            <select onChange={handleOnChangeBirthDay}>{birthDays.map((el, index) => (
                <option key={index} value={el.props.value} disabled={((birthMonth % 2 === 0) && (el.props.value === 31)) || (birthMonth === '2' && el.props.value > 27) ? true : false}>{el.props.children}</option>
            ))}</select>
        </span>
        <label htmlFor="email">Электронная почта</label>
        <SignUpEmailInput update={ {email: updateEmail, subm: updateSubmit, inputs: updateFilledInputs} } />
        <label htmlFor="phone">Номер телефона</label>
        <PhoneInput inputProps={{id: "phone", required: true, form: "lab5-form"}} onChange={handleOnChangePhoneInput} />
        <SignUpPasswordInput update={ {subm: updateSubmit, inputs: updateFilledInputs} } />
        <input type="submit" value="Сохранить" form="lab5-form" disabled={canSubmit} onClick={e => {e.preventDefault(); console.log({email, birthYear, birthMonth, birthDay})}} />
    </form>)
}