import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';

import { DishGetter } from './hooks/DishGetter';
import { LocalDB } from './hooks/LocalDB';

import Menu from './components/Dishes/Menu';
import Settings from './components/Settings/Settings';




document.title = 'Platter';
document.querySelector("meta[name='description']").content="New menu every day.";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Menu DishGetter={DishGetter} LocalDB={LocalDB}/>
      <Settings DishGetter={DishGetter} LocalDB={LocalDB}/>
  </>

  // <HashRouter>
  //   <Routes>
  //     <Route exact path="/" element={ <div>hello world</div> } />
  //     <Route exact path="/dishmenu" element={ <DishMenu /> } />
  //     <Route exact path="/settings" element={ <Settings /> } />
  //   </Routes> 
  // </HashRouter>
); 
