import React from 'react'
import { Clearfix, MenuItem, DropdownButton } from 'react-bootstrap'
import { VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID, SORTBY_CATEGORY, SORTBY_PRICE } from './Constants.jsx'

export default class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortBy: props.sortBy,
            view: props.view,
            minPrice: props.minPrice,
            maxPrice: props.maxPrice
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ sortBy: nextProps.sortBy, view: nextProps.view })
    }

    determineDisabled(view) {
        return this.state.view === view
    }

    handleChange(e) {
        var name = e.target.name
        this.setState({ [name]: e.target.value })
    }

    handleFocus(e) {
        e.target.select();
    }

    normalView() {
        const panelStyle = {
            marginLeft: 8 + 'px',
            position: 'fixed',
            top: 59
        }
        const inputStyle = {
            width: 55 + 'px',
            margin: 5 + 'px',
            borderRadius: 4 + 'px'
        }
        const ulStyle = { display: 'block', width: 200 + 'px' }
        return (
            <div>
                <Clearfix style={panelStyle}>
                    <ul className="dropdown-menu open" style={{ display: 'block', width: 200 + 'px' }}>

                        <MenuItem header>Price</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 0, 20])}>0-20</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 20, 50])}>20-50</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 50, 100])}>50-100</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 100, 500])}>100-500</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 500, Number.MAX_VALUE])}>>500</MenuItem>

                        <div>
                            <input type="text" name='minPrice' style={inputStyle} value={this.state.minPrice} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus} />
                            -
                            <input type="text" name='maxPrice' style={inputStyle} value={this.state.maxPrice} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus} />
                            <button onClick={this.props.setSortBy.bind(this, [SORTBY_PRICE, this.state.minPrice, this.state.maxPrice])} style={{ width: 55 + 'px' }}>
                                Apply
                            </button>
                        </div>
                        <MenuItem divider />

                        <MenuItem header>Category</MenuItem>
                        {this.props.categories.map((c) =>
                            <MenuItem key={c.id} style={{ width: 196 + 'px' }} onSelect={this.props.setSortBy.bind(this, [SORTBY_CATEGORY, c.id])}>
                                {c.name}
                            </MenuItem>
                        )}
                        <MenuItem divider />

                        <MenuItem header>Change View</MenuItem>
                        <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_LIST)} onSelect={this.props.switchView.bind(this)}>List</MenuItem>
                        <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_GRID)} onSelect={this.props.switchView.bind(this)}>Grid</MenuItem>
                        <MenuItem divider />

                        <MenuItem onSelect={this.props.resetFilter.bind(this)}>Reset </MenuItem>
                    </ul>
                </Clearfix>
            </div >
        )
    }

    mobileView() {
        const panelStyle = {
            marginLeft: 8 + 'px',
            position: 'sticky',
            marginTop: 59 + 'px'
        }
        const inputStyle = {
            width: 55 + 'px',
            margin: 5 + 'px',
            borderRadius: 4 + 'px'
        }
        const ulStyle = {
            display: 'block',
            width: 94 + '%',
            position: 'relative',
            marginLeft: 8 + 'px',
            marginBottom: 10 + 'px'
        }

        return (
            this.view(panelStyle, ulStyle, inputStyle)
        )
    }

    view(panelStyle, ulStyle, inputStyle) {
        return (
            <div>
                <Clearfix style={panelStyle}>
                    <ul className="dropdown-menu open" style={ulStyle}>

                        <MenuItem header>Price</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 0, 20])}>0-20</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 20, 50])}>20-50</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 50, 100])}>50-100</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 100, 500])}>100-500</MenuItem>
                        <MenuItem onSelect={this.props.setSortBy.bind(this, [SORTBY_PRICE, 500, Number.MAX_VALUE])}>>500</MenuItem>

                        <div>
                            <input type="text" name='minPrice' style={inputStyle} value={this.state.minPrice} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus} />
                            -
                <input type="text" name='maxPrice' style={inputStyle} value={this.state.maxPrice} onChange={this.handleChange.bind(this)} onFocus={this.handleFocus} />
                            <button onClick={this.props.setSortBy.bind(this, [SORTBY_PRICE, this.state.minPrice, this.state.maxPrice])} style={{ width: 55 + 'px' }}>
                                Apply
                </button>
                        </div>
                        <MenuItem divider />

                        <MenuItem header>Category</MenuItem>
                        {this.props.categories.map((c) =>
                            <MenuItem key={c.id} style={{ width: 196 + 'px' }} onSelect={this.props.setSortBy.bind(this, [SORTBY_CATEGORY, c.id])}>
                                {c.name}
                            </MenuItem>
                        )}
                        <MenuItem divider />

                        <MenuItem header>Change View</MenuItem>
                        <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_LIST)} onSelect={this.props.switchView.bind(this)}>List</MenuItem>
                        <MenuItem disabled={this.determineDisabled.bind(this)(VIEW_PRODUCT_GRID)} onSelect={this.props.switchView.bind(this)}>Grid</MenuItem>
                        <MenuItem divider />

                        <MenuItem onSelect={this.props.resetFilter.bind(this)}>Reset </MenuItem>
                    </ul>
                </Clearfix>
            </div >
        )
    }

    render() {
        if (this.props.isMobileView) {
            return this.mobileView()
        } else {
            return this.normalView()
        }
    }
}