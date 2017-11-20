import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root from './containers/Root.jsx'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {
    SHOW_PRODUCTS, SHOW_CATEGORIES, SWITCH_VIEW, SET_SORTBY, VIEW_PRODUCT_LIST,
    VIEW_PRODUCT_GRID, SORTBY_CATEGORY, SORTBY_PRICE, ADD_TO_CART, VISIBILITY_ABOUTUS,
    FETCH_PRODUCTS_SUCCESS
} from './components/Constants.jsx'

// action.type => String to identify our action
// action.payload => Params for example

// this.props.dispatch({type: 'ASD', payload: s})

/* function mapStateToProps(centralState){
    return{
        localVar: centralState.*reducer*,
    }
}
export default connect(mapStateToProps)(App) */

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
            name: 'First Categorie',
            products: [1]
        },
        {
            id: '1',
            name: 'Second Categorie',
            products: [2, 3]
        },
        {
            id: '2',
            name: 'Third Categorie',
            products: [1, 4, 5]
        }
    ],
    shoppingCart: {
        products: [],
        customer: {}
    },
    customers: [],
    filter: {
        sortBy: 'RANDOM',
        view: VIEW_PRODUCT_GRID
    }
}

function products(state = initialState.products, action) {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return state

        case FETCH_PRODUCTS_SUCCESS:
            console.log(action.payload)
            return [...state, ...action.payload]

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

function shoppingCart(state = initialState.shoppingCart, action) {
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
                console.log('SORTBY_PRICE')

                // getState() is just my way to make clear that I need the whole state here to access products
                let newProducts = getState().products.filter((p) => {
                    return action.payload[1] < p.price < action.payload[2]
                })

                return Object.assign({}, state, { sortBy: SORTBY_PRICE })
            }
            else if (action.payload[0] === SORTBY_CATEGORY) {
                console.log('SORTBY_CATEGORY')

                // getState() is just my way to make clear that I need the whole state here to access categories/ products
                let newProducts = []

                getState().categories.filter((c) => {
                    return c.id === action.payload[1]
                }).map((c) =>
                    getState.products.map((p) => {
                        if (c.products.indexOf(p.id) !== -1) {
                            newProducts.push(p)
                        }
                    })
                    )

                return Object.assign({}, state, { sortBy: SORTBY_CATEGORY })
            }
    }
    return state;
}


const centralState = combineReducers({
    products,
    categories,
    shoppingCart,
    filter
})

var store = createStore(centralState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

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