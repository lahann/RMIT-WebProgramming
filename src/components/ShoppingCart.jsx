import React from 'react'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: props.products,
            customer: props.customer,
        }
    }

    render() {
        return (
            <div>
                Products: {this.state.products.map((p) =>
                    <li key={p.id}>{p.name}</li>
                )}<br />
                Customer: {this.state.customer}<br />
            </div>
        )
    }

}