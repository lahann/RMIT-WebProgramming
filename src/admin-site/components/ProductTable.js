import React from 'react'
import ProductRow from './ProductRow'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

const ProductTable = ({products}) => {
    const rows = []
    products.forEach(product => {
        rows.push(
            <ProductRow key={product.id} {...product}/>
        )
    })
    return (
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
            <tbody>{rows}</tbody>
        </Table>
    )
}

export default ProductTable