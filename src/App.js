import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [
        {
          name: 'Xbox',
          price: 250,
          image: 'image'
        },
        {
          name: 'Pikachu',
          price: 25,
          image: 'pikachu pic'
        }
      ]
    }
  }

  render(){
    const inventory = this.state.inventory

    return (
      <div className="App">
        <Header />
        <Dashboard inventory={inventory} />
        <Form />
      </div>
    )
  }
}
