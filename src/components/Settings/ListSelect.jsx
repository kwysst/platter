import React from 'react';
import '../../styles/settings/settings-choice.css';

export default class ListSelect extends React.Component {
	render() {
        const { visible, schema, categories, HideChoice, PushToSchema } = this.props;
		return <div className='settings-choice' 
            style={{ zIndex: visible ? 1 : -1, opacity: visible ? 1 : 0 }} 
            onClick={(event) => event.target === event.currentTarget ? HideChoice() : null } >
           
            <ul> 
                { categories.map((e, i) =>  
                    <li key={++i} onClick={() => {
                        // TODO: DishGetter.GetSchema(name, status, ...);
                        schema.push({
                            ...e,
                            'status': true
                        })
                        PushToSchema(schema);
                    }}>{e.categoryName}</li>
                )}
            </ul>

        </div>
	}
}
