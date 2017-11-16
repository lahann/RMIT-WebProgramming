import React from 'react'
import Product from '../components/Product.jsx'
import { VIEW_PRODUCT_OVERVIEW } from '../components/Constants.jsx'
import { Grid, Row, Col } from 'react-bootstrap'

// Class for Constants -> 

export default class ProductOverviewPage extends React.Component {

    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        {this.props.products.map(p =>
                            <Col key={p.id} xs={6} md={4}>
                                {<Product {...p} mode={VIEW_PRODUCT_OVERVIEW} />}
                            </Col>
                        )}
                    </Row>
                </Grid>
            </div>
        )
    }
}