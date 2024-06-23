import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyRecharges from './pages/MyRecharges';



function App() {
  return (
    <>
     <CssBaseline/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='myRecharges/*' element={<MyRecharges />} />
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
