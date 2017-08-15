import React from 'react'
import { Button, Card, Form, TextArea } from 'semantic-ui-react'

const CoffeeInput = ({addCoffee}) => {
  let name, roaster, description;

  return (
    <Form>
      <Card fluid>
        <Card.Content>
          <Form.Field>
            <label>Name</label>
            <input type="text" name="name" ref={node => {name = node}} />
          </Form.Field>
          <Form.Field>
            <label>Coffee Roaster</label>
            <input type="text" name="roaster" ref={node => {roaster = node}} />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea type="text" name="description" ref={node => {description = node}} />
          </Form.Field>
        </Card.Content>
        <Card.Content extra>
          <Button floated='right' onClick={() => {
            addCoffee({name: name.value})
            name.value = ''
          }}>
            Add
          </Button>
        </Card.Content>
      </Card>
    </Form>
  )
}

export default CoffeeInput
