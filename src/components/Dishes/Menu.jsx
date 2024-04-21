import React from 'react';
import '../../styles/dishes/dish-menu.css';
import Card from './Card';
import Buttons from './Buttons';

export default class Menu extends React.Component {

	constructor(props) {
		super(props);
		const { DishGetter, LocalDB } = this.props;
		
		LocalDB.CheckForUpdates();
		
		let [ schema, menu ] = [ LocalDB.GetSchema(), LocalDB.GetMenu() ];

		if (!DishGetter.IsMenuValid(menu, schema))
			menu = DishGetter.GetValidMenu(schema);

		this.state = { menu: menu };
		LocalDB.SetMenu(menu);
	}

	// setState & save in localStorage
    UpdateMenuState(value) {
        this.setState({ menu: value });
		this.props.LocalDB.SetMenu(value);
    }
	
	render() {
		const { DishGetter, LocalDB } = this.props;
		const { menu } = this.state;
		return <div className='dish-menu-wrap'>
			<div className='dish-menu'>
				<span className='dish-menu-name'>Меню на сегодня</span>
				
				{ menu.map((e, i) => <Card key={i++} data={e} /> )}
				
				<Buttons 
					UpdateMenuState={(value) => { this.UpdateMenuState(value) }}
					GetNewMenu={() => DishGetter.GetValidMenu(LocalDB.GetSchema())}/>
			</div>
		</div>
	}
}