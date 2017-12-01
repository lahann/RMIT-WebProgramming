import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class EditProductType extends React.Component {
    constructor(props) {
        super(props)
        this.handleProductTypeUpdate = this.handleProductTypeUpdate.bind(this)
        this.state = {
            fields: {
                id: null,
                name: null,     
            },
            errors: []
        }
    }

    handleValidation() {
        let fields = this.state.fields
        let err = []
        let formIsValid = true

        if (fields.id.value.charAt(0) !== 'c') {
            formIsValid = false
            err.push("ID must start with 'c'.")
        }    

        if (fields.name.value === '') {
            formIsValid = false
            err.push("Name cannot be empty.")
        }

        if (!formIsValid) 
            this.setState({errors: err}, ()=> alert(this.state.errors.join("\n")))
        else this.setState({errors: err})
        return formIsValid
    }
    
    handleProductTypeUpdate() {
        if (this.handleValidation()) {
            this.props.handleProductTypeUpdate({
                _id: this.props._id,
                id: this.state.fields.id.value,
                name: this.state.fields.name.value,
            })
        }
    }

    render() {
        return (
            <tr>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.id=node}
                    name="id"
                    defaultValue={this.props.id}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    inputRef={node=>this.state.fields.name=node}
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