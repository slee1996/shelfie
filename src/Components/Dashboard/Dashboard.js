import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    render(){
        let products = this.props.inventory.map((product, i) => {
            return <div key={i}> <Product /> </div>
        })

        return(
            <div>Dashboard
                {products}
            </div>
        )
    }
} 