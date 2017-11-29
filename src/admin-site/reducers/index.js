import { combineReducers } from 'redux'
import products from './products.jsx'
import productTypes from './productTypes.jsx'


const adminApp = combineReducers({
    products,
    productTypes
})

export default adminApp
