import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
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

function fetchStudent(){
    return function(dispatch){
        fetch('http://bestlab.us:8080/students')
        .then(function(res){
            return res.json;
        })
        .then(function(data){
            dispatch({
                type: 'FETCH_STUDENT_SUCCESS',
                payload: data
            })
        })
    }
}
// dataname ex: 'students'
function CRUDCreater(dataname){
    return function(dataname){
        function students(state=[], action) { 
            switch (action.type){
                case('LOAD_' + dataname):
                return state
                case('ADD_' + dataname):
                return [...state, action.payload]
                case('DELETE_' + dataname):
                return state.filter((s)=>s.name!==action.payload.name)
                case('FETCH_' + dataname + '_SUCCESS'):
                return action.payload;
                return state;
            }
        }
    }
}
CRUDCreater('product')
CRUDCreater('categorie')
CRUDCreater('sale')

function shoppingCart(state = [], action) {
    return state;
}

const centralState = combineReducers({
    product,
    categorie,
    shoppingCart,
    sale
})

ReactDOM.render(
    <Provider store={createStore(centralState)}>
        <App />
    </Provider>, document.getElementById('app')

)