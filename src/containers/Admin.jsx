import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import adminApp from '../admin-site/reducers'
import App from '../admin-site/components/App.jsx'
import thunk from 'redux-thunk'
import { fetchProducts, fetchProductTypes } from '../admin-site/actions'

let store = createStore(adminApp, applyMiddleware(thunk))
store.dispatch(fetchProducts())
store.dispatch(fetchProductTypes())

const Admin = () => (
    <div style={{position: 'relative', top: 59 + 'px', minHeight: 100 + '%', paddingBottom: 100 + 'px'}}>
        <Provider store={store}>
            <App />
        </Provider> 
    </div>
)
export default Admin