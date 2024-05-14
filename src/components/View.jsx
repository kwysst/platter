import { useSwipe } from '../hooks/useSwipe';

import { DishesView } from './Dishes/DishesView';
import { SettingsView } from './Settings/SettingsView';


export const View = (props) => {
    
    const { onTouchStart, onTouchEnd } = useSwipe(
        () => document.getElementById('root').scroll({top: 0, left: 1000, behavior: 'smooth'}), 
        () => document.getElementById('root').scroll({top: 0, left: 0, behavior: 'smooth'})
    )

    return props.name === 'dishes' ? 
        <DishesView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}/> : 
        <SettingsView onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}/>
}