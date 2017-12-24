import React from 'react'
import { Table, Button, ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap'
import { ORDER_STATUS_ENUM } from '../../components/Constants.jsx'

export default class OrderRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            status: this.determineStatus(props.status)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            status: this.determineStatus(nextProps.status)
        })
    }

    determineStatus(id) {
        switch (id) {
            case ORDER_STATUS_ENUM.NEW.id:
                return ORDER_STATUS_ENUM.NEW

            case ORDER_STATUS_ENUM.PROCESSING.id:
                return ORDER_STATUS_ENUM.PROCESSING

            case ORDER_STATUS_ENUM.DELIVERED.id:
                return ORDER_STATUS_ENUM.DELIVERED

            case ORDER_STATUS_ENUM.COMPLETED.id:
                return ORDER_STATUS_ENUM.COMPLETED

            case ORDER_STATUS_ENUM.PROBLEM.id:
                return ORDER_STATUS_ENUM.PROBLEM
        }
        return undefined
    }

    handleOrderUpdate(newStatus) {
        this.props.handleOrderUpdate({
            _id: this.props._id,
            id: this.state.id,
            status: newStatus.id
        })
    }

    render() {
        return (
            <tr>
                <td>{this.state.id}</td>
                <td>{this.state.status.label}</td>
                <td>
                    {
                        <ButtonToolbar>
                            <DropdownButton title='Change order status' id='order-status-dropdown'>
                                <MenuItem
                                    bsStyle={this.state.status.id !== ORDER_STATUS_ENUM.PROCESSING.id - 1 &&
                                        this.state.status.id !== ORDER_STATUS_ENUM.PROBLEM.id ? "default" : "success"}
                                    disabled={this.state.status.id !== ORDER_STATUS_ENUM.PROCESSING.id - 1 &&
                                        this.state.status.id !== ORDER_STATUS_ENUM.PROBLEM.id}
                                    onSelect={() => { this.handleOrderUpdate(ORDER_STATUS_ENUM.PROCESSING) }}>
                                    {ORDER_STATUS_ENUM.PROCESSING.label}
                                </MenuItem>
                                <MenuItem
                                    bsStyle={this.state.status.id !== ORDER_STATUS_ENUM.DELIVERED.id - 1 &&
                                        this.state.status.id !== ORDER_STATUS_ENUM.PROBLEM.id ? "default" : "success"}
                                    disabled={this.state.status.id !== ORDER_STATUS_ENUM.DELIVERED.id - 1 &&
                                        this.state.status.id !== ORDER_STATUS_ENUM.PROBLEM.id}
                                    onSelect={() => { this.handleOrderUpdate(ORDER_STATUS_ENUM.DELIVERED) }}>
                                    {ORDER_STATUS_ENUM.DELIVERED.label}
                                </MenuItem>
                                <MenuItem
                                    bsStyle={this.state.status.id !== ORDER_STATUS_ENUM.COMPLETED.id - 1 &&
                                        this.state.status.id !== ORDER_STATUS_ENUM.PROBLEM.id ? "default" : "success"}
                                    disabled={this.state.status.id !== ORDER_STATUS_ENUM.COMPLETED.id - 1 &&
                                        this.state.status.id !== ORDER_STATUS_ENUM.PROBLEM.id}
                                    onSelect={() => { this.handleOrderUpdate(ORDER_STATUS_ENUM.COMPLETED) }}>
                                    {ORDER_STATUS_ENUM.COMPLETED.label}
                                </MenuItem>
                            </DropdownButton>
                            <Button
                                bsStyle="danger"
                                disabled={this.state.status.id === ORDER_STATUS_ENUM.PROBLEM.id}
                                onClick={() => { this.handleOrderUpdate(ORDER_STATUS_ENUM.PROBLEM) }}>
                                {ORDER_STATUS_ENUM.PROBLEM.label}
                            </Button>
                        </ButtonToolbar>
                    }
                </td>
            </tr>
        )
    }
}
