import React from 'react';

export default function Stock() {
    let data = [{
        stock_name: "EFX",
        company_name: "Equifax Inc",
        price: 163.55,
        currency: "USD",
        change: "+9.03"
    }, {
        stock_name: "IRM",
        company_name: "Iron Mountain Inc",
        price: 33.21,
        currency: "USD",
        change: "+1.42"
    }, {
        stock_name: "NTAP",
        company_name: "NetApp Inc",
        price: 54.81,
        currency: "USD",
        change: "-6.01"
    }, {
        stock_name: "CTL",
        company_name: "Centurylink Inc",
        price: 13.79,
        currency: "USD",
        change: "-1.37"
    }]
    return(
        <>
        <h2>Задание 2</h2>
        <table id='stock'>
          <thead></thead>
          <tbody>
            <tr>
              <th>Stock name</th>
              <th>Company name</th>
              <th>Price</th>
              <th>Currency</th>
              <th>Change</th>
            </tr>
            {data.map((el, index) => (<tr key={index}>
              <td>{el.stock_name}</td>
              <td>{el.company_name}</td>
              <td className='tdCenter'>{el.price}</td>
              <td>{el.currency}</td>
              <td className={`tdCenter ${el.change[0] === '+' ? "up" : "down"}`}>{el.change}</td>
            </tr>))}
        </tbody>
      </table>
      </>
    )
}