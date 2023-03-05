import React from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';
import { Link } from 'react-router-dom';

function LabButton(props) {  
  return(
      <button><Link to={props.path}>{props.text}</Link></button>
    )
}

export default function HomePage() {
    return(
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{userSelect:'none'}} />
          <p>
            Лабораторные по React.js, 1 курс 2 семестр
          </p>
          <LabButton text="Лабораторная №1" path="lab1" />
        </div>
    )
}