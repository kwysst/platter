import React from 'react';
import { ReactComponent as DownloadIcon } from '../../source/icons/download.svg'
import { ReactComponent as UploadIcon } from '../../source/icons/upload.svg'
import '../../styles/settings/settings-inline.css';

export class SettingsInline extends React.Component {

    constructor(props) {
        super(props);
        this.state = { themeDark: false };
    }

	render() {
		return <div className='settings-inline-wrap'>

            <span className='settings-link settings-inline' onClick={() => {
               alert('Ведутся технические работы!!!');
            }}> Загрузить профиль
                <UploadIcon className='settings-inline-icon' />
            </span>
            <span className='settings-link settings-inline' onClick={() => {
               alert('Ведутся технические работы!!!');
            }}> Сохранить профиль
                <DownloadIcon className='settings-inline-icon' />
            </span>
        </div>   
	}
}
