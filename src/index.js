import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/platter/" element={ <App /> } />
      <Route path="/platter/two/" element={<div>hello on two</div>} />
    </Routes> 
  </BrowserRouter>
); 
