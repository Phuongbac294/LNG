import React from "react";
import './page.css';

const goldArr =[
    {company: 'DOJI', mua:68.050, ban:68.850},                
    {company: 'SJC', mua:68.150, ban:68.870},
    {company: 'PNJ', mua:56.350, ban:57.350},
    {company: 'VTB', mua:68.150, ban:68.870},
    
]

const GoldList = (porps) => {
    return (
    <tr>
        <td className="table_cp_33">{porps.company}</td>
        <td className="table_cp_33">{porps.mua}</td>
        <td className="table_cp_33">{porps.ban}</td>
    </tr>
    )
}

function PageGold(params) {
    return (
        <div className="cp">
             <h3 style={{lineHeight:1.6, backgroundColor:"#FFFF33", marginTop:10, marginBottom: 10}}>Giá vàng trong nước</h3>
            <table className="table_cp">
                <th>
                    <td className="table_cp_33">Thương hiệu</td>
                    <td className="table_cp_33">Mua vào</td>
                    <td className="table_cp_33">Bán ra</td>
                </th>
            </table>
            <table className="table_cp">
                {goldArr.map(item => GoldList(item))}
            </table>
        </div>
    )
}

export default PageGold;