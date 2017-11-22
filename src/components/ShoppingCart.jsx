import React from 'react'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            shoppingcart: props.shoppingcart,
            customer: props.customer,
        }
    }

    removeProduct(id) {
        //removal logic
    }

    render() {
        return (
            <div>
                Customer: {this.state.customer}<br />
                Products: {this.state.shoppingcart.map((s) =>
                    <li key={s.id}>{s.name} | {s.price} <Button bsStyle="danger" onClick={this.removeProduct.bind(this)}>Remove</Button></li>
                )}<br />
            </div>
        )
    }
}