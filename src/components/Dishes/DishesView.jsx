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
import { ReactComponent as FavThinIcon } from '../../source/icons/favourite-thin.svg'
import { ReactComponent as BlockThinIcon } from '../../source/icons/block-thin.svg'


export class DishesView extends React.Component {

	// setState & save in localStorage
    UpdateMenuState(state) {
		console.log(state)
		let newList;
		if(state === 'menu')
			newList = Categories.GetMenu('', LocalStorage.GetSchema());
		if(state === 'fav')
			newList = Categories.list[this.state.currentCategory].dishes.filter(dish => LocalStorage.isFav(dish.name));
		if(state === 'block')
			newList = Categories.list[this.state.currentCategory].dishes.filter(dish => LocalStorage.isBlock(dish.name));

		if (state === 'menu')
			LocalStorage.SetMenu(newList);
        this.setState({ list: newList, listFilter: state });
    }
	
	SetList(category) {
		console.log(category)
		this.setState({
			selectShowed: false,
			listIsMenu: category === 'menu',
			currentCategory: category,
			listFilter: category,
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
			listFilter: 'menu',
			currentCategory: 'menu'
		};
	}
	
	render() {
		const { onTouchStart, onTouchEnd } = this.props;
		const { list, listIsMenu, selectShowed, listFilter } = this.state;

		return <article className='dishes-view' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
			
				<section className='view-name'>
					{listIsMenu 
						? 'Меню на сегодня' 
						: Categories.list[this.state.currentCategory].categoryName 
							+ (this.state.listFilter === 'fav' 
								? ' (Избранное)'
							: this.state.listFilter === 'block'
								? ' (Исключенное)'
							: '')
						}</section>

				<div className='dishes-list-wrap'>
					{ list.map((dish, i) => 
						<Card 
							key={dish.name + listFilter}
							index={i} 
							dish={dish} 
							listIsMenu={listIsMenu}
							UpdateMenuState={() => this.UpdateMenuState(listFilter)}
							listFilter={listFilter}
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
							action: () => { this.UpdateMenuState('menu') },
							icon: <RefreshIcon />,
							enabled: listIsMenu
							
						},
						{
							action: () => { this.UpdateMenuState('fav') },
							icon: <FavThinIcon />,
							enabled: !listIsMenu
							
						},
						{
							action: () => { this.UpdateMenuState('block') },
							icon: <BlockThinIcon />,
							enabled: !listIsMenu
							
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