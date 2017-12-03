import React from 'react'
import Product from '../components/Product.jsx'
import { VIEW_PRODUCT_DETAILS } from '../components/Constants.jsx'

export default class ProductDetailPage extends React.Component {

    render() {
        return (
            <div>
                {<Product {...this.props.currentProduct}
                    mode={VIEW_PRODUCT_DETAILS}
                    addToCart={this.props.addToCart}
                    closeProduct={this.props.closeProduct}
                />}
            </div>
        )
    }
}