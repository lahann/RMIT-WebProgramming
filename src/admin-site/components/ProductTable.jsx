import React from 'react'
import ProductRow from './ProductRow'
import EditProduct from './EditProduct.jsx'
import AddProduct from './AddProduct.jsx'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

export default class ProductTable extends React.Component {
    constructor() {
        super()
        this.state ={editing: null}
        this.handleProductUpdate = this.handleProductUpdate.bind(this)
        this.handleAddProduct = this.handleAddProduct.bind(this)
    }

    handleAddProduct(product) {
        this.props.handleAddProduct(product)
    }
    handleProductUpdate(update) {
        this.setState({editing: null})
        this.props.handleUpdateProduct(update)
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
                    <AddProduct handleAddProduct={this.handleAddProduct}/>
                    </tbody>
                </Table> 
            </div>
        );
    }
}
