import React from 'react';
import '../styles/dish-list.css';


class DishList extends React.Component {

	render() { 
        return <div class="dish-list-wrap">
            <div class="dish-list-name">{this.props.name}</div>
            <ul>{this.props.elements.map(e => <li>{e}</li>)}</ul>
        </div>
    }
}

export { DishList };