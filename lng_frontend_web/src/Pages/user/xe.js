import React from 'react';
import '../../css/table.css';
// import axios from 'axios';

const Tieude = (props) => {
    return (
        <th className='tieude grid'>
            <td className='tieude_5'>TT</td>
            <td className='tieude_10'>Biển số</td>
            <td className='tieude_10'>Lái xe</td>
            <td className='tieude_10'>Loại xe</td>
            <td className='tieude_10'>Thương hiệu</td>
            <td className='tieude_20'>Hiện Trạng</td>
            <td className='tieude_x' >Cảnh báo</td>
            <td className='tieude_5' >Sửa</td>
        </th>
    )
}

// const DanhSach = (prop) => {
//     return (
//         <tr className='tieude grid'>
//             <td className='tieude_5'>1</td>
//             <td className='tieude_10'>{prop.carnumber}</td>
//             <td className='tieude_10'></td>
//             <td className='tieude_10'>{prop.name}</td>
//             <td className='tieude_10'>{prop.company}</td>
//             <td className='tieude_20'></td>
//             <td className='tieude_x'></td>
//             <td className='tieude_5' >Sửa</td>
//         </tr>
//     )
// }
// 
// var ApiCar = 'http://localhost:3005/car'

// const Cardata = await axios.get("http://localhost:3000/car")
//     .then(function (res) {return res.data})
//     .catch(function (error) {console.log(error)})
//     .finally(function () {})
  
// console.log(Cardata);

// function start() {
//     getCar(renderCar)
// }

// start()

// function renderCar(courses) {
//     return courses.map(course => DanhSach(course))
// }

function Xe(props) {
    return (
        <div className='grid'>
            <h3 className="">Danh sach xe vận tải</h3>            
            <Tieude/>
            {/* <renderCar/> */}
            
        </div>
    )
}

export default Xe;