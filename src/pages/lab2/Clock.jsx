import moment from "moment-timezone";
import { useState, useEffect } from "react"

// async function getZones() {
//     let response = await fetch('https://api.github.com/repos/moment/moment-timezone/contents/data/packed/latest.json');
//     if (response.ok) { 
//         let json = await response.json();
//         console.log(json);
//         return json;
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
// }

export default function Clock(props) {
    const [time, setTime] = useState(null);
    // let data = getZones();
    // let zones;
    // let links = data.then(data => {
    //     return JSON.parse(atob(data.content)).links.forEach((el) => moment().tz(el).format('Z'));
    // });
    // console.log(zones)
    const names = moment.tz.names();
    // console.log(zones.findIndex(el => el === '+01:00'))
    // function refreshClock() {
    //     setTime( moment().tz(names[zones.findIndex(el => el === props.timezone)]).format('HH:mm:ss Z') )
    // }
    useEffect(() => {
        let zones = [];
        for(let i = 0; i < names.length; i++) {
            zones.push(moment().tz(names[i]).format('Z'))
        }
        const timerId = setInterval(() => {setTime( moment().tz(names[zones.findIndex(el => el === props.timezone)]).format('HH:mm:ss Z') )}, 1000);
        
        return function cleanup() {
            clearInterval(timerId);
        };
      }, [names, props.timezone]);
    // console.log(moment().tz("Asia/Seoul").format())
    return(<>
        <div className="clock">{time}</div>
    </>)
}