import React from 'react';

import '../../styles/dishes/dishes-list.css';

import { LocalStorage } from '../../hooks/LocalStorage';
import { DishesData } from '../../hooks/DishesData';

import { Card } from './Card';
import { FooterButtons } from '../FooterButtons';
import { Select } from '../Select';

import { ReactComponent as RefreshIcon } from '../../source/icons/refresh.svg'
import { ReactComponent as SettingsIcon } from '../../source/icons/settings2.svg'
import { ReactComponent as ListIcon } from '../../source/icons/list.svg'


export class DishesView extends React.Component {

	// setState & save in localStorage
    UpdateMenuState() {
		const newMenu = DishesData.GetMenu('', LocalStorage.GetSchema());

        this.setState({ menu: newMenu });
		LocalStorage.SetMenu(newMenu);
    }
	
	SetList(value) {
		if (value === 'menu')
			this.setState({
				menu: DishesData.GetMenu(LocalStorage.GetMenu(), LocalStorage.GetSchema()),
				selectShowed: false,
				listIsMenu: true,
				currentCategory: 'menu'
			});
		else {
			const dishesList = DishesData.GetDishesListByCategory(value);
			this.setState({
				menu: dishesList,
				selectShowed: false,
				listIsMenu: false,
				currentCategory: dishesList[0].category
			})
		}
	}

	constructor(props) {
		super(props);

		this.state = { 
			menu: LocalStorage.GetMenu(),
			selectShowed: false,
			listIsMenu: true,
			currentCategory: 'menu'
		};
	}
	
	render() {
		const { onTouchStart, onTouchEnd } = this.props;
		const { menu, listIsMenu, selectShowed } = this.state;

		const categoryList = DishesData.GetCategoryList();
		categoryList.unshift({
			category: 'menu',
			categoryName: 'Меню'
		});

		return <article className='dishes-view' onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
			
				<section className='view-name'>{listIsMenu ? 'Меню на сегодня' : menu[0].categoryName }</section>
				
				<div className='dishes-list-wrap'>
					{ menu.map((e, i) => <Card key={i++} data={e} /> )}
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
					categoryList={ categoryList }
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