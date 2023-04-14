import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom'

export default function StudentInfoHandler({data}) {
    const [container] = useState(() => {
        // This will be executed only on the initial render
        // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
        return document.createElement('div');
    });
    useEffect(() => {
        const externalWindow = window.open('','','width=600,height=400,left=200,top=200');
        externalWindow.document.body.appendChild(container);
        return () => {
            externalWindow.close();
        }
    })
    return ReactDOM.createPortal(<table className="lab6-student-info-handler-table">
        <thead>
            <tr>
                {Object.keys(data).map((val, k) => {
                    return(<th key={k}>{val}</th>)
                })}
            </tr>
        </thead>
        <tbody>
            <tr>
        {Object.values(data).map((val, k) => {
            return (<td key={k}>{val}</td>)
        })}
            </tr>
        </tbody>
    </table>, container)
}