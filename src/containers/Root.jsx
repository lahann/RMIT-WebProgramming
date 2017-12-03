import React from 'react'
import App from './App.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Admin from './Admin.jsx'
import { Switch, Route, withRouter } from 'react-router-dom';
// import ShoppingCartPage from '../containers/ShoppingCartPage.jsx'
// import Checkout from '../components/Checkout.jsx'
import CheckoutPage from '../checkout-site/components/CheckoutPage.jsx'
import { addCartAndReset, deleteCartItem, updateQuantity } from '../checkout-site/actions'
import Header from '../components/Header.jsx'
import { connect } from 'react-redux'
import { RESET_FILTER, EMPTY_CURRENTPRODUCT } from '../components/Constants.jsx'

class Root extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Header reset={() => this.props.dispatch({ type: RESET_FILTER })} />
                </div>

                <Switch>
                    <Route exact path='/' render={() => (
                        <App dispatch={this.props.dispatch}
                            products={this.props.products}
                            categories={this.props.categories}
                            filter={this.props.filter}
                            currentProduct={this.props.currentProduct}
                        />
                    )} />
                    <Route exact path='/about-us' render={() => (
                        <AboutUs />
                    )} />
                    <Route exact path='/admin' render={() => (
                        <Admin />
                    )} />
                    <Route exact path='/shopping-cart' render={() => (
                        <CheckoutPage 
                        cartItems={this.props.shoppingcart}
                        handleAddCartAndReset={cart => this.props.dispatch(addCartAndReset(cart))}
                        handleDeleteCartItem={id => {
                            this.props.dispatch(deleteCartItem(id))
                        }}
                        handleUpdateQuantity={update => this.props.dispatch(updateQuantity(update))}
                        />
                    )}
                    />
                        {/* <ShoppingCartPage
                            myShoppingCart={this.props.shoppingcart}
                            filter={this.props.filter}
                            handleSave = {this.props.addShoppingCart(fields)}
                        />
                    )} />
                    <Route exact path='/checkout' render={() => (
                        <Checkout/>
                    )} /> */}
                </Switch>
            </div>
        )
    }
}
function mapStateToProps(centralState) {
    return {
        products: centralState.products,
        categories: centralState.categories,
        shoppingcart: centralState.shoppingCart,
        filter: centralState.filter,
        currentProduct: centralState.currentProduct
    }
}
export default withRouter(connect(mapStateToProps)(Root))