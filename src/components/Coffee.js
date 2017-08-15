import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

const Coffee = ({coffee, remove}) => {
  return (
    <Card>
      <Image alt='coffee_image' src={require('../assets/empty_coffee.png')} />
      <Card.Content>
        <Card.Header as='a'>{coffee.name}</Card.Header>
        <Card.Meta>{coffee.roaster || 'roaster'}</Card.Meta>
        <Card.Description>
          {coffee.description || 'This is the Brazil Parana brought to you by Good Folks Coffee. This full natural coffee was grown by the Fazenda California in the Jacarezhino, Parana region of Guatemala between 900 - 1,000 meters above sea level. This coffee is rich and comforting, with candy bar-like notes of sweet milk chocolate and peanut butter.'}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button floated='right' onClick={() => remove(coffee.id)}>
          <Icon name='close' />Delete
        </Button>
      </Card.Content>
    </Card>
  )
}

export default Coffee
