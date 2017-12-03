import { combineReducers } from 'redux'
import cartItems from './cartItems.jsx'

const checkoutApp = combineReducers({
    cartItems,
})

export default checkoutApp
