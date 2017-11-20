import React from 'react'
import { Clearfix, MenuItem, DropdownButton } from 'react-bootstrap'
import { VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID, SORTBY_CATEGORY, SORTBY_PRICE } from './Constants.jsx'

export default class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortBy: props.sortBy,
            view: props.view,
            priceRange: props.priceRange
        }
    }

    // Is there a way to avoid calling setState() or is it okay?
    componentWillReceiveProps(nextProps) {
        this.setState({ sortBy: nextProps.sortBy, view: nextProps.view })
    }

    determineDisabled(view) {
        return this.state.view === view
    }

    render() {
        const panelStyle = {
            marginLeft: 8 + 'px',
            position: 'fixed',
            top: 59
        }
        const inputStyle = {
            width: 40 + 'px'
        }

        return (
            <div>
                <Clearfix style={panelStyle}>
                    <ul className="dropdown-menu open" style={{ display: 'block', width: 200 + 'px' }}>
                        <MenuItem header>Sort by</MenuItem>
                        <MenuItem>Price</MenuItem>
                        <ul>
                            <MenuItem>0-20</MenuItem>
                            <MenuItem>20-50</MenuItem>
                            <MenuItem>50-100</MenuItem>
                            <MenuItem>100-500</MenuItem>
                            <MenuItem>>500</MenuItem>
                        </ul>
                        <input type="text" style={inputStyle} /> - 
                         <input type="text" style={inputStyle} />
                        <button>Apply</button>
                        <DropdownButton id='categoryDropdown' title='Category' noCaret style={{
                            borderColor: 'white', width: 198 + 'px',
                            textAlign: 'left'
                        }}  >
                            {this.props.categories.map((c) =>
                                <MenuItem key={c.id} eventKey="1" style={{ width: 196 + 'px' }} onSelect={this.props.setSortBy.bind(this, [SORTBY_CATEGORY, c.id])}>
                                    {c.name}
                                </MenuItem>
                            )}
                        </DropdownButton>
                        <MenuItem divider />
                        <MenuItem header>Change View</MenuItem>
                        <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_LIST)} onSelect={this.props.switchView.bind(this)}>List</MenuItem>
                        <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_GRID)} onSelect={this.props.switchView.bind(this)}>Grid</MenuItem>
                    </ul>
                </Clearfix>
            </div>
        )
    }
}