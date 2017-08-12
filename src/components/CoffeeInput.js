import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const CoffeeInput = ({addCoffee}) => {
  let input;

  return (
    <Form>
      <h3>New Coffee</h3>
      <Form.Field>
        <label>Name</label>
        <input type="text" name="name" ref={node => {input = node}} />
      </Form.Field>
      <Button onClick={() => {
        addCoffee({name: input.value})
        input.value = ''
      }}>
        Add
      </Button>
    </Form>
  )
}

export default CoffeeInput
