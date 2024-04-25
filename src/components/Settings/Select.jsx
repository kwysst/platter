import React from 'react';
import { ReactComponent as CircleIcon } from '../../source/icons/circle.svg'
import '../../styles/settings/settings-select.css';

export default class Select extends React.Component {
	render() {
        const { visible, categories, HideChoice, PushToSchema } = this.props;
		return <div className='settings-select' 
            style={{ zIndex: visible ? 1 : -1, opacity: visible ? 1 : 0 }} 
            onClick={(event) => event.target === event.currentTarget ? HideChoice() : null } >
           
            <ul> 
                { categories.map((e, i) =>  
                    <li key={++i} onClick={() => {
                        PushToSchema({
                            ...e,
                            'status': true
                        });
                    }}>
                        <CircleIcon className='select-item-icon'/>
                        <span className='select-item-text'>{e.categoryName}</span>
                    </li>
                )}
            </ul>

        </div>
	}
}
