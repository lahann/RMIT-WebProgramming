import React from 'react'
import { Provider } from 'react-redux'
import { createStore} from 'redux'
import productApp from '../admin-site/reducers'
import App from '../admin-site/components/App'
import ProductTable from '../admin-site/components/ProductTable'

let store = createStore(productApp)
const PRODUCTS = [
    {id: 1, name: 'p1', price: '$29.99', description: 'a product', 
    brand: 'Originals', producer: 'adidas', imageUrl: '#'},
    {id: 2, name: 'p2', price: '$39.99', description: 'a product', 
    brand: 'NEO', producer: 'adidas', imageUrl: '#'},
];

const Admin = () => (
    <div style={{position: 'relative', top: 59 + 'px', minHeight: 100 + '%'}}>
    <ProductTable products={PRODUCTS} />
    </div>
    
)
// const Admin = () => (
//     <div style={{position: 'relative', top: 59 + 'px', minHeight: 100 + '%'}}>
//         <Provider store={store}>
//             <App />
//         </Provider> 
//     </div>
// )
export default Admin