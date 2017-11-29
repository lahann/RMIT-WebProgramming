import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class EditProductType extends React.Component {
    constructor(props) {
        super(props)
        this.handleProductTypeUpdate = this.handleProductTypeUpdate.bind(this)
        this.state = {
            id: null,
            name: null, 
        }
    }

    handleProductTypeUpdate() {
        this.props.handleProductTypeUpdate({
            _id: this.props._id,
            id: this.props.id,
            name: this.state.name.value,
        })
    }

    render() {
        return (
            <tr>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.id=node}
                    name="id"
                    defaultValue={this.props.id}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.name=node}
                    name="name"
                    defaultValue={this.props.name}
                />
            </td>
            <td>
            {
            <ButtonToolbar>
                <Button bsStyle="success" onClick={this.handleProductTypeUpdate}>SAVE</Button>
            </ButtonToolbar>

            }
            </td>
        </tr>

            
        )
    }
}