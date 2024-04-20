import React from 'react';
import '../styles/settings-line.css';


class SettingsLines extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            themeDark: false
        }
    }

	render() {
		return <div className='settings-line-wrap'>
            <span className='settings-line' onClick={() => {
                this.setState({themeDark: !this.state.themeDark});
            }}>
                {this.state.themeDark ? 'Светлая' : 'Темная'} тема
                <i className={`settings-${this.state.themeDark ? 'sun' : 'moon'}-icon`}></i>
            </span>
            <span className='settings-line' onClick={() => {
               console.log('downloaded')
            }} style={{
                color: '#3080c8',
                textDecoration: 'underline'
            }}>
                Выгрузить профиль
                <i className='settings-download-icon'></i>
            </span>
        </div>   
	}
}

export { SettingsLines };
