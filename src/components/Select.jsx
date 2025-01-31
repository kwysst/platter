import React from 'react';
import '../styles/select.css';
import { Categories } from '../hooks/Categories';
import { ReactComponent as CircleIcon } from '../source/icons/circle.svg'

export class Select extends React.Component {
	render() {
        const { visible, currentCategory, HideSelect, onClick } = this.props;
		return <section className='select' 
            style={{ zIndex: visible ? 1 : -1, opacity: visible ? 1 : 0 }} 
            onClick={(event) => event.target === event.currentTarget ? HideSelect() : null } >
           
            <ul> 
            { Object.values(Categories.list).map((categoryItem, i) =>  
                <li key={++i} onClick={() => {
                    onClick(categoryItem);
                }}>
                    <CircleIcon className={`select-item-icon ${categoryItem.category === currentCategory ? 'select-item-icon-active' : ''}`}/>
                    <span className='select-item-text'>{categoryItem.categoryName}</span>
                </li>
            )}
            </ul>
            
        </section>
	}
};
