import React from 'react'
import ReactDOM from 'react-dom'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

class AddButton extends React.Component {
    render() {
        return (
            <Button bsStyle="success">ADD PRODUCT</Button>
        );
    }
}

class ProductRow extends React.Component {
    render() {
       const product = this.props.product;
       return (
           <tr>
               <td>{product.id}</td>
               <td>{product.name}</td>
               <td>{product.price}</td>
               <td>{product.description}</td>
               <td>{product.brand}</td>
               <td>{product.producer}</td>
               <td>{product.imageUrl}</td>
               <td>
               {
                    <ButtonToolbar>
                        <Button>EDIT</Button>
                        <Button bsStyle="danger">DELETE</Button>
                    </ButtonToolbar>

               }
               </td>
           </tr>
       );
    }
}
class ProductTable extends React.Component {
    render() {
        const rows = []
        this.props.products.forEach((product) => {
            rows.push(
                <ProductRow 
                    product={product}
                    key={product.name} />
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
}

export default class ProductCRUD extends React.Component {
    render() {
        return (
            <div>
                <ProductTable products={this.props.products }/>
                <AddButton />
            </div>
        );
    }
}

// const PRODUCTS = [
//     {id: 1, name: 'p1', price: '$29.99', description: 'a product', 
//     brand: 'Originals', producer: 'adidas', imageUrl: '#'},
//     {id: 2, name: 'p2', price: '$39.99', description: 'a product', 
//     brand: 'NEO', producer: 'adidas', imageUrl: '#'},
// ];

// ReactDOM.render(
//     <ProductCRUD products={PRODUCTS} />,
//     document.getElementById('container')
// );