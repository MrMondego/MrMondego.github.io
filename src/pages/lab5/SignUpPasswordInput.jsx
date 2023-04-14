import React, { useState } from "react";

export default function SignUpPasswordInput({ update }) {
    const [password, updPassword] = useState("");
    const [progress, setProgress] = useState(0);

    const handlePasswordChange = (event) => {
        const passwordValue = event.target.value;
        updPassword(passwordValue);
    
        let score = 0;
        if (passwordValue.match(/[a-z]/)) {
          score++;
        }
        if (passwordValue.match(/[A-Z]/)) {
          score++;
        }
        if (passwordValue.match(/[0-9]/)) {
          score++;
        }
        if (passwordValue.match(/[^a-zA-Z0-9]/)) {
          score++;
        }
    
        setProgress(score * 25);
    };
    const handleOnChangeConfirmation = (e) => {
        if(e.target.value === password && password !== '') {
            e.target.className = "valid-input"
            update.inputs("password", true)
            
            // update[updateFilledInputs]("password", true)
        } else {
            e.target.className = "invalid-input"
            update.inputs("password", false)
            // update[updateSubmit]()
            // update[updateFilledInputs]("password", false)
        }
        update.subm()
    }
    return(<>
        <label htmlFor="password">Пароль</label>
        <input type="password" name="pass" id="password" onChange={e => handlePasswordChange(e)} />
        <ProgressBar progress={progress} />
        <label htmlFor="password-confirmation">Подтверждение пароля</label> 
        <input type="password" name="pass" id="password-confirmation" onChange={e => handleOnChangeConfirmation(e)} onClick={e => handleOnChangeConfirmation(e)} />
    </>)
}

function ProgressBar({ progress }) {
    return (
      <div>
        <label>Password strength:</label>
        <progress value={progress} max="100" />
      </div>
    );
  }