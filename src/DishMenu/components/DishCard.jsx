import React from 'react';
import '../styles/dish-card.css';
import { DishCardImage } from './DishCardImage';
import { DishCardList } from './DishCardList';
import { DishCardDelimiter } from './DishCardDelimiter';


class DishCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			description: false
		};
	}

	render() {
		return <section className='dish-card'>
			<div className='dish-view' onClick={() => {
				this.setState({description: !this.state.description})
			}}>
				<DishCardImage image={ this.props.image } />
				<div className='dish-info'>
					<div className='dish-name'>{ this.props.name }</div>
					<div className='dish-kbju'>
						{ this.props.kbju[0] } / { this.props.kbju[1] } / { this.props.kbju[2] } / { this.props.kbju[3] }
					</div>
					<div className='dish-stats'>
						{ this.props.time }
					</div>
				</div>
			</div>
			<div className={this.state.description ? 'dish-description' : 'dish-description dish-description-hidden'}>
				<DishCardDelimiter />
				<DishCardList name='Список продуктов:' elements={this.props.products}/>
				<DishCardDelimiter />
				<DishCardList name='Способ приготовления:' elements={this.props.recipe}/>
				<DishCardDelimiter />
			</div>
			<div className='dish-type'>
				{ this.props.type }
			</div>
        </section>
	}
}
export { DishCard };
