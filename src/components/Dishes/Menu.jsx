import React from 'react';
import '../../styles/dishes/dish-menu.css';
import Card from './Card';
import Buttons from './Buttons';

export default class Menu extends React.Component {

	constructor(props) {
		super(props);

		this.props.LocalDB.CheckForUpdates();
		
		let menu = 
			this.props.LocalDB.GetMenu() || 
			this.props.DishGetter.GetNewMenu();
		
		this.state = { menu: menu };
		this.props.LocalDB.SetMenu(menu);
	}

	// setState & save in localStorage
    UpdateMenuState(value) {
        this.setState({ menu: value });
		this.props.LocalDB.SetMenu(value);
    }
	
	render() {
		const { menu } = this.state;
		return <div className='dish-menu-wrap'>
			<div className='dish-menu'>
				<span className='dish-menu-name'>Меню на сегодня</span>
				
				{ menu.map((e, i) => <Card key={i++} data={e} /> )}
				
				<Buttons 
					UpdateMenuState={(value) => { this.UpdateMenuState(value) }}
					GetNewMenu={() => this.props.DishGetter.GetNewMenu()}/>
			</div>
		</div>
	}
}