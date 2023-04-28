import { useState, useRef, useEffect } from "react";

export default function Notes({ initArr=[], defaultDate = undefined, handleNotes = Function.prototype, children }) {
   const [notesArr, setNotesArr] = useState(initArr);
   // const notesArray = useMemo(() => setNotesArr(notesArr), [notesArr]);
   const [noteData, setNoteData] = useState({
      title: "",
      date: defaultDate || "Дата не указана",
      text: ""
   })
   const [backColor, setBackColor] = useState("rgb(215, 204, 48)")
   const noteTitleRef = useRef(null);
   const noteDateRef = useRef(null);
   const noteTextRef = useRef(null);
   // const noteButtonCreateRef = useRef(null);

   const setField = (prop, val) => {
      setNoteData({
         ...noteData,
         [prop]: val
      })
      // console.log(noteData)
   }
   const handleOnChangeInput = e => {
      setField(e.target.name, e.target.value);
   }
   // const handleOnClickCreateNote = e => {
   //    console.log(noteData.title)
   //    if(noteData.title === "" || noteData.title === undefined)
   //       return;
   //    setNotesArr(prevState => [...prevState, <div className="notes-container__note" style={{background: backColor}} key={notesArr.length}>
   //       {(notesArr.length > 6) && <h2>У вас слишком много заметок</h2>}
   //       <h2>{noteData.title}</h2>
   //       <h2>{noteData.date}</h2>
   //       <p>{noteData.text}</p>
   //    </div>])
   // }
   useEffect(() => {
      if(notesArr.length > 6) {
         setBackColor("rgb(215, 54, 48)")
         // console.log(notesArr.length)
      } else {
         setBackColor("rgb(215, 204, 48)")
      }
      // console.log(notesArray)
      handleNotes(notesArr);
   }, [notesArr, handleNotes])

   useEffect(() => {
      setNotesArr(initArr);
      setField("date", defaultDate);
   }, [initArr, defaultDate])
   
   useEffect(() => {
      setNoteData(noteData)
      // console.log(noteData)
   }, [noteData])

   const handleSubmit = e => {
      e.preventDefault();
      if(noteData.title === "" || noteData.title === undefined)
         return;
      setNotesArr(prevState => [...prevState, <div className="notes-container__note" style={{background: backColor}} key={notesArr.length}>
         {(notesArr.length > 6) && <h2>У вас слишком много заметок</h2>}
         <h2>{noteData.title}</h2>
         <h2>{noteData.date}</h2>
         <p>{noteData.text}</p>
      </div>])
      e.target.reset();
      setNoteData({
         title: "",
         date: defaultDate || "Дата не указана",
         text: ""
      })
      // console.log(noteData)
   }

   return(<>
      <form className="create-note-container" onSubmit={handleSubmit}>
         <input type="text" name="title" placeholder="Заголовок заметки" ref={noteTitleRef} onChange={handleOnChangeInput} />
         <input
            type="date"
            name="date"
            placeholder="Дата заметки"
            ref={noteDateRef}
            onChange={handleOnChangeInput}
            disabled={defaultDate}
            value={defaultDate}
         />
         <textarea cols="30" name="text" rows="10" placeholder="Текст заметки здесь" ref={noteTextRef} onChange={handleOnChangeInput}></textarea>
         <button name="createNote" value="" style={{width: "fit-content", marginLeft: "10px"}} type="submit" >Создать заметку</button>
         {notesArr.length >= 3 && <>
            <button onClick={() => setNotesArr(notesArr.slice(1))} >Удалить первую заметку</button>
            <button onClick={() => setNotesArr(notesArr.slice(0, -1))} >Удалить последнюю заметку</button>
         </>}
         {children}
      </form>
   </>)
}