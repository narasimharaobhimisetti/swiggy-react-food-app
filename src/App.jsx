
import React from 'react';
import "./App.css";
import LandingPage from './Suby/pages/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductMenu from './Suby/components/ProductMenu';


const App = () => {
  return (
   <>
   <div>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<LandingPage/>}  />
      <Route  path='/product/:firmId/:firmName' element={<ProductMenu/>}  />
    </Routes>
    </BrowserRouter>
   </div>
   </>
  );
}

export default App;
