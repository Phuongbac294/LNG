import React from "react";
import '../../css/base.css';
import './page.css';
import PageCP from './page_rigth_cp';
import PageExchangeRate from "./page_rigth_exchangeRate";
import PageGold from "./page_right_gold";


function PageRigth(params) {
    return (
        <div className="page-rigth">
            <PageCP/>
            <PageExchangeRate/>
            <PageGold/>
        </div>
    )
}

export default PageRigth