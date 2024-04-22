import React from 'react';
import { ReactComponent as ArrowIcon } from '../../source/icons/arrow-back.svg'
import { ReactComponent as SunIcon } from '../../source/icons/sun.svg'
import { ReactComponent as MoonIcon } from '../../source/icons/moon.svg'
import { ReactComponent as PlusIcon } from '../../source/icons/plus.svg'
import '../../styles/settings/settings-btns.css';

export default class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { themeDark: false };
    }

	render() {
		return <div className='settings-btn-wrap'>
            <button className='settings-back-btn' onClick={() => {
                document.getElementById('root')
                    .scroll({top: -100, left: 0, behavior: 'smooth'})
            }}><ArrowIcon /></button>
            <button className='settings-add-btn' onClick={() => {
                this.props.ShowSelect();
            }}><PlusIcon /></button>
            <button className='settings-theme-btn' onClick={() => {
                this.setState({themeDark: !this.state.themeDark});
            }}>{this.state.themeDark ? 
                    <SunIcon className='settings-inline-icon' /> :
                    <MoonIcon className='settings-inline-icon' />}
            </button>
            {/* <button className='settings-refresh-btn' onClick={() => {
                document.getElementById('root')
                    .scroll({top: -100, left: 0, behavior: 'smooth'})
            }}>Вернуться</button> */}
        </div>
	}
}
