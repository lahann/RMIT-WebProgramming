import React from 'react'
import laurids from '../images/laurids.png';
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
                        <Col key='laurids' md={4}>
                            <Panel header='Laurids'>
                                <Image src={laurids} style={imageStyle} />
                                <br />
                                <ul>
                                    <li>S3694530</li>
                                    <li>From Esbjerg, Denmark</li>
                                    <li>Studies Computer Science at University College Nordjylland</li>
                                </ul>
                            </Panel>

                        </Col>
                        <Col key='linh' md={4}>
                            <Panel header='Linh' >
                                <Image src={linh} style={imageStyle} />
                                <br />
                                <ul>
                                    <li>S3689251</li>
                                    <li>From Can Tho, Vietnam</li>
                                    <li>Studies Information Technology at RMIT Vietnam</li>
                                    <li>Worked on admin (main), checkout (main), filter by category (minor)</li>
                                </ul>
                            </Panel>

                        </Col>
                        <Col key='tim' md={4}>
                            <Panel header='Tim' >
                                <Image src={tim} style={imageStyle} />
                                <br />
                                <ul>
                                    <li>S3694604</li>
                                    <li>From Hamburg, Germany</li>
                                    <li>Studies Business Informatics at FernUniversität Hagen</li>
                                    <li>Worked on product overview/ detail page, header, filter, about us, deployment</li>
                                </ul>
                            </Panel>

                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}