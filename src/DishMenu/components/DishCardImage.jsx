import React from 'react';
import '../styles/dish-image.css';


class DishCardImage extends React.Component {

	render() {
		try {
			return <img className='dish-card-image' src={ require(`../source/breakfast/${this.props.image}.jpg`) } alt=''/>
		}
		catch (e) {
			return <img className='dish-card-image' src={ require(`../source/tmp.jpg`) } alt=''/>
		}
	}
}
export { DishCardImage };
