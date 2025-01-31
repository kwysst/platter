import React from 'react';

import '../../styles/dishes/dishes-list.css';

import { LocalStorage } from '../../hooks/LocalStorage';
import { Categories } from '../../hooks/Categories';

import { Card } from './Card';
import { FooterButtons } from '../FooterButtons';
import { Select } from '../Select';

import { ReactComponent as RefreshIcon } from '../../source/icons/refresh.svg'
import { ReactComponent as SettingsIcon } from '../../source/icons/settings2.svg'
import { ReactComponent as ListIcon } from '../../source/icons/list.svg'


export class DishesView extends React.Component {

	// setState & save in localStorage
    UpdateMenuState() {
		const newMenu = Categories.GetMenu('', LocalStorage.GetSchema());

		LocalStorage.SetMenu(newMenu);
        this.setState({ list: newMenu });
    }
	
	SetList(category) {
		console.log(category)
		this.setState({
			selectShowed: false,
			listIsMenu: category === 'menu',
			currentCategory: category,
			list: category === 'menu' 
				? Categories.GetMenu(LocalStorage.GetMenu(), LocalStorage.GetSchema())
				: Categories.list[category].dishes
		});
	}

	constructor(props) {
		super(props);

		this.state = { 
			list: Categories.GetMenu(LocalStorage.GetMenu(), LocalStorage.GetSchema()),
			selectShowed: false,
			listIsMenu: true,
			currentCategory: 'menu'
		};
	}
	
	render() {
		const { onTouchStart, onTouchEnd } = this.props;
		const { list, listIsMenu, selectShowed } = this.state;

		return <article className='dishes-view' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
			
				<section className='view-name'>{listIsMenu ? 'Меню на сегодня' : list[0].categoryName }</section>

				<div className='dishes-list-wrap'>
					{ list.map((dish, i) => 
						<Card 
							key={dish.name + listIsMenu}
							index={i} 
							dish={dish} 
							listIsMenu={listIsMenu}
							/> 
					)}
				</div>

				<FooterButtons
					buttons={[
						{
							action: () => { this.setState({ selectShowed: true }) },
							icon: <ListIcon />,
							enabled: true,
						},
						{
							action: () => { this.UpdateMenuState() },
							icon: <RefreshIcon />,
							enabled: listIsMenu
						},
						{
							action: () => { document.getElementById('root').scroll({top: 0, left: 1000, behavior: 'smooth'}) },
							icon: <SettingsIcon />,
							enabled: true
						}	
					]}
				/>

				<Select
					visible={ selectShowed }
					currentCategory={ this.state.currentCategory }
					HideSelect={() => {
						this.setState({selectShowed: false});
					}}
					onClick={(value) => {
						this.SetList(value.category)
					}}
				/>
		</article>
	}
};