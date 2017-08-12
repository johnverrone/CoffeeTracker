import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'

const Coffee = ({coffee, remove}) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header as='a'>{coffee.name}</Item.Header>
        <Item.Extra>
          <Button secondary floated='right' onClick={() => remove(coffee.id)}>
            <Icon name='close' />Delete
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Coffee
