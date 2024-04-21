import React from 'react';
import '../../styles/dishes/dish-card.css';
import CardImage from './CardImage';
import CardList from './CardList';

export default class Card extends React.Component {

	constructor(props) {
		super(props);
		this.state = { description: false };
	}

	render() {
		const { category, categoryName } = this.props.data;
		const { name, kbju, time, products, recipe } = this.props.data.item;
		return <section className='dish-card'>
			<div className='dish-view' onClick={() => this.setState({description: !this.state.description})}>
				<CardImage category={ category } image={ name } />
				<div className='dish-info'>
					<div className='dish-name'>{ name } </div>
					<div className='dish-kbju'>
						{ kbju[0] } / { kbju[1] } / { kbju[2] } / { kbju[3] }
					</div>
					<div className='dish-stats'> { time } </div>
				</div>
			</div>
			<div className={this.state.description ? 'dish-description' : 'dish-description dish-description-hidden'}>
				<CardList name='Список продуктов:' elements={products}/>
				<span className='dish-card-delimiter'></span>
				<CardList name='Способ приготовления:' elements={recipe}/>
				<span className='dish-card-delimiter'></span>
			</div>
			
			<div className='dish-type'> { categoryName } </div>
        </section>
	}
};
