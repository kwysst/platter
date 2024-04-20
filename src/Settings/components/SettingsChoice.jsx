import React from 'react';
import '../styles/settings-choice.css';


class SettingsChoice extends React.Component {

    constructor(props) {
        super(props);

        this.categories = [
            'Завтраки',
            'Супы',
            'Ланчи',
            'Ужины',
            'Салаты',
            'Дессерты'
        ]
    }

	render() {
		return <div 
            className='settings-choice' 
            style={{ zIndex: this.props.visible ? 1 : -1, opacity: this.props.visible ? 1 : 0 }} 
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    this.props.HideChoice();
                }
        }}>
            <ul>
                {
                    this.categories.map((e, i) =>  
                        <li key={++i} onClick={(e) => {
                            e.preventDefault();
                            this.props.categories.push({'name': e.target.innerHTML, 'status': true})
                            this.props.UpdateCategories(this.props.categories);
                        }}>{e}</li>
                    )
                }
            </ul>
        </div>
	}
}

export { SettingsChoice };
