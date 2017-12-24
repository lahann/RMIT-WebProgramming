import React from 'react'
import VisibleProductTable from '../containers/VisibleProductTable'
import VisibleProductTypeTable from '../containers/VisibleProductTypeTable'
import VisibleOrderTable from '../containers/VisibleOrderTable'

const App = () => (
    <div>
        <VisibleProductTable />
        <hr />
        <h1>Product Types</h1>
        <VisibleProductTypeTable />
        <hr />
        <h1>Orders</h1>
        <VisibleOrderTable />
    </div>
)

export default App