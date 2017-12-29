import React from 'react'
import { Table, Button, FormControl, Image } from 'react-bootstrap'
import logo from '../../images/cropped-logo.png'

export default class OrderDetails extends React.Component {
    getImageUrl(imageUrl) {
        if (imageUrl === '' || imageUrl === undefined) {
            return logo
        }
        return imageUrl
    }

    render() {

        return (
            <div >
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr><th>Customer Info</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>{this.props.customer.name}</p>
                                    <p>{this.props.customer.address}</p>
                                    <p>{this.props.customer.email}</p>
                                    <p>{this.props.customer.phone}</p>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <hr />
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(p => {
                                return (
                                    <tr key={p.id}>
                                        <td><Image src={this.getImageUrl(p.imageUrl)} style={{ maxHeight: 50 + 'px', minHeight: 50 + 'px' }} /></td>
                                        <td>{p.name}</td>
                                        <td>{p.price}</td>
                                        <td>{p.quantity}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <Table>
                        <tbody>
                        <tr>
                                <th>Total</th>
                                <td>${this.props.total}</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{this.props.date}</td>
                            </tr>
                            {/* <tr>
                                <td align="left"><Button onClick={this.props.togglePopup}>CLOSE</Button></td>
                                <td></td>
                            </tr> */}
                        </tbody>
                    </Table>
                    <p align="right"><Button onClick={this.props.togglePopup}>CLOSE</Button></p>
                    
            </div>
        )
    }
}