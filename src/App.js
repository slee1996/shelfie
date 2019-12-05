import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from "axios"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: []
    }
  }

  getInventory = () => {
    axios.get('http://localhost:4000/api/inventory/')
      .then(response => {this.setState({inventory: response.data})})
      .catch(console.error())
  }

  componentDidMount(){this.getInventory()}

  componentDidUpdate(){this.getInventory()}

  render(){
    const inventory = this.state.inventory
    //console.log(inventory)
    return (
      <div id='body'>
          <Header />
          <div id='dashform'>
            <Dashboard inventory={inventory} getInventory={this.getInventory} />
            <Form getInventory={this.getInventory} />
          </div>
      </div>
    )
  }
}
