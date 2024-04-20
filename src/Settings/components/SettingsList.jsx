import React from 'react';
import '../styles/settings-list.css';
import { SettingsChoice } from './SettingsChoice';


class SettingsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = { // get from Local, save to Local; names ?
			categories: [
                {"name":"Завтрак","status":true},
                {"name":"Салат","status":true},
                {"name":"Первое блюдо","status":false},
                {"name":"Второе блюдо","status":true},
                {"name":"Ужин","status":true},
                {"name":"Дессерт","status":true}
            ],
            adding: false
		};

        // console.log(JSON.stringify(this.props.categories.map(e => { return {'name': e.categoryRU, 'status': true}})))
    }

	render() {
		return <>
            <ul className='settings-list'>
                {
                    this.state.categories.map((e, i) => 
                        <li 
                            key={i++} 
                            className={e.status ? '' : 'settings-list-disabled'}
                            onClick={(e) => {
                                if (e.target == e.currentTarget) {
                                    this.state.categories[i-1].status = !this.state.categories[i-1].status;
                                    this.setState({categories: this.state.categories});
                                }
                            }}
                            >{e.name}
                            <span>
                                {/* <i className='settings-list-icon'></i> */}
                                <i className={`settings-list-icon settings-${e.status ? '' : 'un'}visibility-icon`} onClick={(e) => {
                                    this.state.categories[i-1].status = !this.state.categories[i-1].status;
                                    this.setState({categories: this.state.categories});
                                }}></i>
                                <i className='settings-list-icon settings-close-icon' onClick={() => {
                                    this.state.categories.splice([i-1], 1);
                                    this.setState({categories: this.state.categories});
                                }}></i>
                            </span>
                        </li>
                    )
                }

                <li onClick={() => {
                    // this.state.categories.push({'name': 'bebra', 'status': true});
                    this.setState({
                        adding: true
                    })
                }}>
                    <span>
                        <i className='settings-list-icon settings-add-icon'></i>
                    </span>
                </li>
            </ul>
            <SettingsChoice 
                visible={this.state.adding} 
                categories={this.state.categories}
                HideChoice={() => {
                    this.setState({adding: false});
                }}
                UpdateCategories={(value) => {
                    this.setState({adding: false, categories: value});
                }}
            />
        </>
	}
}

export { SettingsList };
