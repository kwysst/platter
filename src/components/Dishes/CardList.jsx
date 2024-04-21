import React from 'react';
import '../../styles/dishes/dish-list.css';

export default class CardList extends React.Component {

	render() { 
        return <div className="dish-list-wrap">
            <div className="dish-list-name">{this.props.name}</div>
            <ul>{this.props.elements.map((e, i) => <li key={i++}>{e}</li>)}</ul>
        </div>
    }
};