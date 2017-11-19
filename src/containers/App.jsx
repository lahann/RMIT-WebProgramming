import React from 'react'
import { connect } from 'react-redux'
import CategoriePage from './CategoriePage.jsx'
import ProductOverviewPage from './ProductOverviewPage.jsx'
import { SWITCH_VIEW, SET_SORTBY, ADD_TO_CART } from '../components/Constants.jsx'

export default class App extends React.Component {

  render() {
    return (
      <div>

        <ProductOverviewPage products={this.props.products} categories={this.props.categories} filter={this.props.filter}
          addToCart={(p) => this.props.dispatch({ type: ADD_TO_CART, payload: p })}
          switchView={() => this.props.dispatch({ type: SWITCH_VIEW })}
          setSortBy={(v) => this.props.dispatch({ type: SET_SORTBY, payload: v })} />

      </div>
    )
  }
}