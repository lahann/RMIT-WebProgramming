export const addProduct = product => {
    return dispatch => {
        fetch('http://bestlab.us:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(product)                
        })
        .then(response => response.json())
        .then(product => dispatch({
            type: 'ADD_PRODUCT',
            product
        }))
    }
}

export const updateProduct = product => {
    return {
        type: 'UPDATE_PRODUCT',
        product
    }
}

export const deleteProduct = id => {
    return {
        type: 'DELETE_PRODUCT',
        id
    }
}

export function fetchProducts() {
    return dispatch => {
        fetch('http://bestlab.us:8080/products')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'FETCH_PRODUCTS',
            data
        }))
    }
}