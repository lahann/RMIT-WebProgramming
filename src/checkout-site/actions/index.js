import { SHOPPING_CART } from '../../components/Constants.jsx'

export const addCartAndReset = cart => {
    return dispatch => {
        fetch(SHOPPING_CART, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(cart)                
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: 'RESET_CART',
        }))
    }
}

export const updateQuantity = update => {
    return {
        type: 'UPDATE_QUANTITY',
        ...update
    }
}

export const deleteCartItem = id => {
    return {
        type: 'DELETE_CART_ITEM',
        id
    }
}