import Clock from "./Clock";
import '../../css/lab2.css';
import JobMenu from "./JobMenu";

export default function Lab2() {
    document.title = "Лабораторная №2";
    return(<>
        <h1>Задание 1</h1>
        <Clock timezone='+06:00' />
        <Clock timezone='+03:00' />
        <Clock timezone='+01:00' />

        <JobMenu />
    </>);
}