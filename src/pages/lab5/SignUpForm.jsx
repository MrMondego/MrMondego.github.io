import { useState } from "react"

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
    const [filledInputs, setFilledInputs] = useState({ email: false, password: false });

    const updateEmail = (value) => {
        setEmail(value);
    }
    const updateSubmit = () => {
        Object.values(filledInputs).every(Boolean) ? setCanSubmit(false) : setCanSubmit(true)
    }
    const updateFilledInputs = (key, val) => {
        setFilledInputs({...filledInputs, [key]: val});
        console.log(filledInputs)
    }
    
    return(<form className="lab5-form">
        <label>Электронная почта {email}</label>
        <SignUpEmailInput update={ {email: updateEmail, subm: updateSubmit, inputs: updateFilledInputs} } />
        <SignUpPasswordInput update={ {subm: updateSubmit, inputs: updateFilledInputs} } />
        <label>Фамилия</label>
        <input type="text" name="lstname" id="lstname" />
        <label>Имя</label>
        <input type="text" name="name" id="name" />
        <label>Отчество</label>
        <input type="text" name="patr" id="patr" />

        <br />
        <input type="submit" value="Сохранить" disabled={canSubmit} onClick={e => {e.preventDefault()}} />
    </form>)
}