import React from 'react'
import App from './App.jsx'
import AboutUs from '../components/AboutUs.jsx'
import LoginPage from '../components/LoginPage.jsx'
import Admin from './Admin.jsx'
import { Switch, Route, withRouter } from 'react-router-dom';
// import ShoppingCartPage from '../containers/ShoppingCartPage.jsx'
// import Checkout from '../components/Checkout.jsx'
import CheckoutPage from '../checkout-site/components/CheckoutPage.jsx'
import { addCartAndReset, deleteCartItem, updateQuantity } from '../checkout-site/actions'
import Header from '../components/Header.jsx'
import { connect } from 'react-redux'
import { RESET, ROUTE_BASE, ROUTE_ABOUTUS, ROUTE_ADMIN, ROUTE_SHOPPINGCART, LOGIN, LOGOUT } from '../components/Constants.jsx'

class Root extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <Header
                        reset={() => this.props.dispatch({ type: RESET })}
                        logout={() => this.props.dispatch({ type: LOGOUT })}
                        auth={this.props.auth.loggedIn}
                    />
                </div>

                <Switch>
                    <Route exact path={ROUTE_BASE} render={() => (
                        <App dispatch={this.props.dispatch}
                            products={this.props.products}
                            categories={this.props.categories}
                            filter={this.props.filter}
                            currentProduct={this.props.currentProduct}
                        />
                    )} />
                    <Route exact path={ROUTE_ABOUTUS} render={() => (
                        <AboutUs />
                    )} />

                    <Route exact path={ROUTE_ADMIN} render={() => (
                        this.props.auth.loggedIn ? <Admin /> :
                            <LoginPage 
                            user={this.props.auth.user} 
                            login={() => this.props.dispatch({ type: LOGIN })} />
                    )} />

                    < Route exact path={ROUTE_SHOPPINGCART} render={() => (
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
        currentProduct: centralState.currentProduct,
        auth: centralState.auth
    }
}
export default withRouter(connect(mapStateToProps)(Root))