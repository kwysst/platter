import React from 'react';
import { ReactComponent as RefreshIcon } from '../../source/icons/refresh.svg'
import { ReactComponent as SettingsIcon } from '../../source/icons/settings2.svg'
import { ReactComponent as ListIcon } from '../../source/icons/list.svg'
import '../../styles/dishes/dish-btns.css';

export default class Buttons extends React.Component {
	render() {
        console.log(this.props)
		return <div className='dish-btn-wrap'>
        <button className='dish-list-btn' onClick={() => {
            this.props.ShowSelect();
        }}><ListIcon /></button>
        <button className={`dish-refresh-btn ${!this.props.listIsMenu ? 'dish-btn-disabled' : ''}`} onClick={() => {
            if (this.props.listIsMenu) 
                this.props.UpdateMenuState();
        }}><RefreshIcon /></button>
        <button className='dish-settings-btn' onClick={() => {
            document.getElementById('root')
                .scroll({top: 0, left: 1000, behavior: 'smooth'});
        }}><SettingsIcon /></button>
    </div>
	}
} 
