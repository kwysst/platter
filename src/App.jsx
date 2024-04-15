import React from 'react';
import './styles/app.css';
import { DishCard } from './DishMenu/components/DishCard';
import puncakeImage from './DishMenu/source/puncake.png'
import pelmeniImage from './DishMenu/source/pelmeni.png'


class App extends React.Component {

	dishes = [
		{
			key: 1,
			name: 'Puncackes',
			image: puncakeImage,
			kbju: [10, 12, 13, 14]
		},
		{
			key: 2,
			name: 'Russian Pelmeni',
			image: pelmeniImage,
			kbju: [1300, 1200, 0, 0]
		}
	]

	render() {
		return <div className='app'>
			{ this.dishes.map(e => <DishCard key={e.key} name={e.name} image={e.image} kbju={e.kbju} />) }
		</div>
	}
}
export { App };
