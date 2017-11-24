import React from 'react'
import { VIEW_PRODUCT_DETAILS, VIEW_PRODUCT_EDIT, VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID } from '../components/Constants.jsx'
import ReactTooltip from 'react-tooltip'
import logo from '../images/cropped-logo.png';
import { Panel, Image, ListGroupItem, Button } from 'react-bootstrap'
export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: {id: props._id,
                name: props.name,
                price: props.price,
                description: props.description,
                brand: props.brand,
                producer: props.producer,
                imageUrl: props.imageUrl},
            customer: props.customer,
        }
    }

    grid() {
        return (
            <div>
                <Panel header={this.state.name} data-tip data-for={this.state.id}>
                    <Image src={logo} responsive />
                </Panel>
                <ReactTooltip id={this.state.id} place="right" type="light" effect="float" delayShow={550} >
                    <span>
                        Name: {this.state.name} <br />
                        Price: {this.state.price} <br />
                        Description: {this.state.description} <br />
                        Brand: {this.state.brand} <br />
                        Producer: {this.state.producer} <br />
                    </span>
                </ReactTooltip>
            </div >
        )
    }

    list() {
        return (
            <div>
                <li className="list-group-item">
                    <ListGroupItem header={this.state.name} style={{ marginTop: 7 + 'px' }}>
                        <Image src={logo} style={{ width: 40 + '%' }} />
                    </ListGroupItem>
                </li>
            </div >
        )
    }

    removeProduct(id) {
        //removal logic
    }
//| <Button bsStyle="danger" onClick={this.removeProduct.bind(this)}>Remove</Button>
    render() {
        Customer: {this.state.customer}<br />
        switch (this.props.mode) {
            case VIEW_PRODUCT_GRID:
                return this.grid();

            case VIEW_PRODUCT_LIST:
                return this.list();
        return (<div></div>)
        }
    }
}