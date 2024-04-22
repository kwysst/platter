import React from 'react';

export default class CardImage extends React.Component {
	render() {
		try {
			return <img className='dish-card-image' src={ require(`../../source/dish-images/${this.props.category}/${this.props.image}.jpg`) } alt=''/>
		}
		catch (e) {
			return <img className='dish-card-image' src={ require(`../../source/dish-images/tmp.jpg`) } alt=''/>
		}
	}
};
