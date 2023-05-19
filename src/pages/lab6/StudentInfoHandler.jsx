import { useEffect, useState } from "react"
// import ReactDOM from 'react-dom'
// import "../../css/lab6.css";

export default function StudentInfoHandler(props) {
    // const [container] = useState(() => {
    //     // This will be executed only on the initial render
    //     // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    //     return document.createElement('div');
    // });
    const [data, setData] = useState(props.data);
    useEffect(() => {
        const setField = (prop, value) => {
            setData({
                ...data,
                [prop]: value
            })
        }
        const interval = setTimeout(() => {
            const date = new Date();
            const course = data["Год поступления"] !== "" ? (date.getFullYear()-data["Год поступления"] > 4 ? "Окончил университет" : date.getFullYear()-data["Год поступления"]) : "Ожидание..."
            const age = data["Дата рождения"] !== "" ? date.getFullYear()-data["Дата рождения"] : "Ожидание..."
            data["Курс"] = course
            data["Возраст"] = age
            data["Оператор услуг электронной почты"] = data["Электронная почта"].split("@").pop()

            const regex = /^\+?375(\s*(?=25|29|33|44)\d{2}\s*[-]?\s*\d{3}\s*[-]?\s*\d{2}\s*[-]?\s*\d{2})$/
            const match = data["Номер телефона"].match(regex);
            let operator = "Ожидание...";

            if(match) {
                if (match[1].match(/^44|(29(?=(1|3|6|9)))/))
                    operator = "A1"
                if(match[1].match(/^33|(29(?=(2|5|7|8)))/))
                    operator = "МТС"
                if(match[1].match(/^25/))
                    operator = "life :)"
            }
            if(data["Номер телефона"].match(/^(80|\+375)(?=17)\d{7}/))
                operator = "Белтелеком (городской)"
            
            setField("Оператор мобильной связи", operator)
            // setData(data);
            window.focus()
        }, 1000)

        return () => clearTimeout(interval);
    })
    useEffect(() => {
        setData({...props.data})
    },[props])
    // useEffect(() => {
    //     const externalWindow = window.open('','','popup,left=200,top=200,width=1000,height=200');
    //     externalWindow.document.write("<html><head></head><body><table style='border-collapse: collapse;'><tr>");
    //     Object.keys(data).map(el => externalWindow.document.write(`<th style='border: 1px solid; padding: 15px'>${el}</th>`))
    //     externalWindow.document.write("<tr>")
    //     Object.values(data).map(el => externalWindow.document.write(`<td style='border: 1px solid; padding: 15px'>${el}</td>`))
    //     const extBody = externalWindow.document.body
    //     // externalWindow.resizeTo(extBody.clientWidth, 200)
    //     externalWindow.blur()
    //     window.focus()
    //     return () => {
    //         externalWindow.close();
    //     }
    // }, [data])
    return(<div className="lab6-student-info-wrapper">
        <table className="lab6-student-info-handler-table">
            <tbody>
                {Object.keys(data).map((el,i) =>
                    <tr key={i}>
                        <td key={i+100}>{el}</td>
                        <td key={i+1000}>{data[el]}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>)
}