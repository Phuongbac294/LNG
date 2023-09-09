import React from "react";
import '../../css/base.css';
import './page.css';

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
                <tr>
                    <td>9-023</td>
                    <td>790</td>
                    <td>790</td>
                </tr>
                <tr>
                    <td>8-2023</td>
                    <td>790</td>
                    <td>790</td>
                </tr>
                <tr>
                    <td>7-2023</td>
                    <td>790</td>
                    <td>790</td>
                </tr>
                <tr>
                    <td>6-2023</td>
                    <td>790</td>
                    <td>790</td>
                </tr>
                <tr>
                    <td>5-2023</td>
                    <td>790</td>
                    <td>790</td>
                </tr>
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