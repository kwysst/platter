import React from 'react';
import '../styles/dish-menu.css';
import { DishCard } from './DishCard';
import pelmeniImage from '../source/pelmeni.png'
import borschtImage from '../source/borscht.png'
import plovImage from '../source/plov.png'
import pryanikiImage from '../source/pryaniki.png'
import eggsImage from '../source/eggs.png'
import cakeImage from '../source/cake.png'


class DishMenu extends React.Component {

	dishes = [
		{
			key: 1,
			name: 'Яичница',
			image: eggsImage,
			kbju: [1300, 1200, 0, 0],
			type: 'Завтрак',
			productsRemaining: ['Яйцо C0', 'Масло подсолнечное', 'Соль'],
			recipe: [
				'Помыть яйца под проточной водой',
				'Налить подсолнечное масло на сковороду',
				'Разбить яйца на сковороду',
				'Жарить в течение 3 минут'
			]
		},
		{
			key: 2,
			name: 'Борщ (Русский)',
			image: borschtImage,
			kbju: [10, 12, 13, 14],
			type: 'Первое блюдо',
			productsRemaining: ['Яйцо C0', 'Масло подсолнечное', 'Соль'],
			recipe: [
				'Помыть яйца под проточной водой',
				'Налить подсолнечное масло на сковороду',
				'Разбить яйца на сковороду',
				'Жарить в течение 3 минут'
			]
		},
		{
			key: 3,
			name: 'Жареные пельмени',
			image: pelmeniImage,
			kbju: [1300, 1200, 0, 0],
			type: 'Второе блюдо',
			productsRemaining: ['Яйцо C0', 'Масло подсолнечное', 'Соль'],
			recipe: [
				'Помыть яйца под проточной водой',
				'Налить подсолнечное масло на сковороду',
				'Разбить яйца на сковороду',
				'Жарить в течение 3 минут'
			]
		},
		{
			key: 4,
			name: 'Плов',
			image: plovImage,
			kbju: [1300, 1200, 0, 0],
			type: 'Ужин',
			productsRemaining: ['Яйцо C0', 'Масло подсолнечное', 'Соль'],
			recipe: [
				'Помыть яйца под проточной водой',
				'Налить подсолнечное масло на сковороду',
				'Разбить яйца на сковороду',
				'Жарить в течение 3 минут'
			]
		},
		{
			key: 5,
			name: 'Чизкейк "Баунти"',
			image: cakeImage,
			kbju: [1300, 1200, 0, 0],
			type: 'Десерт',
			productsRemaining: ['Яйцо C0', 'Масло подсолнечное', 'Соль'],
			recipe: [
				'Помыть яйца под проточной водой',
				'Налить подсолнечное масло на сковороду',
				'Разбить яйца на сковороду',
				'Жарить в течение 3 минут'
			]
		},
		{
			key: 6,
			name: 'Пряники',
			image: pryanikiImage,
			kbju: [1300, 1200, 0, 0],
			type: 'Снеки & K чаю',
			productsRemaining: [
				'Яйцо C0', 
				'Масло подсолнечное', 
				'Соль'
			],
			recipe: [
				'Помыть яйца под проточной водой',
				'Налить подсолнечное масло на сковороду',
				'Разбить яйца на сковороду',
				'Жарить в течение 3 минут'
			]
		},
	]

	render() {
		return <div className='dish-menu'>
			<span style={{ margin: "40px 0 20px 0", fontSize: "30px", fontFamily: "Garamond"}}>Меню на сегодня</span>
			{ this.dishes.map(e => <DishCard 
				key={e.key} 
				name={e.name} 
				image={e.image} 
				kbju={e.kbju} 
				type={e.type} 
				productsRemaining={e.productsRemaining}
				recipe={e.recipe}
				/>) 
			}
		</div>
	}
}
export { DishMenu };
