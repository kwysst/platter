import React from 'react';
import '../styles/dish-image.css';


class DishCardImage extends React.Component {

	render() { 
		return <img className='dish-image' src={ require(`../source/${this.props.image}.jpeg`) } alt=''/>
		// return <img className='dish-image' src={this.props.image} alt=''/>
	}
}
export { DishCardImage };
