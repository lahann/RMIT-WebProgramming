import React from 'react'
import VisibleProductTable from '../containers/VisibleProductTable'
import VisibleProductTypeTable from '../containers/VisibleProductTypeTable'


const App = () => (
    <div>
        <h1>Products</h1>
        <VisibleProductTable />
        <hr/>
        <h1>Product Types</h1>
        <VisibleProductTypeTable />
    </div>
)

export default App