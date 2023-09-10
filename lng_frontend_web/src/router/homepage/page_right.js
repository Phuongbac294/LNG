import React from "react";
import '../../css/base.css';
import './page.css';

const cpary =[
                {month: '09-2023', c3:630, c4:640},                
                {month: '08-2023', c3: 790, c4:790},
                {month: '07-2023', c3:590, c4:600},
                {month: '06-2023', c3:630, c4:640},
                {month: '05-2023', c3:630, c4:640},
                {month: '04-2023', c3:630, c4:640},
                {month: '03-2023', c3:630, c4:640},
                {month: '02-2023', c3:630, c4:640},
                {month: '01-2023', c3:630, c4:640},
                
            ]

const Cplist = (porps) => {
    return (
        <tr>
            <td>{porps.month}</td>
            <td>{porps.c3}</td>
            <td>{porps.c4}</td>
        </tr>
    )
}

const CP = (porps) => {
    return (
        <div className="cp">
            <h3 style={{lineHeight:1.6, backgroundColor:"red", marginTop:10}}>Giá CP LPG thế giới Saudi Aramco (USD)</h3>
            <table className="table_cp">
                <th>
                    <td>Tháng</td>
                    <td>PROPANE (C3)</td>
                    <td>BUTAN (C4)</td>
                </th>
                {cpary.map(item => Cplist(item))}
            </table>
        </div>
    )
}









function PageRigth(params) {
    return (
        <div className="page-rigth">
            <CP/>
        </div>
    )
}

export default PageRigth