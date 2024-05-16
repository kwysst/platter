import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import './styles/root.css';
import './styles/fonts.css';
import './styles/footer-btns.css';

import { Themes } from './hooks/Themes';
import { LocalStorage } from './hooks/LocalStorage';
// import { DishesData } from './hooks/DishesData';

import { View } from './components/View'

Themes.SetTheme(Themes.GetTheme());

LocalStorage.CheckForUpdates();
// LocalStorage.SetMenu(DishesData.GetMenu(LocalStorage.GetMenu(), LocalStorage.GetSchema()));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <View name='dishes'/>
    <View name='settings'/>
  </>
); 