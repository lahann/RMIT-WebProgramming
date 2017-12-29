import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import VisibleProductTable from '../containers/VisibleProductTable'
import VisibleProductTypeTable from '../containers/VisibleProductTypeTable'
import VisibleOrderTable from '../containers/VisibleOrderTable'

const App = () => (
     
    <Tabs defaultActiveKey={1} style={style}>
        <Tab eventKey={1} title="Products"><VisibleProductTable /></Tab>
        <Tab eventKey={2} title="Product Types"><VisibleProductTypeTable /></Tab>
        <Tab eventKey={3} title="Orders"><VisibleOrderTable /></Tab>
    </Tabs>
)

const style = {
    marginLeft: '5%',
    marginRight: '5%'
}

export default App