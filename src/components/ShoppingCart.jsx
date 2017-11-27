import React from 'react'
import { VIEW_PRODUCT_DETAILS, VIEW_PRODUCT_EDIT, VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID } from '../components/Constants.jsx'
import ReactTooltip from 'react-tooltip'
import logo from '../images/cropped-logo.png';
import { Panel, Image, ListGroupItem, Button, ListGroup } from 'react-bootstrap'
import product from '../components/Product.jsx'
export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            myproducts: props.products,
            customer: props.customer,
        }
    }

    list(props) {
        return this.props.myproducts.map((product, i) => {
            return (
                    <ListGroupItem header={this.state.name} style={{ marginTop: 7 + 'px' }} {...product}>
                        <Image src={logo} style={{ width: 40 + '%' }} />
                        <Button bsStyle="danger" onClick={this.removeProduct.bind(this)}>Remove</Button>
                    </ListGroupItem>
            )
        })
    }

    listgroup() {
        return (
            <ListGroup>
                {this.list()}
            </ListGroup>
        )
    }

    removeProduct(id) {
        //removal logic
    }

    render() {
        Customer: {this.state.customer}<br />
        switch (this.props.mode) {
            case VIEW_PRODUCT_GRID:
                return this.listgroup();

            case VIEW_PRODUCT_LIST:
                return this.listgroup();
        return (<div></div>)
        }
    }
}