import React from 'react'
import { Table, Button, FormControl, Image } from 'react-bootstrap'
import logo from '../../images/cropped-logo.png';
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
        this.state = { quantity: null }
    }

    handleUpdateQuantity() {
        let q = this.state.quantity.value
        if (!/^\d+$/.test(q))
            alert("Quantity must be a number.")
        else
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
                    inputRef={node => this.state.quantity = node}
                    name="quantity"
                    defaultValue={this.props.quantity}
                />
                <Button bsStyle="success" onClick={this.handleUpdateQuantity.bind(this)}>SAVE</Button>
            </div>
        )
    }
}

export default class CheckoutPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = { editing: null }
        this.addTotal = this.addTotal.bind(this)
    }

    addTotal() {
        var total = 0
        var products = this.props.cartItems
        products.forEach(function (p) {
            total += Number(p.price) * Number(p.quantity)
        })

        return total
    }
    toggleEditing(id) {
        this.setState({ editing: id })
        this.handleDeleteCartItem = this.handleDeleteCartItem.bind(this)
    }

    handleDeleteCartItem(id) {
        this.props.handleDeleteCartItem(id)
    }

    handleUpdateQuantity(update) {
        this.setState({ editing: null })
        this.props.handleUpdateQuantity(update)
    }

    handleAddCartAndReset(customer) {
        let products = this.props.cartItems.map(p => {
            return { id: p.id, quantity: p.quantity }
        })
        this.props.handleAddCartAndReset({ customer, products })
    }

    getImageUrl(imageUrl) {
        if (imageUrl === '' || imageUrl === undefined) {
            return logo
        }
        return imageUrl
    }

    render() {
        return (
            <div style={{ position: 'relative', top: 59 + 'px', minHeight: 100 + '%', paddingBottom: 100 + 'px' }}>
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
                                quantityTd = <QuantityEditing quantity={p.quantity} id={p.id} handleUpdateQuantity={this.handleUpdateQuantity.bind(this)} />
                            else
                                quantityTd = <QuantityNotEditing quantity={p.quantity} toggleEditing={this.toggleEditing.bind(this, p.id)} />

                            return (
                                <tr key={p.id}>
                                    <td><Image src={this.getImageUrl(p.imageUrl)} style={{ maxHeight: 100 + 'px', minHeight: 100 + 'px' }} /></td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{quantityTd}</td>
                                    <td><Button bsStyle="danger" onClick={(e) => {
                                        if (confirm(`Are you sure you want to delete product '${p.name}'?`)) {
                                            this.handleDeleteCartItem(p.id)
                                        }
                                    }}>
                                        DELETE</Button></td>
                                </tr>
                            )
                        })}
                        <tr>

                        </tr>
                    </tbody>

                </Table>

                <h3>Total: ${this.addTotal()}</h3>
                <hr />
                <AddCustomer handleAddCartAndReset={this.handleAddCartAndReset.bind(this)} />

            </div>
        )
    }
}
