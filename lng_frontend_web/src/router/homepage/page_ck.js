import React from "react";
import '../../css/base.css';
import './page.css';



function PageCk(params) {
    const htp = "https://www.24h.com.vn/tin-chung-khoan-c566.html?id_san_ck=10"
    return (
        <div className="cp">
            <h3 style={{lineHeight:1.6, backgroundColor:"#CCFFCC", marginTop:10, marginBottom: 10}}>Thông tin chứng khoáng</h3>
            {htp}
        </div>
    )
}

export default PageCk;