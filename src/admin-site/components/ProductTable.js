import React from 'react'
import ProductRow from './ProductRow'
import EditProduct from './EditProduct.jsx'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

export default class ProductTable extends React.Component {
    constructor() {
        super()
        this.state ={editing: null}
        this.handleProductUpdate = this.handleProductUpdate.bind(this)
    }

    handleProductUpdate(update) {
        this.setState({editing: null})
        console.log(update)
        alert("Product updated")
    }

    toggleEditing(productId) {
        this.setState({editing: productId})
    }

    renderProductOrEditFields(product) {
        if (this.state.editing === product.id) {
            return <EditProduct 
                    key={`editing-${product.id}`}
                    {...product} 
                    handleProductUpdate={this.handleProductUpdate}
                    />
        } else {
            return <ProductRow 
            onClick={this.toggleEditing.bind(this, product.id)} 
            key={product.id} 
            {...product}
            />
        }
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover> 
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Producer</th>
                            <th>Image URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((product) => {
                        return this.renderProductOrEditFields(product);
                    })}
                    </tbody>
                </Table> 
            </div>
        );
    }
}
