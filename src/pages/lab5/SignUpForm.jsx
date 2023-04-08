import { useState, useEffect } from "react"

import SignUpPasswordInput from "./SignUpPasswordInput"
import "../../css/lab5.css"

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
        <label htmlFor="email">Электронная почта</label>
        <SignUpEmailInput update={ {email: updateEmail, subm: updateSubmit, inputs: updateFilledInputs} } />
        <SignUpPasswordInput update={ {subm: updateSubmit, inputs: updateFilledInputs} } />
        <input type="submit" value="Сохранить" disabled={canSubmit} onClick={e => {e.preventDefault()}} />
    </form>)
}