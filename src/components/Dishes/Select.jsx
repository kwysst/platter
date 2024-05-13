import React from 'react';
import { ReactComponent as CircleIcon } from '../../source/icons/circle.svg'

export default class Select extends React.Component {
	render() {
        const { visible, categories, HideChoice, onClick } = this.props;
		return <div className='settings-select' 
            style={{ zIndex: visible ? 1 : -1, opacity: visible ? 1 : 0 }} 
            onClick={(event) => event.target === event.currentTarget ? HideChoice() : null } >
           
            <ul> 
                { categories.map((e, i) =>  
                    <li key={++i} onClick={() => {
                        onClick(e.category);
                    }}>
                        <CircleIcon className='select-item-icon'/>
                        <span className='select-item-text'>{e.categoryName}</span>
                    </li>
                )}
            </ul>
            
        </div>
	}
}
