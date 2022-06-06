import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						
						
            <PlantItem name={plant.name} id={plant.id} water={plant.water} light={plant.light} />
            {/* function PlantItem (name, cover, id, light, water) { */}

					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList