import React from 'react'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import productApp from '../admin-site/reducers'
import App from '../admin-site/components/App'

let store = createStore(productApp)
const Admin = () => (
    <div style={{position: 'relative', top: 59 + 'px', minHeight: 100 + '%'}}>
        <Provider store={store}>
            <App />
        </Provider> 
    </div>
)
export default Admin