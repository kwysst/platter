import React from 'react';

import '../../styles/dishes/dish-info.css';
import '../../styles/dishes/dish-description.css'; 

import { ReactComponent as PlusIcon } from '../../source/icons/plus2.svg'
import { ReactComponent as TimerIcon } from '../../source/icons/timer.svg'

import { DishesData } from '../../hooks/DishesData';
import { LocalStorage } from '../../hooks/LocalStorage';
import { CardButtons } from './CardButtons';


export class Card extends React.Component {

	oldProps = null;

	UpdateDish() {
		const { index } = this.props;
		const { category } = this.props.dishData;
		let dish = this.state.item;
		while (dish === this.state.item)
			dish = DishesData.GetRandomDishByCategory(category);
		
		let oldMenu = DishesData.GetMenu(LocalStorage.GetMenu(), LocalStorage.GetSchema());
		oldMenu[`${index}`].item = dish;

		this.setState({dishData: oldMenu[`${index}`]});
		LocalStorage.SetMenu(oldMenu);

		// state updated => props are not relevant;
		// component will render with state instead of props
		this.oldProps = this.props;		
	}

	constructor(props) {
		super(props);

		this.oldProps = this.props;
		
		this.state = {
			dishData: this.props.dishData,
			description: false
		};
	}

	render() {
		const { category, categoryName, item } = this.props.dishData;
		let { dishData } = this.state;
		let { name, kbju, time, products, recipe } = this.state.dishData.item;
		
		// if props are relevant (state wasn't updated);
		// then render with props;
		// else render with state;
		if (this.oldProps.dishData.item !== item) {
			({ name, kbju, time, products, recipe } = item);
			({ dishData } = this.props);
		}


		return <section className='dish-card'>
			<div className='dish-info'>
				<CardImage category={ category } image={ name } />
				<div className='dish-stats' onClick={() => this.setState({description: !this.state.description}) }>
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
					dishData={dishData} 
					UpdateDish={() => this.UpdateDish()}/>
			</div>

			<div 
				className={this.state.description ? 'dish-description' : 'dish-description dish-description-hidden'}
				style={{maxHeight: this.state.description ? GetMaxHeight([...products, ...recipe]) : '0px'}}
			>
				<CardList name='Список продуктов:' elements={products}/>
				<CardList name='Способ приготовления:' elements={recipe}/>		
			</div>
			
			<div className='dish-category'> { categoryName } </div>
        </section>
	}
};

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