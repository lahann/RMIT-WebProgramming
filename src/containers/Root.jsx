import React from 'react'
import App from './App.jsx'
import AboutUs from '../components/AboutUs.jsx'
import Admin from './Admin.jsx'
import ShoppingCart from './ShoppingCartPage'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import { connect } from 'react-redux'

class Root extends React.Component {

    display(currentPath) {
        if (currentPath.includes('/about-us')) 
            return <AboutUs />
        else if (currentPath.includes('/admin'))
            return <Admin />
        else if (currentPath.includes('/shopping-cart'))
            return <shoppingCart />
        return (
            <App dispatch={this.props.dispatch}
                products={this.props.products}
                categories={this.props.categories}
                filter={this.props.filter}
            />
        )
    }

    render() {
        let currentPath = window.location.pathname
        return (
            <div>
                <div>
                    <Header />
                </div>

                {/* {currentPath.includes('/about-us') ?
                    <AboutUs /> :
                    <App dispatch={this.props.dispatch}
                        products={this.props.products}
                        categories={this.props.categories}
                        filter={this.props.filter}
                    />
                } */}
                
                <div>{this.display(currentPath)}</div>

                <div>
                    <Footer />
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
export default connect(mapStateToProps)(Root)