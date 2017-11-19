import React from 'react'
import { Col, Row, Grid, xs, md, } from 'react-bootstrap'

export default class Footer extends React.Component {
    render() {
        return (
            <div style={{
                height: 50 + 'px',
                marginTop: -50 + 'px'
            }} >
                <Grid>
                    <Row className="show-grid">
                        <Col xs={4.5} md={3}><code>&lt;{'Questions?'}/&gt; <ul>
                            <li> Help us help you</li>
                            <li> not really, good luck</li>
                            <li> we're still friends, right? cool</li>
                        </ul> </code></Col>
                        <Col xs={4.5} md={3}><code>&lt;{'Follow us'} /&gt;<ul>
                            <li> Github or linkedin or sth</li>
                            <li> Instagram of course</li>
                            <li> we're cool</li>
                        </ul></code></Col>
                        <Col xs={4.5} md={3}><code>&lt;{'Our cool bizz!'} /&gt;<ul>
                            <li> Get a job (slave job?)</li>
                            <li> Seriously, we can't pay you</li>
                            <li> you can still work for us, though</li>
                        </ul></code></Col>
                        <Col xs={4.5} md={3}><code>&lt;{'Sponsors and partners? Maybe?  '} /&gt;<ul>
                            <li> Noone</li>
                            <li> litterally noone</li>
                            <li> We're not broke as long as we don't look at the bank account</li>
                        </ul></code></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}