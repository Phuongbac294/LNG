import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <div className='footer grid'>
            <div className='footer_text_h'>
                công ty cổ phần năng lượng an phú
            </div>

            <div className='footer_content'>
                <ul className='footer_list'>
                    <li>GPĐKKD: 0103158567 - do Sở kế hoạch và đầu tư thành phố Hà Nội cấp lần đầu ngày 31/12/2008</li>
                    <li>Địa chỉ trụ sở chính: Tầng 1, Khối nhà B, Sàn thương mại B4 Chung cư Imperial Sky Garden số 423 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội, Việt Nam</li>
                    <li>Điện thoại: 024 3873 6588 / 024 38 750 750          Fax: 024 3873 8568</li>
                    <li>Địa chỉ nhà máy: Lô E20-21, cụm công nghiệp đa nghề Đông Thọ, Yên Phong, Bắc Ninh</li>
                </ul>
                <ul className='footer_list'>
                    <li style={{color: "#99FFFF"}}>Email: anphugas@gmail.com</li>
                    <li style={{color: "#0066FF"}}>Facebook: anphugas</li>
                    <li style={{color: "#FF3399"}}>Youtube: anphu</li>
                    <li>Hotline: 0914 999 030</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;