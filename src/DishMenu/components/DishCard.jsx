import React from 'react';
import '../styles/dish-card.css';
import { DishImage } from './DishImage';
import { DishList } from './DishList';


class DishCard extends React.Component {

	recipe = ['Сварить', 'Мелко порезать', 'В кипящую воду на 3 минуты'];
	products = ['Макароны', 'Масло подсолнечное', 'Специи'];

	render() { 
		return <section className='dish-card'>
			<div className='dish-view'>
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
			<div className='dish-description'>
				<DishList name='Способ приготовления:' elements={this.recipe}/>
				<DishList name='Список продуктов:' elements={this.products}/>
			</div>
			
        </section>
	}
}
export { DishCard };
