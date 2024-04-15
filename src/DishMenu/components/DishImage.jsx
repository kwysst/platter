import React from 'react';
import '../styles/dish-image.css';


class DishImage extends React.Component {

	render() { 
		return <img className='dish-image' src={this.props.image} alt=''/>
	}
}
export { DishImage };
