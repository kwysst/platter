import React from 'react';
import '../../styles/dishes/dish-btns.css';

export default class Buttons extends React.Component {
	render() {
		return <div className='dish-btn-wrap'>
        <button className='dish-refresh-btn' onClick={() => {
            this.props.UpdateMenuState(this.props.GetNewMenu());
        }}>Обновить</button>
        <button className='dish-settings-btn' onClick={() => {
            document.getElementById('root')
                .scroll({top: 0, left: 1000, behavior: 'smooth'});
        }}></button>
    </div>
	}
}
