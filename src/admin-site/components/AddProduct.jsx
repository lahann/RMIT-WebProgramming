import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddProduct = this.handleAddProduct.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleValidation = this.handleValidation.bind(this)
        this.state = {
            fields: {
                id: '', 
                name: '', 
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
            this.setState({fields: {
                id: '', 
                name: '', 
                price: '', 
                description: '', 
                brand: '', 
                producer: '', 
                imageUrl: '',
                productType: ''
            }})
        } 
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({fields})
    }

    render() {

        return (
            <tr>
            {/* <td>{this.props.id}</td> */}
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.id}
                    name="id"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.name}
                    name="name"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.productType}
                    name="productType"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.price}
                    onChange={this.handleChange}
                    name="price"
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.description}
                    onChange={this.handleChange}
                    name="description"
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.brand}
                    onChange={this.handleChange}
                    name="brand"
                />
            </td>       
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.producer}
                    onChange={this.handleChange}
                    name="producer"
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.imageUrl}
                    onChange={this.handleChange}
                    name="imageUrl"
                />
            </td>                          
            <td>
            <Button bsStyle="success" onClick={this.handleAddProduct}>ADD</Button>
            </td>
        </tr>

            
        )
    }
}