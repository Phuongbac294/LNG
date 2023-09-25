
import {Routes, Route, Router  } from 'react-router-dom';
import { publicRoutes } from './router';
// import Headers from './Pages/Header';
// import Footer from './Pages/Footer/footer';

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
        {/* <Headers/>

        <div className='maincontent'> */}
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
            })}
          </Routes>
        {/* </div>
  
  			  <Footer/> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
