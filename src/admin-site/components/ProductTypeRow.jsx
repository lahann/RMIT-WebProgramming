import React from 'react'
import { Table, Button, ButtonToolbar } from 'react-bootstrap' 

export default class ProductTypeRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>
                {
                <ButtonToolbar>
                    <Button onClick={this.props.toggleEditing}>EDIT</Button>
                    <Button 
                        onClick={(e)=>{
                            if (confirm(`Are you sure you want to delete product type '${this.props.name}'?`))
                                this.props.deleteProductType()}} 
                        bsStyle="danger">DELETE
                    </Button>
                </ButtonToolbar>

                }
                </td>
            </tr>
        )
    }
}
