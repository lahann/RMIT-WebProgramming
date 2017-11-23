import React from 'react'

export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: props.shoppingcart.products,
            customer: props.customer,
        }
    }

    removeProduct(id) {
        //removal logic
    }
//| <Button bsStyle="danger" onClick={this.removeProduct.bind(this)}>Remove</Button>
    render() {
        return (
            <div>
                Customer: {this.state.customer}<br />
                Products: {this.state.shoppingcart.products.map((s) =>
                    <li key={s.id}>{s} </li>
                )}<br />
            </div>
        )
    }
}