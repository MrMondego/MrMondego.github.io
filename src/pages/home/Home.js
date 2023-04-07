import React from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';
import { Link } from 'react-router-dom';

function LabButton(props) {  
  return(
      <Link to={props.path} className="lab-link-button">{props.text}</Link>
    )
}

export default function HomePage() {
  document.title = "Главная";
  return(
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" style={{userSelect:'none'}} />
      <p>
        Лабораторные по React.js, 1 курс 2 семестр
      </p>
      <LabButton text="Лабораторная №1" path="lab1" />
      <LabButton text="Лабораторная №2" path="lab2" />
      <LabButton text="Лабораторная №3" path="lab3" />
      <LabButton text="Лабораторная №4" path="lab4" />
    </div>
  )
}