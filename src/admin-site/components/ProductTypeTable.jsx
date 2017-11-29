import React from 'react'
import ProductTypeRow from './ProductTypeRow.jsx'
import EditProductType from './EditProductType.jsx'
import AddProductType from './AddProductType.jsx'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

export default class ProductTypeTable extends React.Component {
    constructor() {
        super()
        this.state ={editing: null}
        this.handleProductTypeUpdate = this.handleProductTypeUpdate.bind(this)
        this.handleAddProductType = this.handleAddProductType.bind(this)
    }

    handleAddProductType(productType) {
        this.props.handleAddProductType(productType)
    }
    handleProductTypeUpdate(update) {
        this.setState({editing: null})
        this.props.handleUpdateProductType(update)
    }
    handleDeleteProductType(productTypeId) {
        this.props.handleDeleteProductType(productTypeId)
    }

    toggleEditing(productTypeId) {
        this.setState({editing: productTypeId})
    }

    renderProductTypeOrEditFields(productType) {
        if (this.state.editing === productType._id) {
            return <EditProductType 
                    key={`editing-${productType._id}`}
                    {...productType} 
                    handleProductTypeUpdate={this.handleProductTypeUpdate}
                    />
        } else {
            return <ProductTypeRow 
            toggleEditing={this.toggleEditing.bind(this, productType._id)}
            deleteProductType={this.handleDeleteProductType.bind(this, productType._id)} 
            key={productType._id} 
            {...productType}
            />
        }
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.productTypes.map((productType) => {
                        return this.renderProductTypeOrEditFields(productType);
                    })}
                    <AddProductType handleAddProductType={this.handleAddProductType}/>
                    </tbody>
                </Table> 
            </div>
        );
    }
}
