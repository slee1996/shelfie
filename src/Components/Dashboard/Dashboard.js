import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
    delete = (e) => {
        axios.delete(`http://localhost:4000/api/inventory/${e.target.value}`)
        this.props.getInventory()
    }

    render(){
        // let products = this.props.inventory.map((product, i) => {
        //     return <div key={i}> <Product inventory={this.props.inventory}/> </div>
        // })

        return(
            <div id='dash'>Dashboard
                <Product inventory={this.props.inventory} delete={this.delete} />
            </div>
        )
    }
} 