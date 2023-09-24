// import logo from './logo.svg';
import './css/base.css';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './router/header';
import NaviMenu from './router/naviMenu'
import Home from './router/home';
// import Product from './router/product';
import Footer from './router/footer';
// import Login from './router/login';
// import Register from './router/register';
// import Service from './router/service';
// import Contact from './router/contact';
// import TongHop from './router/user/tonghop';
// import QuanLy from './router/user/quanly';
// import BaoVe from './router/user/baove';
// import KhoBon from './router/user/khobon';
// import KhoSanXuat from './router/user/khosanxuat';
// import Xe from './router/user/xe';

function App() {
  return (
    <div className="App">
      <div className="header_title">
        <Header/>
        <NaviMenu/>
      </div>
      <div className='maincontent'>
        <Routes >
          <Route path="/" element={<Home />} />
          {/* <Route path="/Product" element={<Product />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} /> */}
          {/* <Route path="/Register" element={<Register />} /> */}
          {/* <Route path="/TongHop" element={<TongHop />} />
          <Route path="/QuanLy" element={<QuanLy />} />
          <Route path="/BaoVe" element={<BaoVe />} />
          <Route path="/KhoBon" element={<KhoBon />} />
          <Route path="/KhoSanXuat" element={<KhoSanXuat />} />
          <Route path="/Xe" element={<Xe />} /> */}

			  </Routes>
      </div>
			  <Footer/>
    </div>
  );
}

export default App;
