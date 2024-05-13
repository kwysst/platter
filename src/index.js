import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import './styles/root.css';
import './styles/fonts.css';

import { Themes } from './hooks/Themes';
import { DishGetter } from './hooks/DishGetter';
import { LocalDB } from './hooks/LocalDB';

import Menu from './components/Dishes/Menu';
import Settings from './components/Settings/Settings';

Themes.SetTheme(Themes.GetTheme());

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
