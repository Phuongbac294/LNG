// import logo from './logo.svg';
import './css/base.css';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './router/header';
import NaviMenu from './router/naviMenu'
import Home from './router/home';
import Product from './router/product';
import Footer from './router/footer';
import Login from './router/login';
// import Register from './router/register';
import Service from './router/service';
import Contact from './router/contact';


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
          <Route path="/Product" element={<Product />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />

			  </Routes>
      </div>
			  <Footer/>
    </div>
  );
}

export default App;
