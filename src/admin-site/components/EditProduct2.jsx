import React from 'react'
import { Col, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button } from 'react-bootstrap'

export default class EditProduct2 extends React.Component {
    constructor(props) {
        super(props)
        this.handleEditProduct = this.handleEditProduct.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
        this.state = {
            fields: {
                id: null, 
                name: null, 
                price: null,  
                description: null,  
                brand: null,  
                producer: null,  
                imageUrl: null, 
                productType: null
            },
            errors: []
        }
    }

    handleValidation() {
        let fields = this.state.fields
        let err = []
        let formIsValid = true

        if (fields.id.value.charAt(0) !== 'p') {
            formIsValid = false
            err.push("ID must start with 'p'.")
        }

        if (fields.name.value === '') {
            formIsValid = false
            err.push("Name cannot be empty.")
        }

        if (fields.productType.value.charAt(0) !== 'c') {
            formIsValid = false
            err.push("Type must start with 'c'.")
        } 

        if (!/^\d+$/.test(fields.price.value)) {
            formIsValid = false
            err.push("Price must be a number.")
        }

        if (fields.description.value === '') {
            formIsValid = false
            err.push("Description cannot be empty.")
        }

        if (fields.brand.value === '') {
            formIsValid = false
            err.push("Brand cannot be empty.")
        }

        if (fields.producer.value === '') {
            formIsValid = false
            err.push("Producer cannot be empty.")
        }

        if (fields.imageUrl.value === '') {
            formIsValid = false
            err.push("Image URL cannot be empty.")
        } 
        
        if (!formIsValid) 
            this.setState({errors: err}, ()=> alert(this.state.errors.join("\n")))
        else this.setState({errors: err})
        return formIsValid
    }

    handleEditProduct() {
        if (this.handleValidation()) {
            console.log(this.state.fields.description.value)
            this.props.handleProductUpdate({ 
                _id: this.props._id,
                id: this.state.fields.id.value,
                name: this.state.fields.name.value,
                price: this.state.fields.price.value, 
                description: this.state.fields.description.value,
                brand: this.state.fields.brand.value, 
                producer: this.state.fields.producer.value, 
                imageUrl: this.state.fields.imageUrl.value,
                productType: this.state.fields.productType.value})
        }
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
            top: '25%',
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
                                    inputRef={node => this.state.fields.id = node}
                                    name="id"
                                    defaultValue={this.props.id}
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
                                    inputRef={node => this.state.fields.name = node}
                                    name="name"
                                    defaultValue={this.props.name}
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
                                    inputRef={node => this.state.fields.productType = node}
                                    name="productType"
                                    defaultValue={this.props.productType}
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
                                    inputRef={node => this.state.fields.price = node}
                                    name="price"
                                    defaultValue={this.props.price}
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
                                    inputRef={node => this.state.fields.description = node}
                                    name="description"
                                    defaultValue={this.props.description}
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
                                    inputRef={node => this.state.fields.brand = node}
                                    name="brand"
                                    defaultValue={this.props.brand}
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
                                    inputRef={node => this.state.fields.producer = node}
                                    name="producer"
                                    defaultValue={this.props.producer}
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
                                    inputRef={node => this.state.fields.imageUrl = node}
                                    name="imageUrl"
                                    defaultValue={this.props.imageUrl}
                                />                            
                            </Col>
                        </FormGroup>

                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Button bsStyle="success" onClick={this.handleEditProduct}>SAVE</Button>
                        </Col>
                    </Form>

                </div>

            </div>
        )
    }
}