import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import App from './App.jsx'

// action.type => String to identify our action
// action.payload => Params for example

// this.props.dispatch({type: 'ASD', payload: s})

function product(state = [], action) {
    return state;
}

function categorie(state = [], action) {
    return state;
}

function shoppingCart(state = [], action) {
    return state;
}

const centralState = combineReducers({
    product,
    categorie,
    shoppingCart
})

ReactDOM.render(
    <Provider store={createStore(centralState)}>
        <App />
    </Provider>, document.getElementById('app')

)