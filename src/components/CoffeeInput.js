import React from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react'

const CoffeeInput = ({addCoffee}) => {
  let name, roaster, description;

  return (
    <Modal trigger={<Button>Add New Coffee</Button>}>
      <Modal.Header>Add New Coffee</Modal.Header>
      <Modal.Content>
        <Form>
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
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => {
          addCoffee({name: name.value, roaster: roaster.value, description: description.ref.value})
          name.value = ''
          roaster.value = ''
          description.ref.value = ''
        }}>
          Add
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CoffeeInput
