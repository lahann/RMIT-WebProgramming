import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class EditProduct extends React.Component {
    constructor(props) {
        super(props)
        this.handleEditProduct = this.handleEditProduct.bind(this)
        this.state = {
            id: null, 
            name: null, 
            price: null, 
            description: null, 
            brand: null, 
            producer: null, 
            imageUrl: null,
            productType: null            
        }
    }

    handleEditProduct() {
        this.props.handleProductUpdate({
            _id: this.props._id,
            id: this.state.id.value,
            name: this.state.name.value,
            price: this.state.price.value, 
            description: this.state.description.value,
            brand: this.state.brand.value, 
            producer: this.state.producer.value, 
            imageUrl: this.state.imageUrl.value,
            productType: this.state.productType.value
        })
    }

    render() {

        return (
            <tr>
            <td>
            <FormControl
                type="text"
                inputRef={node=>this.state.id=node}
                name="id"
                defaultValue={this.props.id}
            />
        </td>
        <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.name=node}
                    name="name"
                    defaultValue={this.props.name}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.productType=node}
                    name="productType"
                    defaultValue={this.props.productType}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.price=node}
                    name="price"
                    defaultValue={this.props.price}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.description=node}
                    name="description"
                    defaultValue={this.props.description}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.brand=node}
                    name="brand"
                    defaultValue={this.props.brand}
                />
            </td>       
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.producer=node}
                    name="producer"
                    defaultValue={this.props.producer}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.imageUrl=node}
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