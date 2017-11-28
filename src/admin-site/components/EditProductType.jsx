import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class EditProductType extends React.Component {
    constructor(props) {
        super(props)
        this.handleProductTypeUpdate = this.handleProductTypeUpdate.bind(this)
        this.state = {
            name: null, 
            description: null, 
        }
    }

    handleProductTypeUpdate() {
        this.props.handleProductTypeUpdate({
            _id: this.props._id,
            name: this.state.name.value,
            description: this.state.description.value,
        })
    }

    render() {
        return (
            <tr>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.name=node}
                    name="name"
                    defaultValue={this.props.name}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.description=node}
                    name="description"
                    defaultValue={this.props.description}
                />
            </td>
            <td>
            {
            <ButtonToolbar>
                <Button bsStyle="success" onClick={this.handleProductTypeUpdate}>SAVE</Button>
                <Button bsStyle="danger">DELETE</Button>
            </ButtonToolbar>

            }
            </td>
        </tr>

            
        )
    }
}