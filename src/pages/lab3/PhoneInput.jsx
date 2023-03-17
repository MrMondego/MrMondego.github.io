// import "../../lib";
import ReactIntlTelInput from 'react-intl-tel-input-v2';
import 'intl-tel-input/build/css/intlTelInput.css';
import { useState } from 'react';


// const numberPatterns = [
//     '+7 (NNN) NNN-NN-NN',  // Россия и Казахстан
//     '+375 NN NNN-NN-NN',   // Беларусь
//     '+380 (NN) NNN-NN-NN', // Украина
//     '+48 NNN-NNN-NNN',     // Польша
//     '+370 (NN) XXX-XX-XX', // Литва
//     '+371 NNNN-NNNN'       // Латвия
// ];

function Operator(props) {
    console.log("Operator", props)
    if(props.title.includes("Belarus"))
        return(<>
            <label htmlFor="operator">Выбрать оператора:</label>
            <label><input type="radio" value="МТС" name="operator" /> МТС</label>
            <label><input type="radio" value="A1" name="operator" /> А1</label>
            <label><input type="radio" value="life:)" name="operator" /> life:)</label>
        </>)
    if(props.title.includes("Russia"))
        return(<>
            <label htmlFor="operator">Выбрать оператора:</label>
            <label><input type="radio" value="МТС" name="operator" /> МТС</label>
            <label><input type="radio" value="Megafon" name="operator" /> Мегафон</label>
            <label><input type="radio" value="Bilane" name="operator" /> Билайн</label>
            <label><input type="radio" value="tele2" name="operator" /> Tele2</label>
        </>)
    if(props.title.includes("Ukraine"))
        return(<>
            <label htmlFor="operator">Выбрать оператора:</label>
            <label><input type="radio" value="Lifecell" name="operator" /> Lifecell</label>
            <label><input type="radio" value="Vodafone" name="operator" /> Vodafone</label>
            <label><input type="radio" value="Kievstar" name="operator" /> Київстар</label>
        </>)
    if(props.title.includes("Poland"))
        return(<>
            <label htmlFor="operator">Выбрать оператора:</label>
            <label><input type="radio" value="Orange" name="operator" /> Orange</label>
            <label><input type="radio" value="Play" name="operator" /> Play</label>
            <label><input type="radio" value="Plus" name="operator" /> Plus</label>
            <label><input type="radio" value="T-mobile" name="operator" /> T-mobile</label>
        </>)
    if(props.title.includes("Lithuania"))
        return(<>
            <label htmlFor="operator">Выбрать оператора:</label>
            <label><input type="radio" value="Telia" name="operator" /> Telia</label>
            <label><input type="radio" value="Bite" name="operator" /> Bite</label>
            <label><input type="radio" value="Tele2" name="operator" /> Tele2</label>
        </>)
    if(props.title.includes("Latvia"))
        return(<>
            <label htmlFor="operator">Выбрать оператора:</label>
            <label><input type="radio" value="LMT" name="operator" /> LMT</label>
            <label><input type="radio" value="Tele2" name="operator" /> Tele2</label>
            <label><input type="radio" value="Bite" name="operator" /> Bite</label>
        </>)
    return(<label>Нет операторов для страны с таким номером</label>)
}

export default function PhoneInput() {
    // console.log(.includes("China"));
    const [title, setTitle] = useState('');
    return(<div className="phone-input">
        <label>Ваш телефон</label>
        <ReactIntlTelInput onChange={()=>{setTitle(document.getElementsByClassName("iti__selected-flag")[0].attributes.getNamedItem("title").value);}} />
        <Operator title={title} />
    </div>)
}