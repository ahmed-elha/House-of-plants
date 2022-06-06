import '../styles/Cart.css'
import '../datas/button_name'
import { button_name } from '../datas/button_name'
// import {useState} from 'react'
import MyButton from './MyButton'

function Cart () {
  const monsteraPrice = 8
  const ivyPrice = 10
  const flowerPrice = 15
  // const buttonN = button_name.reduce(
  // 	(acc, name) =>
  // 		acc.includes(name) ? acc : acc.concat(name),
  // 	[]
  // )

  return (
    <div className='lmj-cart'>
      <h2>Panier</h2>
      {button_name.map(({name,color}, index)=>(
        console.log(name,color),
        <MyButton key={index} name={name} color={color} />
      ))
      }
           

       {/* {button_name.map(({name: butname, color},index) => ( 
        console.log('dccexdce', butname),
        <MyButton key={index} name={butname} color={color} />
      ))
      }  */}
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>Lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowerPrice}€</li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice}€
    </div>
  )
}

export default Cart
