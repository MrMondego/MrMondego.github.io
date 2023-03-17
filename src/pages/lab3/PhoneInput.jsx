// import "../../lib";
import ReactIntlTelInput from 'react-intl-tel-input-v2';
import 'intl-tel-input/build/css/intlTelInput.css';
import { useEffect, useState } from 'react';


// const numberPatterns = [
//     '+7 (NNN) NNN-NN-NN',  // Россия и Казахстан
//     '+375 NN NNN-NN-NN',   // Беларусь
//     '+380 (NN) NNN-NN-NN', // Украина
//     '+48 NNN-NNN-NNN',     // Польша
//     '+370 (NN) XXX-XX-XX', // Литва
//     '+371 NNNN-NNNN'       // Латвия
// ];

function Operator(props) {
    console.log("Operator", props.num)
    switch(props.num) {
        default: return(<></>)
        case 1:
            return(<>
                <label><input type="radio" value="МТС" /> МТС</label>
                <label><input type="radio" value="A1" /> А1</label>
                <label><input type="radio" value="life:)" /> life:)</label>
            </>)
    }
}

export default function PhoneInput() {
    // console.log(.includes("China"));
    const [num, setNum] = useState(0);
    useEffect(() => {
        const title = document.getElementsByClassName("iti__selected-flag")[0].attributes.getNamedItem("title").value;
        if(title.includes("Belarus"))
            setNum(1);
    }, [])
    return(<div className="phone-input">
        <label>Ваш телефон</label>
        <ReactIntlTelInput />
        <Operator num={num} />
    </div>)
}