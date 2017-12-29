import React from 'react'
import { Table, Button, ButtonToolbar, Image } from 'react-bootstrap' 
import logo from '../../images/cropped-logo.png'
import ReactTooltip from 'react-tooltip'

export default class ProductRow extends React.Component {
    getImageUrl(imageUrl) {
        if (imageUrl) return imageUrl
        else return logo
    }
    


    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.productType}</td>
                <td>{this.props.price}</td>
                <td data-tip data-for={this.props.id}>{this.props.description.length > 20 ? this.props.description.substring(0,20) 
                    :this.props.description}...
                    <ReactTooltip id={this.props.id} place="right" type="light" effect="float" delayShow={450} >
                        {this.props.description}
                    </ReactTooltip>   
                </td>
                
                <td>{this.props.brand}</td>
                <td>{this.props.producer}</td>
                {/* <td><Image src={this.getImageUrl(this.props.imageUrl)} style={{ maxHeight: '50px', minHeight: '50px' }} /></td> */}
                {/* <td>{this.getImageUrl(this.props.imageUrl)}</td> */}
                <td><a href={this.getImageUrl(this.props.imageUrl)} target="blank">Link</a></td>
                <td>
                {
                <ButtonToolbar>
                    <Button onClick={this.props.toggleEditing}><span className="fa fa-pencil-square-o"></span></Button>
                    <Button 
                        onClick={(e)=>{
                            if (confirm(`Are you sure you want to delete product '${this.props.name}'?`))
                                this.props.deleteProduct()}} 
                        bsStyle="danger"><span className="fa fa-trash"></span>
                    </Button>
                </ButtonToolbar>
                }
                </td>
            </tr>
        )
    }
}

