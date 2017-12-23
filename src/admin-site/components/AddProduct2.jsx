import React from 'react'
import { Col, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap'

export default class AddProduct2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddProduct = this.handleAddProduct.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
        this.state = {
            fields: {
                id: '', 
                name: '', 
                productType: '',
                price: '', 
                description: '', 
                brand: '', 
                producer: '', 
                imageUrl: '',
                productType: ''
            },
            errors: []
        }
    }

    handleValidation() {
        let fields = this.state.fields
        let err = []
        let formIsValid = true

        if (fields.id.charAt(0) !== 'p') {
            formIsValid = false
            err.push("ID must start with 'p'.")
        }

        if (fields.name === '') {
            formIsValid = false
            err.push("Name cannot be empty.")
        }

        if (fields.productType.charAt(0) !== 'c') {
            formIsValid = false
            err.push("Type must start with 'c'.")
        } 

        if (!/^\d+$/.test(fields.price)) {
            formIsValid = false
            err.push("Price must be a number.")
        }

        if (fields.description === '') {
            formIsValid = false
            err.push("Description cannot be empty.")
        }

        if (fields.brand === '') {
            formIsValid = false
            err.push("Brand cannot be empty.")
        }

        if (fields.producer === '') {
            formIsValid = false
            err.push("Producer cannot be empty.")
        }

        if (fields.imageUrl === '') {
            formIsValid = false
            err.push("Image URL cannot be empty.")
        } 
        
        if (!formIsValid) 
            this.setState({errors: err}, ()=> alert(this.state.errors.join("\n")))
        else this.setState({errors: err})
        return formIsValid
    }

    handleAddProduct() {
        if (this.handleValidation()) {
            this.props.handleAddProduct(this.state.fields)
        } 
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({fields})
    }

    render() {
        const popup = {
            position: 'fixed',
            width: 100 + '%',
            height: 100 + '%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            backgroundColor: 'rgba(0,0,0, 0.5)'
        }

        const popup_inner = {
            position: 'absolute',
            left: '25%',
            right: '25%',
            top:    '25%',
            margin: 'auto',
            padding: '20px',
            background: 'white'
        }
        
        return (
            <div style={popup}>
                <div style={popup_inner}>
                    <Form horizontal>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                ID
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.id}
                                    name="id"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Name
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.name}
                                    name="name"
                                    onChange={this.handleChange}
                                />                            
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Type
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.productType}
                                    name="productType"
                                    onChange={this.handleChange}
                                />                            
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Price
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.price}
                                    onChange={this.handleChange}
                                    name="price"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Description
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.description}
                                    onChange={this.handleChange}
                                    name="description"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Brand
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.brand}
                                    onChange={this.handleChange}
                                    name="brand"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Producer
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.producer}
                                    onChange={this.handleChange}
                                    name="producer"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Image URL
                            </Col>
                            <Col sm={8}>
                                <FormControl
                                    type="text"
                                    value={this.state.fields.imageUrl}
                                    onChange={this.handleChange}
                                    name="imageUrl"
                                />
                            </Col>
                        </FormGroup>

                        <Col sm={2}></Col>
                        <Col sm={8}>
                        <ButtonToolbar>
                        <Button onClick={this.props.togglePopup}>CANCEL</Button>
                        <Button bsStyle="success" onClick={this.handleAddProduct}>ADD PRODUCT</Button>
                        </ButtonToolbar>

                        </Col>
                    </Form>

                </div>

            </div>
        )
    }
}