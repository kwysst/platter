import React from 'react';
import '../styles/dish-menu.css';
import '../styles/dish-btns.css';
import { DishCard } from './DishCard';





class DishMenu extends React.Component {

	constructor(props) {
		super(props);

		this.props.LocalDB.CheckForUpdates();
		
		
		let dishes = 
			this.props.LocalDB.GetDishes() || 
			this.props.DishGetter.GetNewDishList();
		
		this.props.LocalDB.SetDishes(dishes);
		
		this.state = { dishes: dishes };
		console.log(dishes);
		console.log(this.props.DishGetter.GetDishCategory('salad'))
	}
	
	render() {
		return <div className='dish-menu-wrap'>
			<div className='dish-menu'>
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

				<div className='dish-btn-wrap'>
					<button className='dish-refresh-btn' onClick={() => {
						// this.props.LocalDB.SetDishes(dishes);
				
						this.setState({dishes: this.props.DishGetter.GetNewDishList() });
					}}>Обновить</button>
					<button className='dish-settings-btn' onClick={() => {
						document.getElementById('root')
							.scroll({top: 0, left: 1000, behavior: 'smooth'});
					}}></button>
				</div>
				
			</div>
		</div>
	}
}
export { DishMenu };
