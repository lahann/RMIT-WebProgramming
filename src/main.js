import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './containers/Root.jsx'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {
    SHOW_PRODUCTS, SHOW_CATEGORIES, SWITCH_VIEW, SET_SORTBY, VIEW_PRODUCT_LIST,
    VIEW_PRODUCT_GRID, SORTBY_CATEGORY, SORTBY_PRICE, ADD_TO_CART, VISIBILITY_ABOUTUS,
    FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_PRICE_SUCCESS,
    SET_CURRENTPRODUCT
} from './components/Constants.jsx'

//LOOK I MADE A CHANGE

// action.type => String to identify our action
// action.payload => Params for example

// this.props.dispatch({type: 'ASD', payload: s})

/* function mapStateToProps(centralState){
    return{
        localVar: centralState.*reducer*,
    }
}
export default connect(mapStateToProps)(App) */


// export functions here, import where we want to use like "import {function} from './main.js'"

// dataname ex: 'students'
function CRUDCreater(dataname) {
    return function (dataname) {
        function students(state = [], action) {
            switch (action.type) {
                case ('LOAD_' + dataname):
                    return state
                case ('ADD_' + dataname):
                    return [...state, action.payload]
                case ('DELETE_' + dataname):
                    return state.filter((s) => s.name !== action.payload.name)
                case ('FETCH_' + dataname + '_SUCCESS'):
                    return action.payload;
            }
            return state;
        }
    }
}

CRUDCreater('product')
CRUDCreater('categorie')
CRUDCreater('sale')

var initialState = {
    products: [
        {
            _id: '0', name: 'First Product', price: '0', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image0.jpg'
        },
        {
            _id: '1', name: 'Second Product', price: '100', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image1.jpg'
        },
        {
            _id: '2', name: 'Third Product', price: '200', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image2.jpg'
        },
        {
            _id: '3', name: 'Fourth Product', price: '300', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image3.jpg'
        },
        {
            _id: '4', name: 'Fifth Product', price: '400', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image4.jpg'
        },
    ],
    categories: [
        {
            id: '0',
            name: 'First Categorie'
        },
        {
            id: '1',
            name: 'Second Categorie'
        },
        {
            id: '2',
            name: 'Third Categorie'
        }
    ],
    shoppingcart: {
        products: [
            {
                _id: '3', name: 'Fourth Product', price: '300', description: 'Random thoughts',
                brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image3.jpg'
            },
            {
                _id: '4', name: 'Fifth Product', price: '400', description: 'Random thoughts',
                brand: 'Cool Brand', producer: 'Cool Producer', imageUrl: 'www.google.com/image4.jpg'
            }
        ],
        customer: {
            id: '1', name: 'generic full name', address: 'generic street'
        }
    },
    customers: [],
    filter: {
        sortBy: 'RANDOM',
        view: VIEW_PRODUCT_GRID,
        minPrice: 0,
        maxPrice: 10000
    },
    currentProduct: {}
}

function products(state = initialState.products, action) {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return state

        case FETCH_PRODUCTS_SUCCESS:
            return [...state, ...action.payload]

        case FETCH_PRODUCTS_BY_ID_SUCCESS:
            return [...action.payload]

        case FETCH_PRODUCTS_BY_PRICE_SUCCESS:
            let newProducts = action.payload[0].filter((p) => {
                return action.payload[1] < p.price && p.price < action.payload[2]
            })
            return [...newProducts]

        default:
            break;
    }

    return state;
}

function categories(state = initialState.categories, action) {
    switch (action.type) {
        case SHOW_CATEGORIES:
            return state

        default:
            break;
    }
    return state;
}

function shoppingCart(state = initialState.shoppingcart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('ADD_TO_CART')
            return Object.assign({}, state, { products: [...state.products, action.payload] })

        default:
            break;
    }
    return state;
}

function filter(state = initialState.filter, action) {
    switch (action.type) {
        case SWITCH_VIEW:
            if (state.view === VIEW_PRODUCT_GRID) {
                return Object.assign({}, state, { view: VIEW_PRODUCT_LIST })
            } else {
                return Object.assign({}, state, { view: VIEW_PRODUCT_GRID })
            }

        case SET_SORTBY:
            if (action.payload[0] === SORTBY_PRICE) {
                store.dispatch(fetchProductsByPrice(action.payload[1], action.payload[2]))

                return Object.assign({}, state, { sortBy: SORTBY_PRICE })
            }
            else if (action.payload[0] === SORTBY_CATEGORY) {
                store.dispatch(fetchProductsByTypeId(action.payload[1]))

                return Object.assign({}, state, { sortBy: SORTBY_CATEGORY })
            }
    }
    return state;
}

function currentProduct(state = initialState.currentProduct, action) {
    switch (action.type) {
        case SET_CURRENTPRODUCT:
            console.log('SET_CURRENTPRODUCT')
            return Object.assign({}, state, action.payload)

    }
    return state;
}


const centralState = combineReducers({
    products,
    categories,
    shoppingCart,
    filter,
    currentProduct
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(centralState, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

store.dispatch(fetchProducts())

// Add the respective action in a reducer
// Call store.dispatch(fetchStudent())
function fetchProducts() {
    return function () {
        fetch('http://bestlab.us:8080/products')
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    payload: data
                })
            })
    }
}

function fetchProductsByPrice(min, max) {
    return function () {
        fetch('http://bestlab.us:8080/products')
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_PRODUCTS_BY_PRICE_SUCCESS,
                    payload: [data, min, max]
                })
            })
    }
}

function fetchProductsByTypeId(id) {
    return function () {
        fetch('http://bestlab.us:8080/products/byType/' + id)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_PRODUCTS_BY_ID_SUCCESS,
                    payload: data
                })
            })
    }
}

// In the respective action => return [...state, action.payload];
function addProduct(product) {
    return function () {
        fetch('http://bestlab.us:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(product)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                store.dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: data })
            })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider >, document.getElementById('app')

)