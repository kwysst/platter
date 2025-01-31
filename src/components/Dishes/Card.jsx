import React from 'react';

import '../../styles/dishes/dish-info.css';
import '../../styles/dishes/dish-description.css'; 

import { ReactComponent as PlusIcon } from '../../source/icons/plus2.svg'
import { ReactComponent as TimerIcon } from '../../source/icons/timer.svg'

import { Categories } from '../../hooks/Categories';
import { LocalStorage } from '../../hooks/LocalStorage';
import { CardButtons } from './CardButtons';

const CardImage = (props) => {
	let imageSrc;
	try { imageSrc = require(`../../source/dish-images/${props.category}/${props.image}.jpg`); }
	catch (e) { imageSrc = require(`../../source/dish-images/tmp.jpg`); }
	return <img className='card-image' alt='' src={ imageSrc } />
}

const CardList = (props) => {
	return <div className="card-list-wrap">
		<div className="card-list-name">{props.name}</div>
		<ul>{props.elements.map((e, i) => <li key={i++}>{e}</li>)}</ul>
	</div>
}


function GetMaxHeight (data) {
	let height = 14 * 2 + 24 * 2 + 20 + 8;
	const oneLineHeight = 23;
	const oneLineCharacters = 35;

	data.map(line => height += Math.ceil(line.length/oneLineCharacters) * oneLineHeight )

	return height + 'px';
}

export class Card extends React.Component {

	UpdateDish() {
		const { index } = this.state;
		const { category } = this.state.dish;
		console.log(index)
		
		let dish = this.state.dish;
		while (dish === this.state.dish)
			dish = Categories.RandomDish(category);

		// update dish in menu list by index
		let newMenu = Categories.GetMenu(LocalStorage.GetMenu(), LocalStorage.GetSchema())
		newMenu[index] = dish;
		
		// update current menu
		this.setState({dish: dish});
		LocalStorage.SetMenu(newMenu);
	}

	constructor(props) {
		super(props);

		this.state = {
			index: this.props.index,
			dish: this.props.dish,
			description: false
		};
	}

	render() {
		let { listFilter, UpdateMenuState } = this.props;
		let { dish, index } = this.state;
		let { category, categoryName, name, kbju, time, products, recipe } = dish;


		return <section className='dish-card'>
			<div className='dish-info'>
				<CardImage category={ category } image={ name } />
				<div className='dish-stats' 
				onClick={() => this.setState({description: !this.state.description}) }>
					<div className='dish-name'>{ name } </div>
					<div className='dish-kbju'>
						<PlusIcon className='dish-icon' />
						{ kbju[0] } / { kbju[1] } / { kbju[2] } / { kbju[3] }
					</div>
					<div className='dish-time'> 
						<TimerIcon className='dish-icon' />
						{ time } 
					</div>
				</div>

				<CardButtons
					listIsMenu={this.props.listIsMenu}
					dish={dish}
					UpdateDish={() => this.UpdateDish()}
					listFilter={listFilter}
					UpdateMenuState={UpdateMenuState}
					/>
			</div>

			<div className={this.state.description ? 'dish-description' : 'dish-description dish-description-hidden'}
				style={{maxHeight: this.state.description ? GetMaxHeight([...products, ...recipe]) : '0px'}}
			>
				<CardList name='Список продуктов:' elements={products}/>
				<CardList name='Способ приготовления:' elements={recipe}/>		
			</div>
			
			<div className='dish-category'> { categoryName } </div>
        </section>
	}
};