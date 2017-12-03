const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'RESET_CART':
            return []

        case 'UPDATE_QUANTITY':
            const updatedProducts = state.map(product => {
                if (product.id === action.product.id) 
                    return { ...product, ...action.product}
                return product
            })
            return updatedProducts
        
        case 'DELETE_CART_ITEM':
           return state.filter(product => product._id !== action.id)

        case 'FETCH_PRODUCTS':
           return action.data

        default:
            return state
    }
}

export default cartItems