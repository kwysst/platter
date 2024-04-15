import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';
import { DishMenu } from './DishMenu/components/DishMenu.jsx';
import { Settings } from './Settings/components/Settings.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/platter/dishmenu/" element={ <DishMenu  /> } />
      <Route path="/platter/settings/" element={ <Settings  /> } />
    </Routes> 
  </BrowserRouter>
); 
