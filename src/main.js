import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { SHOW_PRODUCTS, SHOW_CATEGORIES } from './components/Actions.jsx'
import App from './containers/App.jsx'

// action.type => String to identify our action
// action.payload => Params for example

// this.props.dispatch({type: 'ASD', payload: s})

/* function mapStateToProps(centralState){
    return{
        localVar: centralState.*reducer*,
    }
}
export default connect(mapStateToProps)(App) */

var initialState = {
    products: [
        {
            id: '0', name: 'First Product', price: '0', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageURL: 'www.google.com/image0.jpg'
        },
        {
            id: '1', name: 'Second Product', price: '100', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageURL: 'www.google.com/image1.jpg'
        },
        {
            id: '2', name: 'Third Product', price: '200', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageURL: 'www.google.com/image2.jpg'
        },
        {
            id: '3', name: 'Fourth Product', price: '300', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageURL: 'www.google.com/image3.jpg'
        },
        {
            id: '4', name: 'Fifth Product', price: '400', description: 'Random thoughts',
            brand: 'Cool Brand', producer: 'Cool Producer', imageURL: 'www.google.com/image4.jpg'
        },
    ],
    categories: [
        { id: '0', name: 'First Categorie' },
        { id: '1', name: 'Second Categorie' },
        { id: '2', name: 'Third Categorie' }
    ],
    customers: [],
    students: []
}

function products(state = initialState.products, action) {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return state.products

        default:
            break;
    }

    return state;
}

function categories(state = initialState.categories, action) {
    switch (action.type) {
        case SHOW_CATEGORIES:
            return state.categories

        default:
            break;
    }
    return state;
}

function shoppingCart(state = [], action) {
    return state;
}

function students(state = initialState.students, action) {
    switch (action.type) {
        case 'FETCH_STUDENT_SUCCESS':
            console.log(action.payload)
            return [...state, action.payload]

        default:
            break;
    }

    return state;
}

const centralState = combineReducers({
    products,
    categories,
    shoppingCart,
    students
})
var store = createStore(centralState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
store.dispatch(fetchStudent())

// Add the respective action in a reducer
// Call store.dispatch(fetchStudent())
function fetchStudent() {
    return function () {
        fetch('http://bestlab.us:8080/students')
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: 'FETCH_STUDENT_SUCCESS',
                    payload: Object.assign({}, initialState, data)
                })
            })
    }
}

// In the respective action => return [...state, action.payload];
function addStudent(student) {
    return function () {
        fetch('http://bestlab.us:8080/students', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(student)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                store.dispatch({ type: 'ADD_STUDENT_SUCCESS', payload: data })
            })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider >, document.getElementById('app')

)