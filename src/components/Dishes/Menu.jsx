import React from 'react';
import '../../styles/dishes/dish-menu.css';
import Card from './Card';
import Buttons from './Buttons';
import Select from './Select';

export default class Menu extends React.Component {

	constructor(props) {
		super(props);
		const { LocalDB } = this.props;
		
		LocalDB.CheckForUpdates();
		
		const menu = this.GetMenu();

		console.log(menu)

		this.state = { 
			menu: menu,
			adding: false,
			listIsMenu: true
		};
		LocalDB.SetMenu(menu);
	}

	GetMenu() {
		const { DishGetter, LocalDB } = this.props;
		
		let [ schema, menu ] = [ LocalDB.GetSchema(), LocalDB.GetMenu() ];

		if (!DishGetter.IsMenuValid(menu, schema))
			menu = DishGetter.GetValidMenu(schema);

		return menu;
	}

	// setState & save in localStorage
    UpdateMenuState() {
		const { DishGetter, LocalDB } = this.props;

		let newMenu = DishGetter.GetValidMenu(LocalDB.GetSchema())
        this.setState({ menu: newMenu });
		this.props.LocalDB.SetMenu(newMenu);
    }
	ShowSelect() {
		this.setState({ adding: true });
	}
	UpdateList(value) {
		if (value === 'menu')
			this.setState({ 
				menu: this.GetMenu(),
				adding: false,
				listIsMenu: true
			});
		else {
			this.setState({
				menu: this.props.DishGetter.GetDishListByCategory(value),
				adding: false,
				listIsMenu: false
			})
		}
		// this.setState({ menu: menu })
	}

	
	render() {
		const { menu } = this.state;

		const categories = this.props.DishGetter.GetCategories();
		categories.unshift({
			category: 'menu',
			categoryName: 'Меню'
		});

		return <div className='dish-menu-wrap'>
			<div className='dish-menu'>
				<span className='dish-menu-name'>{
					this.state.listIsMenu ? 
						'Меню на сегодня' :
						this.state.menu[0].categoryName
				}</span>
				
				{ menu.map((e, i) => <Card key={i++} data={e} /> )}
				
				<Buttons
					listIsMenu={this.state.listIsMenu} 
					ShowSelect={() => { this.ShowSelect() }}
					UpdateMenuState={(value) => { this.UpdateMenuState() }}
				/>

				<Select 
					visible={this.state.adding}
					categories={categories}
					HideChoice={() => {
						this.setState({adding: false});
					}}
					onClick={(value) => {
						this.UpdateList(value)
					}}
				/>
			</div>
		</div>
	}
}