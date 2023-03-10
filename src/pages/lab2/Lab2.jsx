import Clock from "./Clock";
import '../../css/lab2.css';

export default function Lab2() {
    return(<>
        <h1>Задание 1</h1>
        <Clock timezone='+06:00' />
        <Clock timezone='+03:00' />
        <Clock timezone='+01:00' />
    </>);
}