import React from 'react';
import '../styles/dish-list.css';


class DishList extends React.Component {

	render() { 
        return <div className="dish-list-wrap">
            <div className="dish-list-name">{this.props.name}</div>
            <ul>{this.props.elements.map(e => <li key={e}>{e}</li>)}</ul>
        </div>
    }
}

export { DishList };