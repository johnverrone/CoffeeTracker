import React from 'react'
import { Button, Form, Modal, TextArea } from 'semantic-ui-react'

class CoffeeInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    let name, roaster, description;
    const { open } = this.state;

    return (
      <div>
        <Button onClick={this.show}>Add New Coffee</Button>
        <Modal open={open} onClose={this.close}>
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
            <Button onClick={this.close}>Cancel</Button>
            <Button positive onClick={() => {
              this.props.addCoffee({name: name.value, roaster: roaster.value, description: description.ref.value})
              name.value = ''
              roaster.value = ''
              description.ref.value = ''
              this.close()
            }}>
              Add
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default CoffeeInput
