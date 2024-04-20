import React from 'react';
import '../styles/settings.css';
import '../styles/settings-btns.css';
import {SettingsList} from './SettingsList'
import {SettingsLines} from './SettingsLines'


class Settings extends React.Component {

	render() {
		return <div className='settings-wrap'>
			<span className='settings-name'>Настройки</span>

			<SettingsList categories={ this.props.DishGetter.GetDishLists() }/>

			<SettingsLines />
			
			
			<div className='settings-btn-wrap'>
				<button className='settings-back-btn' onClick={() => {
					document.getElementById('root')
						.scroll({top: -100, left: 0, behavior: 'smooth'})
				}}></button>
				<button className='settings-refresh-btn' onClick={() => {
					document.getElementById('root')
						.scroll({top: -100, left: 0, behavior: 'smooth'})
				}}>Вернуться</button>
			</div>
		</div>
	}
}

export { Settings };
