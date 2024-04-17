import React from 'react';
import '../styles/dish-menu.css';
import { DishCard } from './DishCard';
import { DishGetter } from '../DishGetter';
import { LocalDB } from '../LocalDB';

import BreakfastData from '../data/Breakfast';
import SoupData from '../data/Soup';
import LunchData from '../data/Lunch';
import DinnerData from '../data/Dinner';
import SaladData from '../data/Salad';
import DessertData from '../data/Dessert.json';




class DishMenu extends React.Component {

	constructor(props) {
		super(props);
		// console.log(BreakfastData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));

		LocalDB.CheckForUpdates();
		// let dishes = LocalDB.GetDishes() || [
		// 	DishGetter.GetDishByCategory(BreakfastData),
		// 	DishGetter.GetDishByCategory(SoupData)
		// ];
		// console.log(dishes)
		


		let dishes = LocalDB.GetDishes() || [
			{
				category: 'breakfast',
				categoryRU: 'Завтрак',
				item: DishGetter.GetDishByCategory(BreakfastData)
			},
			{
				category: 'salad',
				categoryRU: 'Салат',
				item: DishGetter.GetDishByCategory(SaladData)
			},
			{
				category: 'soup',
				categoryRU: 'Первое блюдо',
				item: DishGetter.GetDishByCategory(SoupData)
			},
			{
				category: 'dessert',
				categoryRU: 'Дессерт',
				item: DishGetter.GetDishByCategory(DessertData)
			}
		];



		LocalDB.SetDishes(dishes);

		this.state = { dishes: dishes };
	}
	
	render() {
		return <div className='dish-menu'>
			<span className='dish-menu-name'>Меню на сегодня</span>
			{ 
				this.state.dishes.map((e, i) => <DishCard 
					key={i++}
					name={e.item.name}
					kbju={e.item.kbju} 
					category={e.category} 
					categoryRU={e.categoryRU} 
					products={e.item.products}
					recipe={e.item.recipe}
					time={e.item.time}
				/>) 
			}
			<button className='dish-refresh-btn' onClick={() => {
				let dishes = [
					{
						category: 'breakfast',
						categoryRU: 'Завтрак',
						item: DishGetter.GetDishByCategory(BreakfastData)
					},
					{
						category: 'salad',
						categoryRU: 'Салат',
						item: DishGetter.GetDishByCategory(SaladData)
					},
					{
						category: 'soup',
						categoryRU: 'Первое блюдо',
						item: DishGetter.GetDishByCategory(SoupData)
					},
					{
						category: 'dessert',
						categoryRU: 'Дессерт',
						item: DishGetter.GetDishByCategory(DessertData)
					}
				];
				LocalDB.SetDishes(dishes);
		
				this.setState({dishes: dishes});
			}}>Обновить</button>
		</div>
	}
}
export { DishMenu };
