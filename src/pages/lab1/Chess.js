export default function Chess() {
    let lettersArr = ["a", "b", "c", "d", "e", "f", "g", "h"];

    const createDesk = () => {

        let rows = [];
        let cells = [];

        for (let i = 1; i <= 8; i++) {

            cells.push(<td className="notations">{i}</td>);
            if (i % 2 === 1) {
                for (let j = 0; j < 8; j++) {
                    if (j % 2 === 0) {
                        cells.push(<td className="pale"></td>)
                    } else {
                        cells.push(<td className="brown"></td>)
                    }
                }
            } else {
                for (let j = 0; j < 8; j++) {
                    if (j % 2 === 0) {
                        cells.push(<td className="brown"></td>)
                    } else {
                        cells.push(<td className="pale"></td>)
                    }
                }
            }

            cells.push(<td className="notations">{i}</td>);
            rows.push(<tr>{cells}</tr>);
            cells = [];
        }

        return rows;
    }

    return (
        <div className="task3">
            <h2>Задание 3</h2>
            <table className="chessboard">
                <tbody>
                    <tr><td key="100"></td>{lettersArr.map((letter, i) => <td className="notations" key={i}>{letter}</td>)}<td key="10000"></td></tr>
                    {createDesk()}
                    <tr><td key="1000"></td>{lettersArr.map((letter, i) => <td className="notations" key={i+100}>{letter}</td>)}<td key="1000000"></td></tr>
                </tbody>
            </table>
        </div>

    );
}