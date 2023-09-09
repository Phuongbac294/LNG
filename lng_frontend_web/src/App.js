// import logo from './logo.svg';
import './css/base.css';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './router/header';
import NaviMenu from './router/naviMenu'
import Home from './router/home';
import Content from './router/content';
import Footer from './router/footer';
import Login from './router/login';
import Register from './router/register';


function App() {
  return (
    <div className="App">
      <div className="header_title">
        <Header/>
        <NaviMenu/>
      </div>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Content" element={<Content />} />

          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
			  </Routes>
			  <Footer/>
    </div>
  );
}

export default App;
