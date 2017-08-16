import React from 'react'
import Coffee from './Coffee'
import { Card } from 'semantic-ui-react'

const CoffeeList = ({coffees, remove, editable}) => {
  const coffeeNodes = coffees.map((coffee) => {
    return (<Coffee coffee={coffee} key={coffee.id} remove={remove} editable={editable}/>)
  })

  return (
    <Card.Group itemsPerRow={3} stackable>{coffeeNodes}</Card.Group>
  )
}

export default CoffeeList
