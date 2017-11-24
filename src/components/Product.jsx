import React from 'react'
import ReactTooltip from 'react-tooltip'
import logo from '../images/cropped-logo.png';
import { Panel, Image, ListGroupItem, Button } from 'react-bootstrap'
import { VIEW_PRODUCT_DETAILS, VIEW_PRODUCT_EDIT, VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID } from '../components/Constants.jsx'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props._id,
            name: props.name,
            price: props.price,
            description: props.description,
            brand: props.brand,
            producer: props.producer,
            imageUrl: props.imageUrl
        }
    }

    grid() {
        return (
            <div>
                <Panel header={this.state.name} data-tip data-for={this.state.id}>
                    <Image src={logo} responsive style={{ cursor: 'pointer' }} />
                    <Button onClick={this.props.addToCart.bind(this, this.state)} style={{
                        marginLeft: 'auto', display: 'block'
                    }}>Add to Cart</Button>
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
                        <Image src={logo} style={{ width: 40 + '%', cursor: 'pointer' }} />
                        <Button style={{ marginLeft: 'auto', display: 'block' }} onClick={this.props.addToCart.bind(this, this.state)}>
                            Add to Cart
                        </Button>
                    </ListGroupItem>
                </li>
            </div >
        )
    }

    details() {
        const panelStyle = {
            top: 59,
            position: 'relative',
            marginRight: 10 + 'px',
            marginLeft: 10 + 'px',
            marginBottom: 120 + 'px',
        }
        const h1Style = {
            textAlign: 'center',
            position: 'relative',
            top: -200 + 'px'
        }
        const h3Style = {
            textAlign: 'center',
            position: 'relative',
            top: -100 + 'px'
        }
        const h4Style = {
            textAlign: 'center',
            position: 'relative',
        }

        return (
            <div>
                <Panel style={panelStyle}>
                    <tbody>
                        <td>
                            <Image src={logo} />
                        </td>
                        <td style={{ width: 100 + '%' }}>
                            <h1 style={h1Style}>{this.state.name}</h1>
                            <h3 style={h3Style}>
                                {this.state.description}
                            </h3>
                            <h4 style={h4Style}>
                                {this.state.brand} produced by {this.state.producer}
                            </h4>


                        </td>
                    </tbody>
                    <div style={{ textAlign: 'right' }} >
                        For only: {this.state.price} $ &nbsp;
                        <Button onClick={this.props.addToCart.bind(this, this.state)}>
                            Add to Cart
                        </Button>
                    </div>
                </Panel>
            </div >
        )
    }

    edit() {
        return (
            <div>
                <Panel footer={this.state.name}>
                    <Image src={logo} responsive />

                    ID: <input type="text" /> {this.state.id} <br />
                    Name: <input type="text" />{this.state.name} <br />
                    Price: <input type="text" />{this.state.price} <br />
                    Description: <input type="text" />{this.state.description} <br />
                    Brand: <input type="text" />{this.state.brand} <br />
                    Producer: <input type="text" />{this.state.producer} <br />
                    Image URL: <input type="text" />{this.state.imageUrl} <br />
                </Panel>
            </div >
        )
    }

    render() {
        switch (this.props.mode) {
            case VIEW_PRODUCT_GRID:
                return this.grid();

            case VIEW_PRODUCT_LIST:
                return this.list();

            case VIEW_PRODUCT_DETAILS:
                return this.details();

            case VIEW_PRODUCT_EDIT:
                return this.edit();
        }
        return (<div></div>)
    }
}