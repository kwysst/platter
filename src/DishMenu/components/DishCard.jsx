import React from 'react';
import '../styles/dish-card.css';
import { DishImage } from './DishImage';


class DishCard extends React.Component {

	render() { 
		return <section className='dish-card'>
			<DishImage image={ this.props.image } />
			<div className='dish-info'>
				<div className='dish-name'>{ this.props.name }</div>
				<div className='dish-kbju'>
					{ this.props.kbju[0] } / { this.props.kbju[1] } / { this.props.kbju[2] } / { this.props.kbju[3] }
				</div>
			</div>
        </section>
	}
}
export { DishCard };
