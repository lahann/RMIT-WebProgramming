import React from 'react'
import { connect } from 'react-redux'
import Footer from '../components/footer.jsx'
import Header from '../components/Header.jsx'
import ProductOverviewPage from './ProductOverviewPage.jsx'
import CategoriePage from './CategoriePage.jsx'
import { Table, th, tr, thead, td, tbody } from 'react-bootstrap'
import { SWITCH_VIEW, SET_SORTBY, ADD_TO_CART } from '../components/Constants.jsx'

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <ProductOverviewPage products={this.props.products} categories={this.props.categories} filter={this.props.filter}
          addToCart={(p) => this.props.dispatch({ type: ADD_TO_CART, payload: p })}
          switchView={() => this.props.dispatch({ type: SWITCH_VIEW })}
          setSortBy={(v) => this.props.dispatch({ type: SET_SORTBY, payload: v })} />

        <div>

          <br /><br /><br /><br /><br />

          <CategoriePage categories={this.props.categories} />

          <div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(centralState) {
  return {
    products: centralState.products,
    categories: centralState.categories,
    shoppingCart: centralState.shoppingCart,
    filter: centralState.filter
  }
}
export default connect(mapStateToProps)(App)
