import React from 'react'
import Filter from '../components/Filter.jsx'
import Product from '../components/Product.jsx'
import { Grid, Row, Col, ListGroup } from 'react-bootstrap'
import { VIEW_PRODUCT_GRID, VIEW_PRODUCT_LIST } from '../components/Constants.jsx'

export default class ProductOverviewPage extends React.Component {

    createInnerStructure(mode, amountColumns) {
        return (
            <Row className="show-grid">
                {this.props.products.map(p =>
                    <Col key={p._id} lg={amountColumns} style={{ marginTop: 10 + 'px' }} >
                        {<Product {...p} mode={mode} addToCart={this.props.addToCart} onProductClick={this.props.onProductClick.bind(this, p)} />}
                    </Col>
                )}
            </Row>
        )
    }

    createOuterStructure() {
        if (this.props.filter.view === VIEW_PRODUCT_GRID) {
            let width = this.props.isMobileView ? 100 + '%' : 85 + '%'
            let top = this.props.isMobileView ? 0 + 'px' : 51 + 'px'
            const gridStyle = {
                top: top,
                width: width,
                marginRight: 0 + 'px',
                position: 'relative',
                paddingBottom: 100 + 'px',
                minHeight: 100 + '%'
            }

            return (
                <Grid style={gridStyle}>
                    {this.createInnerStructure.bind(this, VIEW_PRODUCT_GRID, 4)()}
                </Grid>
            )
        } else if (this.props.filter.view === VIEW_PRODUCT_LIST) {
            let width = this.props.isMobileView ? 100 + '%' : 129 + '%'
            let marginLeft = this.props.isMobileView ? 0 + '%' : 15 + '%'

            const listStyle = {
                top: 51,
                width: width,
                position: 'relative',
                paddingRight: 15 + 'px',
                paddingLeft: 15 + 'px',
                marginRight: 0 + 'px',
                marginLeft: marginLeft,
                paddingBottom: 100 + 'px',
                minHeight: 100 + '%'
            }

            return (
                <ListGroup componentClass="ul" style={listStyle}>
                    {this.createInnerStructure.bind(this, VIEW_PRODUCT_LIST, 8)()}
                </ListGroup >
            )
        }
    }


    render() {
        let outerStructure = this.createOuterStructure.bind(this)();
        return (
            <div>
                <Filter
                    {...this.props.filter}
                    categories={this.props.categories}
                    switchView={this.props.switchView}
                    setSortBy={this.props.setSortBy}
                    resetFilter={this.props.resetFilter}
                    isMobileView={this.props.isMobileView}
                />

                {outerStructure}

            </div >
        )
    }
}