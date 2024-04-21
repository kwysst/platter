import React from 'react';
import '../../styles/settings/settings-btns.css';

export default class Buttons extends React.Component {
	render() {
		return <div className='settings-btn-wrap'>
            <button className='settings-back-btn' onClick={() => {
                document.getElementById('root')
                    .scroll({top: -100, left: 0, behavior: 'smooth'})
            }}></button>
            <button className='settings-refresh-btn' onClick={() => {
                document.getElementById('root')
                    .scroll({top: -100, left: 0, behavior: 'smooth'})
            }}>Вернуться</button>
        </div>
	}
}
