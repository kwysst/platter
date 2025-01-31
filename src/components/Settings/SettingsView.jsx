import React from 'react';

import { Themes } from '../../hooks/Themes';
import { LocalStorage } from '../../hooks/LocalStorage';

import { SettingsSchema } from './SettingsSchema'
import { FooterButtons } from '../FooterButtons'
import { Select } from '../Select';

import { ReactComponent as ArrowIcon } from '../../source/icons/arrow-back.svg'
import { ReactComponent as SunIcon } from '../../source/icons/sun.svg'
import { ReactComponent as MoonIcon } from '../../source/icons/moon.svg'
import { ReactComponent as PlusIcon } from '../../source/icons/plus.svg'

import { $js } from '../../hooks/JSF'


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
						action: (event) => {
							const getTransition = (speed) => {
								return  'transform '+ speed +'ms ease-in-out,'+
										'top '+ speed +
										'ms, left '+ speed + 'ms';
							} 
							const speed = 550;
							const coord = event.target.getBoundingClientRect(); 
							const size = document.body.getBoundingClientRect()
							let maxSize = Math.max(size.width, size.height);
							let maxCoord = maxSize === size.width ? size.width - coord.left : coord.top;
							let hypotenuse = Math.sqrt(size.width*size.width + size.height* size.height);
							const scale = 3.5 * 200 * 200 / size.width / size.width * (hypotenuse - maxCoord); 
							let $anim = $js(`#themeAnimation`); 
							$anim.css({
								'display': 'block',
								'background': (this.state.themeDark ? Themes.LightTheme : Themes.DarkTheme)['--color-background-soft'],
								'top': coord.top + 'px', 
							});
							setTimeout(() => {
								$anim.animate({
									'transform': 'scale('+ scale +')'
								}, getTransition(speed), () => {
									Themes.SetTheme(this.state.themeDark ? 'light' : 'dark')
									this.setState({themeDark: !this.state.themeDark});	
									$anim.animate({
										'top': size.height * 0.9 + 'px', 
									}, 0, () => {
										$anim.animate({
											'top': '0px', 
											'transform': 'scale(2)', 
										}, getTransition(speed), () => {
											$anim.css({
												'display': 'none'
											})
										});
									});
								});
							}, 1); 
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

			<div id="themeAnimation"></div> 
		</article>
	}				
}