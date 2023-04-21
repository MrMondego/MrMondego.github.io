import { useState, useRef, useEffect } from "react";

export default function Notes() {
   const [notesArr, setNotesArr] = useState([]);
   const [noteData, setNoteData] = useState({
      title: "",
      date: "",
      text: ""
   })
   const [backColor, setBackColor] = useState("rgb(215, 204, 48)")
   const noteTitleRef = useRef(null);
   const noteDateRef = useRef(null);
   const noteTextRef = useRef(null);
   const noteButtonCreateRef = useRef(null);

   const setField = (prop, val) => {
      setNoteData({
         ...noteData,
         [prop]: val
      })
      console.log(noteData)
   }
   const handleOnChangeInput = e => {
      setField(e.target.name, e.target.value);
   }
   const handleOnClickCreateNote = e => {
      console.log(notesArr.length)
      if(notesArr.length > 6)
         setBackColor("rgb(215, 54, 48)")
      else
         setBackColor("rgb(215, 204, 48)")
      setNotesArr(prevState => [...prevState, <div className="notes-container__note" style={{background: backColor}} key={notesArr.length}>
         {(notesArr.length > 6) && <h2>У вас слишком много заметок</h2>}
         <h2>{noteData.title}</h2>
         <h2>{noteData.date}</h2>
         <p>{noteData.text}</p>
      </div>])
      console.log(notesArr.length)
   }
   const handleSubmit = e => {
      e.preventDefault();
      e.target.reset();
      setNoteData({})
   }

   return(<>
      <form className="create-note-container" onSubmit={handleSubmit}>
         <input type="text" name="title" placeholder="Заголовок заметки" ref={noteTitleRef} onChange={handleOnChangeInput} />
         <input type="date" name="date" placeholder="Дата заметки" ref={noteDateRef} onChange={handleOnChangeInput} />
         <textarea cols="30" name="text" rows="10" placeholder="Текст заметки здесь" ref={noteTextRef} onChange={handleOnChangeInput}></textarea>
         <button name="createNote" value="" style={{width: "fit-content", marginLeft: "10px"}} onClick={handleOnClickCreateNote}>Создать заметку</button>
         {notesArr.length >= 3 && <>
            <button onClick={() => setNotesArr(notesArr.slice(1))} >Удалить первую заметку</button>
            <button onClick={() => setNotesArr(notesArr.slice(0, -1))} >Удалить последнюю заметку</button>
         </>}
      </form>
      <div className="notes-container">
         {notesArr.map(entry => entry)}
      </div>
   </>)
}