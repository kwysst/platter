import React from 'react';

import '../../styles/dishes/dish-card.css';
import '../../styles/dishes/dish-info.css';
import '../../styles/dishes/dish-description.css'; 

import { ReactComponent as PlusIcon } from '../../source/icons/plus2.svg'
import { ReactComponent as TimerIcon } from '../../source/icons/timer.svg'


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

export class Card extends React.Component {

	constructor(props) {
		super(props);
		this.state = { description: false };
	}

	render() {
		const { category, categoryName } = this.props.data;
		const { name, kbju, time, products, recipe } = this.props.data.item;
		return <section className='dish-card'>
			<div className='dish-info' onClick={() => this.setState({description: !this.state.description})}>
				<CardImage category={ category } image={ name } />
				<div className='dish-stats'>
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
			</div>
			<div className={this.state.description ? 'dish-description' : 'dish-description dish-description-hidden'}>
				<CardList name='Список продуктов:' elements={products}/>
				<CardList name='Способ приготовления:' elements={recipe}/>
			</div>
			
			<div className='dish-category'> { categoryName } </div>
        </section>
	}
};