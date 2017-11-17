import React from 'react'
import Product from '../components/Product.jsx'
import Filter from '../components/Filter.jsx'
import { VIEW_PRODUCT_OVERVIEW } from '../components/Constants.jsx'
import { Grid, Row, Col } from 'react-bootstrap'

export default class ProductOverviewPage extends React.Component {

    render() {
        const gridStyle = {
            width: 85 + '%',
            marginRight: 0 + 'px',
            position: 'relative',
            top: 59
        }
        return (
            <div>
                <Filter />

                <Grid style={gridStyle}>
                    <Row className="show-grid">
                        {this.props.products.map(p =>
                            <Col key={p.id} xs={6} md={4}>
                                {<Product {...p} mode={VIEW_PRODUCT_OVERVIEW} />}
                            </Col>
                        )}
                    </Row>
                </Grid>

            </div >
        )
    }
}