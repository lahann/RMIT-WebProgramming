import React from 'react'
import { connect } from 'react-redux'
import CategoriePage from './CategoriePage.jsx'
import ProductOverviewPage from './ProductOverviewPage.jsx'
import ProductDetailPage from './ProductDetailPage.jsx'
import { SWITCH_VIEW, SET_SORTBY, SORTBY_PRICE, ADD_TO_CART, SET_CURRENTPRODUCT } from '../components/Constants.jsx'

export default class App extends React.Component {

  render() {
    if (Object.keys(this.props.currentProduct).length === 0 && this.props.currentProduct.constructor === Object) {
      return (
        <div>
          <ProductOverviewPage
            products={this.props.products}
            categories={this.props.categories}
            filter={this.props.filter}
            addToCart={(p) => this.props.dispatch({ type: ADD_TO_CART, payload: p })}
            onProductClick={(p) => this.props.dispatch({ type: SET_CURRENTPRODUCT, payload: p })}
            switchView={() => this.props.dispatch({ type: SWITCH_VIEW })}
            setSortBy={(v) => this.props.dispatch({ type: SET_SORTBY, payload: v })} />
        </div>
      )
    } else {
      return (
        <div>
          <ProductDetailPage
            currentProduct={this.props.currentProduct}
            addToCart={(p) => this.props.dispatch({ type: ADD_TO_CART, payload: p })}
          />
        </div>
      )
    }
  }
}
