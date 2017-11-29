import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddProduct = this.handleAddProduct.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            id: '', 
            name: '', 
            price: '', 
            description: '', 
            brand: '', 
            producer: '', 
            imageUrl: '',
            productType: ''
        }
    }

    handleAddProduct() {
        this.props.handleAddProduct(this.state)
        this.setState({
            id: '', 
            name: '', 
            price: '', 
            description: '', 
            brand: '', 
            producer: '', 
            imageUrl: '',
            productType: ''
        })
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {

        return (
            <tr>
            {/* <td>{this.props.id}</td> */}
            <td>
                <FormControl
                    type="text"
                    value={this.state.id}
                    name="id"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.productType}
                    name="productType"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.price}
                    onChange={this.handleChange}
                    name="price"
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.brand}
                    onChange={this.handleChange}
                    name="brand"
                />
            </td>       
            <td>
                <FormControl
                    type="text"
                    value={this.state.producer}
                    onChange={this.handleChange}
                    name="producer"
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.imageUrl}
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