import React from 'react'
import Coffee from './Coffee'
import { Item } from 'semantic-ui-react'

const CoffeeList = ({coffees, remove}) => {
  const coffeeNodes = coffees.map((coffee) => {
    return (<Coffee coffee={coffee} key={coffee.id} remove={remove} />)
  })

  return (
    <Item.Group relaxed>{coffeeNodes}</Item.Group>
  )
}

export default CoffeeList
