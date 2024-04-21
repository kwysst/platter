import React from 'react';
import '../../styles/settings/settings.css';
import SettingsList from './SettingsList'
import SettingsInline from './SettingsInline'
import Buttons from './Buttons'

export default class Settings extends React.Component {
	render() {
		return <div className='settings-wrap'>
			<span className='settings-name'>Настройки</span>

			<SettingsList 
				LocalDB={this.props.LocalDB}
				categories={this.props.DishGetter.GetCategories()} />

			<SettingsInline />

			<Buttons />
		</div>
	}
}