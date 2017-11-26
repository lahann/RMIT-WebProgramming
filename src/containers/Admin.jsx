import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import productApp from '../admin-site/reducers'
import App from '../admin-site/components/App'
import thunk from 'redux-thunk'
import { fetchProducts } from '../admin-site/actions'

let store = createStore(productApp, applyMiddleware(thunk))
store.dispatch(fetchProducts())

const Admin = () => (
    <div style={{position: 'relative', top: 59 + 'px', minHeight: 100 + '%'}}>
        <Provider store={store}>
            <App />
        </Provider> 
    </div>
)
export default Admin