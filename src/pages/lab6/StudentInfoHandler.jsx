export default function StudentInfoHandler({data}) {
    return(<table className="lab6-student-info-handler-table">
        <tbody>
            <tr>
        {Object.values(data).map((val, k) => {
            return (<td key={k}>{val}</td>)
        })}
            </tr>
        </tbody>
    </table>)
}