import React from 'react';
import axios from 'axios';
import '../css/table.css';
// import { json } from 'react-router-dom';

const Tieude = (props) => {
    return (
        <th className='tieude grid'>
            <td className='tieude_5'>TT</td>
            <td className='tieude_10'>Tên</td>
            <td className='tieude_10'>Tuổi</td>
            <td className='tieude_5' >Sửa</td>
        </th>
    )
}




var Api = "http://localhost:3000/courser"
var getApi = await axios.get(Api)
const Data = getApi.data



function Product(props) {
    const [name, setName] = React.useState()
    const [age, setAge] = React.useState()
    console.log(`name: ${name}, age: ${age}`);
    const hanlder = () => {
        const user = { name: name, age: age}
        axios.post(Api, user)
        setName("");
        setAge("")
    }
    // const Delete = (id) => {
    //     console.log(id);
    //     axios.delete(Api, id)
    // }

    const DanhSach = (prop) => {
        return (
            <tr className='tieude grid' style={{backgroundColor: '#fff'}}>
                <td className='tieude_5'>{prop.id}</td>
                <td className='tieude_10'>{prop.name}</td>
                <td className='tieude_10'>{prop.age}</td>
                <td className='tieude_5' >Delete</td>
            </tr>
        )
    }

    return (
        <div className='grid'>
            <h3 className="">Danh sách nhân viên</h3> 
            <table>
                <Tieude/>
            </table>           
            <table>
                {Data.map(item => DanhSach(item))}
            </table>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <input type='number' value={age} onChange={e => setAge(e.target.value)} />
            <button type='submit' onClick={hanlder}></button>
        </div>
    )
}

export default Product;