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
		console.log(BreakfastData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));
		console.log(SoupData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));
		console.log(LunchData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));
		console.log(DinnerData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));
		console.log(SaladData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));
		console.log(DessertData.map(e => e.name).sort((a, b) => a > b ? 1 : -1));
		// console.log([...DinnerData, ...LunchData, ...SoupData].map(e => e.name).sort((a, b) => a > b ? 1 : -1))
		this.dishes = [{
			"name": "Блины с икрой",
			"image": "bliny_s_ikroy",
			"kbju": [350, 10, 15, 45],
			"time": "30 мин",
			"type": "Завтрак",
			"products": [
			"Мука",
			"Яйца",
			"Молоко",
			"Икра",
			"Сметана",
			"Масло"
			],
			"recipe": [
			"Приготовьте тесто из муки, яиц и молока.",
			"Обжарьте блины на сковороде.",
			"Подавайте с икрой и сметаной."
			]
		}];
		return;
		LocalDB.CheckForUpdates();
		// this.dishes = LocalDB.GetDishes() || [
		// 	DishGetter.GetDishByCategory(BreakfastData),
		// 	DishGetter.GetDishByCategory(DishData, 'LunchFirst'),
		// 	DishGetter.GetDishByCategory(DishData, 'LunchSecond'),
		// 	DishGetter.GetDishByCategory(DishData, 'Dinner'),
		// 	DishGetter.GetDishByCategory(DishData, 'Dessert'),
		// 	DishGetter.GetDishByCategory(DishData, 'Snack'),
		// ];
		
		LocalDB.SetDishes(this.dishes);
	}
	
	render() {

		return <div className='dish-menu'>
			<span className='dish-menu-name'>Меню на сегодня</span>
			{ 
				this.dishes.map((e, i) => <DishCard 
					key={i}
					name={e.name} 
					image={e.image} 
					kbju={e.kbju} 
					type={e.type} 
					products={e.products}
					recipe={e.recipe}
					time={e.time}
				/>) 
			}
			<button className='dish-refresh-btn'>Обновить</button>
		</div>
	}
}
export { DishMenu };
