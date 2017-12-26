import React from 'react'
import { Table, Button, ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap'
import { ORDER_STATUS_ENUM } from '../../components/Constants.jsx'
import OrderDetaisl from './OrderDetails.jsx'

export default class OrderRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.status ? this.props.status : 0,
            status: this.props.status ? this.determineStatus(this.props.status) : this.determineStatus(0),
            animationName: ''
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         id: nextProps.status,
    //         status: this.determineStatus(nextProps.status)
    //     })
    // }

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
        this.handleStatusChangeAnimation(newStatus.id === 4)
        this.setState({
            id: newStatus.id,
            status: newStatus
        })
        let _id = this.props._id
        let customer = this.props.customer
        let products = this.props.products
        let date = this.props.date
        let total = this.props.total
        let status = newStatus.id
        this.props.handleOrderUpdate({
            _id, customer, products, status, date, total
        })
    }

    handleStatusChangeAnimation(problem) {
        let styleSheet = document.styleSheets[0];

        let animationName = `animation${Math.round(Math.random() * 100)}`;

        let keyframes = problem ?
            `@-webkit-keyframes ${animationName} {    
                0% {background: red}
                100% {background: none;}
            }`:
            `@-webkit-keyframes ${animationName} {    
                0% {background: rgb(0, 228, 0)}
                100% {background: none;}
            }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        this.setState({
            animationName: animationName
        });
    }

    render() {
        const span = {
            backgroundColor: 'rgb(232,243,236)',
            cursor: 'pointer'
        }
        let style = {
            animationName: this.state.animationName,
            animationTimingFunction: 'ease-in-out',
            animationDuration: '0.6s',
            animationDelay: '0.0s',
            animationIterationCount: 1,
            animationDirection: 'normal',
            animationFillMode: 'forwards'
        }

        return (
            <tr>
                <td onClick={this.props.togglePopup}><span style={span}>{this.props._id}</span></td>
                <td>{this.props.date}</td>
                <td>{this.props.customer.name}</td>
                <td style={style}>{this.state.status.label}</td>
                <td>{this.props.total}</td>
                <td>
                    {
                        <ButtonToolbar>
                            <DropdownButton title='Change status' id='order-status-dropdown'>
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
