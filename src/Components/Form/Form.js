import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            productname: '',
            price: '',
            productimage: ''
        }
        this.baseState = this.state
        this.changeOne = this.changeOne.bind(this)
        this.changeTwo = this.changeTwo.bind(this)
        this.changeThree = this.changeThree.bind(this)
    }

    changeOne(e){
        this.setState({
            productname: e.target.value
        })
    }

    changeTwo(e){
        this.setState({
            price: e.target.value
        })
    }

    changeThree(e){
        this.setState({
            productimage: e.target.value
        })
    }

    cancel = () => {
        this.setState(this.baseState)
    }

    createProduct = () => {
        const {productname, price, productimage} = this.state;

        axios.post( 'http://localhost:4000/api/inventory', {productname, price, productimage} ).then(
            this.cancel(),
            console.log('we out here')
        )
        this.props.getInventory()
    }

    render(){
        return(
            <div id='form'>
                <h4>Form</h4>
                <label>
                    Name
                    <input onChange={this.changeOne} type='text' value={this.state.productname} />
                </label>
                <label>
                    Price
                    <input onChange={this.changeTwo} type='text' value={this.state.price} />
                </label>
                <label>
                    Image URL
                    <input onChange={this.changeThree} type='text' value={this.state.productimage} />
                </label>
                <button onClick={this.cancel}>Cancel</button>
                <button onClick={this.createProduct}>Add to Inventory</button>
            </div>
        )
    }
} 