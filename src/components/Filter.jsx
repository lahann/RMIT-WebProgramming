import React from 'react'
import { Panel, Clearfix, MenuItem } from 'react-bootstrap'

export default class Filter extends React.Component {

    // Save current filter values to the state, so that other components can access it

    render() {
        const panelStyle = {
            width: 200 + 'px',
            marginLeft: 8 + 'px',
            position: 'fixed',
            top: 59
        }

        return (
            <div>
                <Panel header='Filter' style={panelStyle}>
                    <MenuItem header>Sort by</MenuItem>
                    <MenuItem>Price</MenuItem>
                    <MenuItem>Categorie</MenuItem>
                    <MenuItem divider />
                    <MenuItem header>Change View</MenuItem>
                    <MenuItem>List View</MenuItem>
                    <MenuItem>Grid View</MenuItem>
                </Panel>
            </div>
        )
    }
}