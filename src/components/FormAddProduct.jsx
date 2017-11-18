import React from 'react'
import { Col, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button} from 'react-bootstrap'

export default class FormAddProduct extends React.Component {
    render() {
        return (
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        ID
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="ID" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Name" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Price
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Price" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={4}>
                        <FormControl componentClass="textarea" placeholder="Description" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Brand
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Brand" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Producer
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Producer" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Image URL
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Image URL" />
                    </Col>
                </FormGroup>

                <Col sm={2}></Col>
                <Col sm={4}>
                    <ButtonToolbar >
                        <Button bsStyle="info">BACK</Button>
                        <Button bsStyle="success">SAVE</Button>
                    </ButtonToolbar>
                </Col>
            </Form>
        );
    }
}