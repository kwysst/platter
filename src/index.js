import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';
import { DishMenu } from './DishMenu/components/DishMenu.jsx';
import { Settings } from './Settings/components/Settings.jsx';

document.title = 'Platter';
document.querySelector("meta[name='description']").content="New menu every day.";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={ <div>hello world</div> } />
      <Route exact path="/dishmenu" element={ <DishMenu /> } />
      <Route exact path="/settings" element={ <Settings /> } />
    </Routes> 
  </HashRouter>
); 
