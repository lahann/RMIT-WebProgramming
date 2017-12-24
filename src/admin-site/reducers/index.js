import { combineReducers } from 'redux'
import products from './products.jsx'
import productTypes from './productTypes.jsx'
import orders from './orders.jsx'


const adminApp = combineReducers({
    products,
    productTypes,
    orders
})

export default adminApp
