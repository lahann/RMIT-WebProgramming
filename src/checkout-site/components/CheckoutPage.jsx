import React from 'react'
import { Table, Button, FormControl } from 'react-bootstrap'
import AddCustomer from './AddCustomer.jsx'

class QuantityNotEditing extends React.Component {
    render() {
        return (
            <p>{this.props.quantity} <Button onClick={this.props.toggleEditing}>EDIT</Button></p>
        )
    }
}

class QuantityEditing extends React.Component {
    constructor() {
        super()
        this.state = {quantity: null}
    }

    handleUpdateQuantity() {
        this.props.handleUpdateQuantity({
            id: this.props.id, 
            quantity: this.state.quantity.value
        })
    }

    render() {
        return (
            <div>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.quantity=node}
                    name="quantity"
                    defaultValue={this.props.quantity}
                />
                <Button bsStyle="success" onClick={this.handleUpdateQuantity.bind(this)}>SAVE</Button>
            </div>
        )
    }
}

export default class CheckoutPage extends React.Component {

    constructor() {
        super()
        this.state = {editing: null}
    }
    
    toggleEditing(id) {
        this.setState({editing: id})
    }
     
    handleDeleteCartItem(id) {
        this.props.handleDeleteCartItem(id)
    }

    handleUpdateQuantity(update) {
        this.setState({editing: null})
        this.props.handleUpdateQuantity(update)
    }

    handleAddCartAndReset(customer) {
        let products = this.props.cartItems.map(p => ( {id: p.id, quantity: p.quantity} ))
        this.props.handleAddCartAndReset({customer, products})
    }

    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cartItems.map(p => {
                            let quantityTd = null
                            if (this.state.editing === p.id) 
                                quantityTd = <QuantityEditing quantity={p.quantity} id={p.id} handleUpdateQuantity={this.handleUpdateQuantity}/>
                            else 
                                quantityTd = <QuantityNotEditing quantity={p.quantity} toggleEditing={this.toggleEditing.bind(this, p.id)} />

                            return (
                                <tr>
                                    <td><Image src={p.imageUrl} /></td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{quantityTd}</td>
                                    <td><Button bsStyle="danger" onClick={()=>{if (confirm(`Are you sure you want to delete product '${p.name}'?`)) 
                                                        this.handleDeleteCartItem.bind(this, p.id)}}>
                                    DELETE</Button></td>  
                                </tr>
                            )
                        })}
                        <tr>
                            
                        </tr>
                    </tbody>

                </Table>
                <AddCustomer handleAddCartAndReset={this.handleAddCartAndReset}/>

            </div>
        )
    }
}