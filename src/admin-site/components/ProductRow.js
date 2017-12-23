import React from 'react'
import { Table, Button, ButtonToolbar, Image } from 'react-bootstrap' 
import logo from '../../images/cropped-logo.png';

export default class ProductRow extends React.Component {
    getImageUrl(imageUrl) {
        if (imageUrl === '' || imageUrl === undefined) {
            return logo
        }
        return imageUrl
    }

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.productType}</td>
                <td>{this.props.price}</td>
                <td>{this.props.description}</td>
                <td>{this.props.brand}</td>
                <td>{this.props.producer}</td>
                <td><Image src={this.getImageUrl(this.props.imageUrl)} style={{ maxHeight: 100 + 'px', minHeight: 100 + 'px' }} /></td>
                <td>
                {
                <ButtonToolbar>
                    <Button onClick={this.props.toggleEditing}>EDIT</Button>
                    <Button 
                        onClick={(e)=>{
                            if (confirm(`Are you sure you want to delete product '${this.props.name}'?`))
                                this.props.deleteProduct()}} 
                        bsStyle="danger">DELETE
                    </Button>
                </ButtonToolbar>
                }
                </td>
            </tr>
        )
    }
}
