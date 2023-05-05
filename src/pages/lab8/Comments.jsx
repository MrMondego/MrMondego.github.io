import { useRef, useState, useEffect } from "react";

function formatDate() {
   let date = new Date();
   const day = date.getDate().toString().padStart(2, '0');
   const month = date.getMonth().toString().padStart(2, '0');
   const year = date.getFullYear().toString();

   return `${day}.${month}.${year}`;
}
function Comment(props) {
   const [componentProps, setComponentProps] = useState(null);
   const [onEdit, setEdit] = useState(false);

   const textArea = useRef(null);

   useEffect(() => {
      setComponentProps(props)
      // eslint-disable-next-line
   }, [])
   
   const toggleEdit = () => {
      setEdit(!onEdit);
   }
   const handleConfirmClick = () => {
      setComponentProps({...componentProps, text: textArea.current.value})
      toggleEdit();
   }
   const handleDeleteClick = () => {
      const enter = prompt("Введите секретное слово", '');
      if(enter === props.secretWord)
         props.onDelete(props.id);
      else
         alert("Неверно")
   }
   return(<div className="comment">
      <img className="comment__avatar" src={props.imageSrc} alt="Аватар" />
      <div className="comment__content">
         <div className="comment__author">{props.author}, в {formatDate()}</div>
         {!onEdit ? <p className="comment__text">{componentProps?.text}</p> :<>
         <textarea ref={textArea} defaultValue={props.text}></textarea>
         <button className="comment__button-confirm" onClick={handleConfirmClick}>Применить</button></>}
      </div>
      {!onEdit && <><button className="comment__button comment__button_edit" onClick={toggleEdit}></button>
      <button className="comment__button comment__button_delete" onClick={handleDeleteClick}></button></>}
   </div>)
}
export default function Comments() {
   const inputAuthor = useRef(null);
   const selectAvatar = useRef(null);
   const avatarImg = useRef(null);
   const inputEmail = useRef(null);
   const inputText = useRef(null);
   const inputSecretWord = useRef(null);

   // const comments = useRef([]);
   const [comments, setComments] = useState([]);

   const avatarsSrc = [
      "avatar_guest.svg",
      "avatar_cat.jpg",
      "avatar_fox.jpg",
      "avatar_wolf.jpg"
   ]

   const handleSubmit = e => {
      e.preventDefault();
      let newComments = [...comments];
      console.log(comments.length)
      newComments.push(<Comment
            imageSrc={avatarImg.current.src}
            author={inputAuthor.current.value}
            text={inputText.current.value}
            secretWord={inputSecretWord.current.value}
            id={comments.length+1}
            onDelete={handleDeleteComment}
            key={comments.length+1}/>)
      console.log(comments.length)
      setComments(newComments);
      // console.log(comments);
      // comments.current.push("aboa");
      // console.log(comments.current)
      inputText.current.value = '';
      inputSecretWord.current.value = '';
   }
   const handleDeleteComment = id => {
      const newChildren = comments.filter((child) => child.id !== id);
      if(newChildren.length === 0) {
         newChildren.push(comments);
         newChildren.shift();
         setComments(newChildren);
      } else
         setComments(newChildren);
      console.log(comments);
   }
   useEffect(() => {
      setComments(comments);
      console.log(comments);
   }, [comments])

   return(<>
   <form onSubmit={handleSubmit} id="comments-form">
      <input type="text" name="author" defaultValue="Гость" ref={inputAuthor} placeholder="Введите имя" className="form-element" required />
      <div style={{display:"flex", alignItems:"center"}} className="form-element">
         <select name="choose-avatar" className="form__select" ref={selectAvatar} onChange={() => {avatarImg.current.src = avatarsSrc[selectAvatar.current.value]}} >
            <option value="0" defaultChecked>По умолчанию</option>
            <option value="1">Кот</option>
            <option value="2">Лиса</option>
            <option value="3">Волк</option>
         </select>
         <img src={process.env.PUBLIC_URL + `/avatar_guest.svg`} ref={avatarImg} alt="Аватар" />
      </div>
      <input type="email" name="email" ref={inputEmail} className="form-element form-element_bigger" placeholder="Введите адрес электронной почты" required />
      <textarea type="text" name="comment-text" ref={inputText} className="form-element form-element_text" placeholder="Введите комментарий" required />
      <input type="text" name="secret-word" ref={inputSecretWord} placeholder="Секретное слово для удаления" className="form-element form-element_bigger" required />
      <input type="submit" value="Отправить" className="form__button" form="comments-form" />
   </form>
   {comments.map((el) => el)}
   </>)
}