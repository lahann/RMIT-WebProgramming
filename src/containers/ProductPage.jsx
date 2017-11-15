import React from 'react'
import Product from '../components/Product.jsx'

export default class ProductPage extends React.Component {

    render() {
        return (
            <div>
                {this.props.products.map(p =>
                    <Product key={p.id} {...p} />
                )}
            </div>
        )
    }
}