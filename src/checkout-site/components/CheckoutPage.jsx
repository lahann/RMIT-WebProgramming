import React from 'react'
import { Table, Button, FormControl, Image } from 'react-bootstrap'
import logo from '../../images/cropped-logo.png';
import AddCustomer from './AddCustomer.jsx'
import { ORDER_STATUS_ENUM } from '../../components/Constants.jsx'

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
        var products = this.props.cartItems && this.props.cartItems.length > 0 ? this.props.cartItems : []
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
            return { id: p.id, imageUrl: p.imageUrl, name: p.name, price: p.price, quantity: p.quantity }
        })
        let status = ORDER_STATUS_ENUM.NEW.id

        let d = new Date()
        var curr_date = d.getDate()
        var curr_month = d.getMonth() + 1 //Months are zero based
        var curr_year = d.getFullYear()
        let date = curr_date + "-" + curr_month + "-" + curr_year
        let total = this.addTotal()
        this.props.handleAddCartAndReset({ customer, products, status, date, total })
    }

    getImageUrl(imageUrl) {
        if (imageUrl === '' || imageUrl === undefined) {
            return logo
        }
        return imageUrl
    }

    render() {
        const divStyle = {
            position: 'relative',
            top: 59 + 'px',
            minHeight: 100 + '%',
            paddingBottom: 100 + 'px',
            margin: 2 + 'px'
        }
        Object.assign(divStyle, window.innerWidth <= 500 ? { maxWidth: 407 + 'px' } : {})

        const imageStyle = window.innerWidth <= 500 ? {
            width: 100 + 'px'
        }
            : {
                maxHeight: 100 + 'px',
                minHeight: 100 + 'px'
            }
        return (
            <div style={divStyle}>
                {this.props.cartItems && this.props.cartItems.length > 0 ?
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
                                        quantityTd = <QuantityEditing quantity={p.quantity} id={p.id} handleUpdateQuantity={this.handleUpdateQuantity.bind(this)} />
                                    else
                                        quantityTd = <QuantityNotEditing quantity={p.quantity} toggleEditing={this.toggleEditing.bind(this, p.id)} />

                                    return (
                                        <tr key={p.id}>
                                            <td><Image src={this.getImageUrl(p.imageUrl)} style={imageStyle} /></td>
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
                    </div> :
                    <div style={{ textAlign: 'center' }}>
                        <h2>There are no items in your Shopping Cart!</h2>
                        <p>Go to our store and find some nice products you can add to your cart.</p>
                    </div>
                }
            </div>
        )
    }
}
