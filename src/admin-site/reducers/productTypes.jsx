const productTypes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TYPE':
            return [...state, action.productType]
            
        case 'DELETE_PRODUCT_TYPE':
            return state.filter(productType => productType._id !== action.id)

        case 'FETCH_PRODUCT_TYPES':
            return action.data

        default:
            return state
    }
}

export default productTypes