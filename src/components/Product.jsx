import React from 'react'
import ReactTooltip from 'react-tooltip'
import logo from '../images/cropped-logo.png';
import cross from '../images/cross.jpg';
import { Panel, Image, ListGroupItem, Button } from 'react-bootstrap'
import { VIEW_PRODUCT_DETAILS, VIEW_PRODUCT_EDIT, VIEW_PRODUCT_LIST, VIEW_PRODUCT_GRID } from '../components/Constants.jsx'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props._id,
            idd: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            brand: props.brand,
            producer: props.producer,
            imageUrl: props.imageUrl
        }
    }

    getImageUrl(imageUrl) {
        if (imageUrl === '' || imageUrl === undefined) {
            return logo
        }
        return imageUrl
    }

    onClick(e) {
        this.props.addToCart(this.state)
        e.target.className = "btn btn-success"
    }

    grid() {
        const imageStyle = {
            cursor: 'pointer',
            position: 'relative',
            float: 'left',
            maxHeight: 230 + 'px',
            minHeight: 230 + 'px'
        }

        return (
            <div>
                <Panel header={this.state.name} data-tip data-for={this.state.id}>
                    <Image src={this.getImageUrl(this.state.imageUrl)} responsive style={imageStyle} onClick={this.props.onProductClick} />
                    <Button onClick={this.onClick.bind(this)} style={{
                        marginLeft: 'auto', display: 'block', zIndex: 2
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
                        <Image src={this.getImageUrl(this.state.imageUrl)} style={{ width: 40 + '%', cursor: 'pointer' }} onClick={this.props.onProductClick} />
                        <Button style={{ marginLeft: 'auto', display: 'block', zIndex: 2 }} onClick={this.onClick.bind(this)}>
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
            maxHeight: 800 + 'px'
        }
        const secondTdStyle = {
            width: 100 + '%',
            width: 100 + '%',
            top: 200 + 'px',
            left: 20 + '%',
            position: 'fixed'
        }
        const thirdTdStyle = {
            width: 10 + '%',
            position: 'fixed',
            top: 320 + 'px',
            right: 690 + 'px'
        }
        const h1Style = {
            textAlign: 'center',
            position: 'relative',
            top: -160 + 'px'
        }
        const h3Style = {
            textAlign: 'center',
            position: 'relative',
            top: -100 + 'px',
            lineBreak: 'auto',
            maxWidth: 600 + 'px',
            marginLeft: 29 + '%'
        }
        const h4Style = {
            textAlign: 'center',
            position: 'relative',
        }
        const crossStyle = {
            width: 25 + 'px',
            cursor: 'pointer',
            position: 'relative',
            top: -247 + 'px',
            right: -780 + 'px',
            zIndex: 1
        }

        return (
            <div>
                <Panel style={panelStyle}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <Image src={this.getImageUrl(this.state.imageUrl)} />
                                </td>
                                <td style={secondTdStyle}>
                                    <h1 style={h1Style}>{this.state.name}</h1>
                                    <h3 style={h3Style}>
                                        {this.state.description}
                                    </h3>
                                    <h4 style={h4Style}>
                                        {this.state.brand} produced by {this.state.producer}
                                    </h4>
                                </td>
                                <td style={thirdTdStyle}>
                                    <Image src={cross} style={crossStyle} onClick={this.props.closeProduct.bind(this)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ textAlign: 'right' }} >
                        For only: {this.state.price} $ &nbsp;
                        <Button onClick={this.onClick.bind(this)}>
                            Add to Cart
                        </Button>
                    </div>
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
        }
        return (<div />)
    }
}