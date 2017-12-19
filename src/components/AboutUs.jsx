import React from 'react'
import linh from '../images/linh.png';
import tim from '../images/tim.png';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap'

export default class AboutUs extends React.Component {

    render() {
        const imageStyle = {
            width: 90 + '%',
            margin: 'auto',
            display: 'block'
        }
        return (
            <div style={{ position: 'relative', top: 59 + 'px', minHeight: 100 + '%' }}>
                <Grid>
                    <Row className="show-grid">
                        <Col key='linh' md={6}>
                            <Panel header='Linh' >
                                <Image src={linh} style={imageStyle} />
                                <br />
                                <ul>
                                    <li>S3689251</li>
                                    <li>From Can Tho, Vietnam</li>
                                    <li>Studies Information Technology at RMIT Vietnam</li>
                                </ul>
                                <h4>Assignment 1</h4>
                                <p>Worked on..</p>
                                <ul>
                                    <li>..admin (main)</li>
                                    <li>..checkout (main)</li>
                                    <li>..filter by category (minor)</li>
                                </ul>
                                <h4>Assignment 2</h4>
                                <p>Worked on..</p>
                                <ul>
                                    <li>..admin product form</li>
                                </ul>
                            </Panel>
                        </Col>

                        <Col key='tim' md={6}>
                            <Panel header='Tim' >
                                <Image src={tim} style={imageStyle} />
                                <br />
                                <ul>
                                    <li>S3694604</li>
                                    <li>From Hamburg, Germany</li>
                                    <li>Studies Business Informatics at FernUniversität Hagen</li>
                                </ul>
                                <h4>Assignment 1</h4>
                                <p>Worked on..</p>
                                <ul>
                                    <li>..header</li>
                                    <li>..product overview/ detail page</li>
                                    <li>..filter</li>
                                    <li>..about us</li>
                                    <li>..deployment</li>
                                </ul>
                                <h4>Assignment 2</h4>
                                <p>Worked on..</p>
                                <ul>
                                    <li>..configuration of NodeJS/ MongoDB</li>
                                    <li>..deployment</li>
                                </ul>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
