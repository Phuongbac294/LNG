import React from "react";
import '../Home/home.css'
import './page.css';
import anh0 from "./img/gia-gas-hom-nay-9-9-20230909092224307.png"
import anh1 from "./img/dau_89.jpeg";
import anh2 from "./img/vang_89.jpeg";
import anh3 from "./img/ck_89.jfif";


const Page11 = () => {
    return (
        <div className="col_9 page_11">
                <div className="page_h1">
                    Giá gas hôm nay 9/9: Tiếp đà phục hồi, giá khí đốt tự nhiên tăng hơn 1,5%
                </div>
                <div className="row">
                    <div className="page_50">
                        <p>Giá gas hôm nay (9/9) tiếp đà tăng với mức điều chỉnh hơn 1,5% sau phiên sáng qua. Tại châu Âu, giá khí đốt tăng mạnh khi công nhân tại các cơ sở khí đốt tự nhiên của Chevron ở Australia đình công, làm dấy lên lo ngại rằng việc ngừng sản xuất kéo dài có thể gây áp lực lên nguồn cung toàn cầu.</p>
                    </div>
                    <div className="page_50">
                        <img src={anh0} alt="giá gas" className="page_img"/>
                    </div>
                </div>

            </div>
    )
}


const Page12 =(props) => {
    return (
        <div className="page_12_col">
            <div className="page_12_img">
                <img src={props.img} alt="load anh" className="page_anh"/>
            </div>
            <div className="page_12_h">
                {props.p}
            </div>
        </div>
    )
}

function Page1(params) {
    return (
        <div className="page">
            <Page11/>
            <div className="page_12 row">
                <Page12 img={anh1} p="Mối lo về nguồn cung vẫn ám ảnh thị trường dầu mỏ"/>
                <Page12 img={anh2} p="JPMorgan: Đầu tư vào vàng tăng mạnh nhất kể từ năm 2012"/>
                <Page12 img={anh3} p="Các nhịp điều chỉnh 20 - 40 điểm có thể mở ra cơ hội mua cổ phiếu trong trong tháng 9?"/>
            </div>
        </div>
    )
}

export default Page1