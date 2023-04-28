import { useState, useRef, useMemo } from "react";
import classnames from 'classnames';

import * as calendar from './Calendar_funcs';
import Notes from "../lab6/Notes";
import '../../css/lab4.css'
import { useEffect } from "react";

function formatDate(date) {
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1)?.padStart(2, '0');
    const day = String(date?.getDate())?.padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function withScheduler(Component) {
    return function Scheduler() {
        const [date, setDate] = useState(null);
        const [notesArr, setNotesArr] = useState([]);
        // const ref = useRef(null);
        const updateNotesArr = notes => {
            setNotesArr(notes);
            // ref.current = notesArr;
            // console.log(notes, notesArr)
        }
        const handleDateChange = date => setDate(date);
        useEffect(() => {
            setNotesArr(notesArr)
            // console.log(notesArr)
        }, [notesArr])

        return(<>
            <Component onChange={handleDateChange} />
            {date && <Notes initArr={notesArr} handleNotes={updateNotesArr} defaultDate={formatDate(date)}>
                {notesArr.length > 0 && <>
                    {notesArr.map((el, i) => <>
                        <button onClick={() => setNotesArr(notesArr.filter((item, index) => index !== i))}>Удалить запись {`${el.props.children[1].props.children} ${i+1}`}</button>
                        <button onClick={() => {
                            const newArr = [...notesArr];
                            newArr[i] = <div className="notes-container__note" style={el.props.style} key={notesArr.length}>
                                {(notesArr.length > 6) && <h2>У вас слишком много заметок</h2>}
                                <h2>{prompt("Заголовок", el.props.children[1].props.children)}</h2>
                                <h2>{el.props.children[2].props.children}</h2>
                                <p>{prompt("Текст", el.props.children[3].props.children)}</p>
                            </div>
                            setNotesArr(newArr);
                        }} >Изменить запись {`${el.props.children[1].props.children} ${i+1}`}</button>
                    </>)}
                </>}
                {notesArr.length > 1 && <button onClick={() => updateNotesArr([])}>Удалить все заметки</button>}
            </Notes>}
            <div className="notes-container">
            {notesArr?.map(entry => entry)}
            </div>
        </>)
    }
}

function Calendar({onChange = Function.prototype}) {
   const years = useMemo(() => [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], []);
   const monthNames = useMemo(() => ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'], []);
   const weekDayNames = useMemo(() => ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'], []);
//    const onChange = useMemo(() => Function.prototype, []);

   const [date, setDate] = useState(new Date());
   const [currentDate, setCurrentDate] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(null);

   const year = date.getFullYear();
   const month = date.getMonth();
   const day = date.getDate();

   const yearSelect = useRef(null);
   const monthSelect = useRef(null);

   const handlePrevMonthButtonClick = () => {
    const date = new Date(year, month - 1);
    
    setDate(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(year, month + 1);
    
    setDate(date);
  };

  const handleSelectChange = () => {
    const year = yearSelect.value;
    const month = monthSelect.value;

    const date = new Date(year, month);

    setDate(date);
  };

  const handleDayClick = val => {
    // console.log(val, date, val == date)
    if(val.getFullYear() === selectedDate?.getFullYear() &&
       val.getMonth() === selectedDate?.getMonth() &&
       val.getDate() === selectedDate?.getDate())
        onChange(val);
    else
        onChange(null);
    setSelectedDate(val);
  };
   // const { years, monthNames, weekDayNames } = props;
   // const { currentDate, selectedDate } = this.state;
   const monthData = calendar.getMonthData(year, month);
    return (
        <div className="calendar">
          <div className="head">
                <button onClick={handlePrevMonthButtonClick} className="calendar-button-month">{'<'}</button>

                <select
                    ref={monthSelect}
                    value={month}
                    onChange={handleSelectChange}
                >
                    {monthNames.map((name, index) =>
                        <option key={name} value={index}>{name}</option>
                    )}
                </select>

                <select
                    ref={yearSelect}
                    value={year}
                    onChange={handleSelectChange}
                >
                    {years.map(year =>
                        <option key={year} value={year}>{year}</option> 
                    )}
                </select>

                <button onClick={handleNextMonthButtonClick} className="calendar-button-month">{'>'}</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>    
                        )}
                    </tr>
                </thead>

                <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className="week">
                            {week.map((date, index) => date ?
                                <td
                                    key={index}
                                    className={classnames('day', {
                                        'today': calendar.areEqual(date[0], currentDate),
                                        'selected': calendar.areEqual(date[0], selectedDate)
                                    }, date[1])}
                                    onClick={() => handleDayClick(date[0])}
                                >{date[0].getDate()}</td>
                                :
                                <td key={index} />
                            )}
                        </tr> 
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default withScheduler(Calendar);