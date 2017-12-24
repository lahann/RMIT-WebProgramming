import React from 'react'
import OrderRow from './OrderRow.jsx'
import { Table, Button, ButtonToolbar } from 'react-bootstrap'
import { ORDER_STATUS_ENUM } from '../../components/Constants.jsx'

export default class OrderTable extends React.Component {
    constructor() {
        super()
        this.handleOrderUpdate = this.handleOrderUpdate.bind(this)
    }

    handleOrderUpdate(update) {
        this.props.handleOrderUpdate(update)
    }

    renderOrderFields(order) {
        return <OrderRow
            handleOrderUpdate={this.handleOrderUpdate}
            key={order._id}
            {...order}
        />
    }

    render() {
        return (
            <div>
                {this.props.orders && this.props.orders.length > 0 ?
                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.orders.map((order) => {
                                return this.renderOrderFields(order);
                            })}

                        </tbody>
                    </Table> :
                    <div style={{ textAlign: 'center' }}>
                        <h2>There are no orders yet</h2>
                    </div>
                }
            </div>
        );
    }
}
