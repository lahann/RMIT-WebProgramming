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

export const updateProduct = update => {
    return dispatch => {
        fetch(`http://bestlab.us:8080/products`, {
            headers: {
                'Accept': 'application.json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then( () => dispatch(fetchProducts()) )
    }
}

export const deleteProduct = id => {
    return dispatch => {
        fetch(`http://bestlab.us:8080/products/${id}`, {method: 'delete'})
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'DELETE_PRODUCT', id})
        })
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


export const addProductType = productType => {
    return dispatch => {
        fetch('http://bestlab.us:8080/productTypes/', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(productType)                
        })
        .then(response => response.json())
        .then(productType => dispatch({
            type: 'ADD_PRODUCT_TYPE',
            productType
        }))
    }
}

export const updateProductType = update => {
    console.log(update)
    return dispatch => {
        fetch(`http://bestlab.us:8080/productTypes`, {
            headers: {
                'Accept': 'application.json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then( () => dispatch(fetchProductTypes()) )
    }
}
export const deleteProductType = id => {
    return dispatch => {
        fetch(`http://bestlab.us:8080/productTypes/${id}`, {method: 'delete'})
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'DELETE_PRODUCT_TYPE', id})
        })
    }
}

export function fetchProductTypes() {
    return dispatch => {
        fetch('http://bestlab.us:8080/productTypes')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'FETCH_PRODUCT_TYPES',
            data
        }))
    }
}