import React from "react";
import '../../css/base.css';
import './page.css';

const exarr =[
    {ma: 'USD', tienmat:23.890, chuyenkhoan:23.920, ban: 24.260},                
    {ma: 'EUR', tienmat:25.147, chuyenkhoan:25.401, ban: 26.554},
    {ma: 'GBP', tienmat:29.307, chuyenkhoan:29.603, ban: 30.555},
    {ma: 'JPY', tienmat:160, chuyenkhoan:162, ban: 169},
    {ma: 'AUD', tienmat:15.008, chuyenkhoan:15.160, ban: 15.647},
    {ma: 'SGD', tienmat:17.214, chuyenkhoan:17.388, ban: 17.948},
    
]

const ExList = (porps) => {
    return (
    <tr>
        <td className="table_cp_25">{porps.ma}</td>
        <td className="table_cp_25">{porps.tienmat}</td>
        <td className="table_cp_25">{porps.chuyenkhoan}</td>
        <td className="table_cp_25">{porps.ban}</td>

    </tr>
    )
}

function PageExchangeRate(params) {
    return (
        <div className="cp">
             <h3 style={{lineHeight:1.6, backgroundColor:"#FFFF99", marginTop:10, marginBottom: 10}}>Tỷ giá ngân hàng Vietcombank</h3>
            <table className="table_cp">
                <th>
                    <td className="table_cp_25">Ngoại tệ</td>
                    <td className="table_cp_25">Mua tiền mặt</td>
                    <td className="table_cp_25">Mua chuyển khoản</td>
                    <td className="table_cp_25">Bán</td>

                </th>
            </table>
            <table className="table_cp">
                {exarr.map(item => ExList(item))}
            </table>
        </div>
    )
}

export default PageExchangeRate;