import React from 'react';
import '../styles/dish-card.css';
import { DishImage } from './DishImage';
import { DishList } from './DishList';
import { DishDelimiter } from './DishDelimeter';


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
				<DishImage image={ this.props.image } />
				<div className='dish-info'>
					<div className='dish-name'>{ this.props.name }</div>
					<div className='dish-kbju'>
						{ this.props.kbju[0] } / { this.props.kbju[1] } / { this.props.kbju[2] } / { this.props.kbju[3] }
					</div>
					<div className='dish-type'>
						{ this.props.type }
					</div>
				</div>
			</div>
			<div className={this.state.description ? 'dish-description' : 'dish-description dish-description-hidden'}>
				<DishDelimiter />
				<DishList name='Список продуктов:' elements={this.props.productsRemaining}/>
				<DishDelimiter />
				<DishList name='Способ приготовления:' elements={this.props.recipe}/>
				<DishDelimiter />
			</div>
        </section>
	}
}
export { DishCard };
