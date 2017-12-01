import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.handleEditProduct = this.handleEditProduct.bind(this)
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
            this.props.handleProductUpdate({
                _id: this.props._id,
                id: this.state.fields.id.value,
                name: this.state.fields.name.value,
                price: this.state.fields.price.value, 
                description: this.state.fields.description.value,
                brand: this.state.fields.brand.value, 
                producer: this.state.fields.producer.value, 
                imageUrl: this.state.fields.imageUrl.value,
                productType: this.state.fields.productType.value
            })
        }
    }

    render() {

        return (
            <tr>
            <td>
            <FormControl
                type="text"
                inputRef={node=>this.state.fields.id=node}
                name="id"
                defaultValue={this.props.id}
            />
        </td>
        <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.name=node}
                    name="name"
                    defaultValue={this.props.name}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.productType=node}
                    name="productType"
                    defaultValue={this.props.productType}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.price=node}
                    name="price"
                    defaultValue={this.props.price}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.description=node}
                    name="description"
                    defaultValue={this.props.description}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.brand=node}
                    name="brand"
                    defaultValue={this.props.brand}
                />
            </td>       
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.producer=node}
                    name="producer"
                    defaultValue={this.props.producer}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.imageUrl=node}
                    name="imageUrl"
                    defaultValue={this.props.imageUrl}
                />
            </td>                          
            <td>
            {
            <ButtonToolbar>
                <Button bsStyle="success" onClick={this.handleEditProduct}>SAVE</Button>
            </ButtonToolbar>

            }
            </td>
        </tr>

            
        )
    }
}