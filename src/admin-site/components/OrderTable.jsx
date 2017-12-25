import React from 'react'
import OrderRow from './OrderRow.jsx'
import OrderDetails from './OrderDetails.jsx'
import { Table, Button, ButtonToolbar } from 'react-bootstrap'
import { ORDER_STATUS_ENUM } from '../../components/Constants.jsx'

export default class OrderTable extends React.Component {
    constructor() {
        super()
        this.handleOrderUpdate = this.handleOrderUpdate.bind(this)
        this.state = {order: null}
    }

    togglePopup(order) {
        this.setState({order})
        
    }

    handleOrderUpdate(update) {
        this.props.handleOrderUpdate(update)
    }

    render() {
        return (
            <div>
                {this.props.orders && this.props.orders.length > 0 ?
                    <div>
                         <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Status</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.orders.map((order) => {
                                return <OrderRow
                                    togglePopup={this.togglePopup.bind(this, order)}
                                    handleOrderUpdate={this.handleOrderUpdate}
                                    key={order._id}
                                    {...order}
                                />
                            })}

                        </tbody>
                    </Table> 
                    {this.state.order ? 
                        <OrderDetails 
                            key={`editing-${this.state.order._id}`}
                            {...this.state.order}
                            togglePopup={this.togglePopup.bind(this, null)}
                        />
                    : null}
                    </div>
                    
                    : <div style={{ textAlign: 'center' }}>
                        <h2>There are no orders yet</h2>
                    </div>
                }
            </div>
        );
    }
}
