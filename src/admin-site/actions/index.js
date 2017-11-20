export const addProduct = product => {
    console.log("addProduct")
    console.log(product)
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

export const deleteProduct = id => {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
}