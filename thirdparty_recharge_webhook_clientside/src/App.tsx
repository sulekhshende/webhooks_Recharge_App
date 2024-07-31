import { CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RequestedRecharges from './pages/RequestedRecharges';
import UpdatedRecharges from './pages/UpdatedRecharges';




function App() {
  return (
    <>
     <CssBaseline/>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='requestedRecharges/*' element={<RequestedRecharges />} />
        <Route path='updatedRecharges/' element={<UpdatedRecharges />} />
      </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;
