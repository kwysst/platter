import React from 'react';

import { Themes } from '../../hooks/Themes';
import { LocalStorage } from '../../hooks/LocalStorage';
import { Categories } from '../../hooks/Categories';

import { SettingsSchema } from './SettingsSchema'
import { FooterButtons } from '../FooterButtons'
import { Select } from '../Select';

import { ReactComponent as ArrowIcon } from '../../source/icons/arrow-back.svg'
import { ReactComponent as SunIcon } from '../../source/icons/sun.svg'
import { ReactComponent as MoonIcon } from '../../source/icons/moon.svg'
import { ReactComponent as PlusIcon } from '../../source/icons/plus.svg'


export class SettingsView extends React.Component {

	// setState & save template in localStorage
	UpdateSchemaState(value) {
		this.setState({ schema: value });
		LocalStorage.SetSchema(value);
	}

	constructor(props) {
        super(props);
			
		this.state = { 
			selectShowed: false, 
			schema: LocalStorage.GetSchema(),
			themeDark: Themes.GetTheme() === 'dark'
		};
    }

	render() {
		const { onTouchStart, onTouchEnd } = this.props;

		const schema = LocalStorage.GetSchema();

		return <article className='settings-view' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
			<section className='view-name'>Настройки</section>

			<SettingsSchema schema={schema} />

			{/* <SettingsInline /> */}

			<FooterButtons
				buttons={[
					{
						action: () => { document.getElementById('root').scroll({top: -100, left: 0, behavior: 'smooth'}) },
						icon: <ArrowIcon />,
						enabled: true,
					},
					{
						action: () => { this.setState({ selectShowed: true }); },
						icon: <PlusIcon />,
						enabled: true
					},
					{
						action: () => {
							Themes.SetTheme(this.state.themeDark ? 'light' : 'dark')
							this.setState({themeDark: !this.state.themeDark});	
						},
						icon: this.state.themeDark ? <MoonIcon /> : <SunIcon />,
						enabled: true
					}
				]}
			/>

			<Select 
				visible={ this.state.selectShowed }
				HideSelect={() => {
					this.setState({ selectShowed: false });
				}}
				onClick={(value) => {
					schema.push({
						...value,
						'status': true
					});

                    this.setState({ selectShowed: false });
                    this.UpdateSchemaState(schema);
				}}
			/>
		</article>
	}				
}