import React from 'react'
import { Panel, Clearfix, MenuItem, Grid } from 'react-bootstrap'
import { VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID } from './Constants.jsx'

export default class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortBy: props.sortBy,
            view: props.view
        }
    }

    // Is there a way to avoid calling setState()?
    componentWillReceiveProps(nextProps) {
        this.setState({ sortBy: nextProps.sortBy, view: nextProps.view })
    }

    determineDisabled(view) {
        return this.state.view === view
    }

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
                    <Clearfix>
                        <ul className="dropdown-menu open" style={{ display: 'block' }}>
                            <MenuItem header>Sort by</MenuItem>
                            <MenuItem>Price</MenuItem>
                            <MenuItem>Categorie</MenuItem>
                            <MenuItem divider />
                            <MenuItem header>Change View</MenuItem>
                            <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_LIST)} onSelect={this.props.switchView.bind(this)}>List</MenuItem>
                            <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_GRID)} onSelect={this.props.switchView.bind(this)}>Grid</MenuItem>
                        </ul>
                    </Clearfix>
                </Panel>
            </div>
        )
    }
}