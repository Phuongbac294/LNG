import React from "react";
import './page.css';
import PageCP from './page_rigth_cp';
import PageExchangeRate from "./page_rigth_exchangeRate";
import PageGold from "./page_right_gold";
import PageCk from "./page_ck";


function PageRigth(params) {
    
    return (
        <div className="page-rigth">
            <PageCP/>
            <PageExchangeRate/>
            <PageGold/>
            <PageCk/>
        </div>
    )
}

export default PageRigth