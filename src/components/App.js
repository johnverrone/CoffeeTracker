import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Divider, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import CoffeeInput from './CoffeeInput';
import CoffeeList from './CoffeeList';
import firebase, { auth, provider } from '../firebase';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      coffees: [],
      user: null
    }

    this.addCoffee = this.addCoffee.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })

    const coffeeDb = firebase.database().ref('coffees')
    coffeeDb.on('value', (snapshot) => {
      let coffees = snapshot.val()
      let newState = [];
      for (let coffee in coffees) {
        if (coffees[coffee].user === this.state.user.uid) {
          newState.push({
            id: coffee,
            name: coffees[coffee].name,
            roaster: coffees[coffee].roaster,
            description: coffees[coffee].description
          })
        }
      }
      this.setState({
        coffees: newState
      })
    })
  }

  addCoffee(coffee) {
    this.setState({coffees: [...this.state.coffees, coffee]})
    const coffeeDb = firebase.database().ref('coffees')
    coffeeDb.push(coffee)
  }

  removeCoffee(id) {
    const coffeeRef = firebase.database().ref(`/coffees/${id}`);
    coffeeRef.remove()
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user
        this.setState({user})
      })
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({user: null})
      })
  }

  render() {
    return (
      <div>
        <Sidebar as={Menu} animation='push' direction='top' visible={true} inverted>
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Menu position='right'>
            { this.state.user ? (
              <Menu.Item name='logout' onClick={this.logout}>
                <Image src={this.state.user.photoURL} avatar />
                Logout
              </Menu.Item> 
              ) : 
              <Menu.Item name='login' onClick={this.login} /> 
            }
          </Menu.Menu>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Container>
              <Divider hidden />
              { this.state.user && <CoffeeInput addCoffee={this.addCoffee} userId={this.state.user.uid}/> }
              <Divider horizontal>Your Coffees</Divider>
              <CoffeeList 
                coffees={this.state.coffees}
                remove={this.removeCoffee}
                editable={this.state.user}
              />
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </div>
    );
  }
}

export default App;
