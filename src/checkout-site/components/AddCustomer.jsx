import React from 'react'
import { Col, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap'

export default class AddCustomer extends React.Component {
    constructor() {
        super()
        this.state = {
            fields: {
                name: '',
                address: '',
                email: '',
                phone: ''
            },
            errors: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
        this.handleAddCartAndReset = this.handleAddCartAndReset.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({ fields })
    }

    handleValidation() {
        let fields = this.state.fields
        let errors = []
        let formIsValid = true

        if (fields.name === '') {
            formIsValid = false
            errors.push("Name cannot be empty.")
        }

        if (fields.address === '') {
            formIsValid = false
            errors.push("Address cannot be empty.")
        }

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (fields.email === '') {
            formIsValid = false
            errors.push("Email cannot be empty.")
        } else if (!re.test(fields.email)) {
            formIsValid = false
            errors.push(fields.email + " is not valid.")
        }

        if (!/^\d+$/.test(fields.phone)) {
            formIsValid = false
            errors.push("Phone must be a number.")
        }

        if (!formIsValid)
            this.setState({ errors: errors }, () => alert(this.state.errors.join("\n")))
        else this.setState({ errors: errors })
        return formIsValid
    }

    handleAddCartAndReset() {
        if (this.handleValidation()) {
            alert('Your order has been placed.')
            this.props.handleAddCartAndReset(this.state.fields)
            this.setState({
                fields: {
                    name: '',
                    address: '',
                    email: '',
                    phone: ''
                }
            })
        }
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={1}>
                        Full name
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            type="text"
                            value={this.state.fields.name}
                            name="name"
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={1}>
                        Address
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            type="text"
                            value={this.state.fields.address}
                            name="address"
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={1}>
                        Email
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            type="text"
                            value={this.state.fields.email}
                            name="email"
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={1}>
                        Phone
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            type="text"
                            value={this.state.fields.phone}
                            name="phone"
                            onChange={this.handleChange}
                        />
                    </Col>
                </FormGroup>
                <Col sm={1}></Col>
                <Col sm={3}>
                    <ButtonToolbar >
                        <Button bsStyle="success" onClick={this.handleAddCartAndReset}>PLACE MY ORDER</Button>
                    </ButtonToolbar>
                </Col>
            </Form>
        );
    }
}