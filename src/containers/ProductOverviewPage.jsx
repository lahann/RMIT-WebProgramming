import React from 'react'
import Product from '../components/Product.jsx'
import Filter from '../components/Filter.jsx'
import { VIEW_PRODUCT_GRID, VIEW_PRODUCT_LIST } from '../components/Constants.jsx'
import { Grid, Row, Col, ListGroup } from 'react-bootstrap'

export default class ProductOverviewPage extends React.Component {

    createInnerStructure(mode, amountColumns) {
        return (
            <Row className="show-grid">
                {this.props.products.map(p =>
                    <Col key={p.id} md={amountColumns}>
                        {<Product {...p} mode={mode} />}
                    </Col>
                )}
            </Row>
        )
    }

    createOuterStructure() {
        if (this.props.filter.view === VIEW_PRODUCT_GRID) {
            const gridStyle = {
                width: 85 + '%',
                marginRight: 0 + 'px',
                position: 'relative',
                top: 59
            }

            return (
                <Grid style={gridStyle}>
                    {this.createInnerStructure.bind(this, VIEW_PRODUCT_GRID, 4)()}
                </Grid>
            )
        } else if (this.props.filter.view === VIEW_PRODUCT_LIST) {
            const listStyle = {
                top: 59,
                width: 85 + '%',
                position: 'relative',
                paddingRight: 15 + 'px',
                paddingLeft: 15 + 'px',
                marginRight: 0 + 'px',
                marginLeft: 'auto'
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
                <Filter {...this.props.filter} switchView={this.props.switchView} />

                {outerStructure}

            </div >
        )
    }
}