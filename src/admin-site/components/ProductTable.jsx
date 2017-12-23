import React from 'react'
import ProductRow from './ProductRow'
import EditProduct2 from './EditProduct2.jsx'
import AddProduct2 from './AddProduct2.jsx'

import { Table, Button, ButtonToolbar } from 'react-bootstrap'

export default class ProductTable extends React.Component {
    constructor() {
        super()
        this.state = { editing: null, showPopup: false }
        this.handleProductUpdate = this.handleProductUpdate.bind(this)
        this.handleAddProduct = this.handleAddProduct.bind(this)
    }

    handleDeleteProduct(id) {
        this.props.handleDeleteProduct(id)
    }

    handleAddProduct(product) {
        this.togglePopup()
        this.props.handleAddProduct(product)
    }
    handleProductUpdate(update) {
        this.setState({ editing: null })
        this.props.handleUpdateProduct(update)
    }

    toggleEditing(product) {
        this.setState({ editing: product})
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render() {
        
        return (
            <div>
                <h1>Products <span><Button bsStyle="success" onClick={this.togglePopup.bind(this)}>ADD NEW</Button></span>
                </h1>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
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
                            return <ProductRow
                                toggleEditing={this.toggleEditing.bind(this, product)}
                                deleteProduct={this.handleDeleteProduct.bind(this, product._id)}
                                key={product._id}
                                {...product}
                            />;
                        })}

                    </tbody>
                </Table>
                {this.state.showPopup ? 
                    <AddProduct2 togglePopup={this.togglePopup.bind(this)} handleAddProduct={this.handleAddProduct} />
                : null}
                {this.state.editing ?
                    <EditProduct2
                        key={`editing-${this.state.editing._id}`}
                        {...this.state.editing}
                        handleProductUpdate={this.handleProductUpdate}
                    />
                : null}
            </div>
        );
    }
}
