const products = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]

        case 'UPDATE_PRODUCT':
            const updatedProducts = state.map(product => {
                if (product.id === action.product.id) 
                    return { ...product, ...action.product}
                return product
            })
            return updatedProducts
            
        default:
            return state
    }
}

export default products