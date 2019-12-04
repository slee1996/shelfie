import React, {Component} from 'react'

export default class Product extends Component {
    render(){
        let products = this.props.inventory.map((product, i) => {
            return <div key={i}>
                    <h3>Name: {product.productname}</h3> 
                    <h3>Price: {product.price}</h3> 
                    <h3>Image: {product.productimage}</h3>
                    <button value={product.product_id} onClick={this.props.delete}>Delete</button>
                  </div>
        })

        return(
            <div>
                {products}
            </div>
        )
    }
} 