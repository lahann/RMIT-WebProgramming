import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class AddProductType extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddProductType = this.handleAddProductType.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            fields: {
                id: '',
                name: ''
            },
            errors : []
        }
    }

    handleValidation() {
        let fields = this.state.fields
        let err = []
        let formIsValid = true
        
        if (fields.id.charAt(0) !== 'c') {
            formIsValid = false
            err.push("ID must start with 'c'.")
        }

        if (fields.name === '') {
            formIsValid = false
            err.push("Name cannot be empty.")
        }
        if (!formIsValid) 
            this.setState({errors: err}, ()=> alert(this.state.errors.join("\n")))
        else this.setState({errors: err})
        return formIsValid
    }

    handleAddProductType() {
        if (this.handleValidation()) {
            this.props.handleAddProductType(this.state.fields)
            this.setState({
                fields: {
                    id: '',
                    name: '', 
                }
            })
        }
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({fields})
    }

    render() {

        return (
            <tr>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.id}
                    name="id"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.fields.name}
                    onChange={this.handleChange}
                    name="name"
                />
            </td>
            <td>
            <Button bsStyle="success" onClick={this.handleAddProductType}>ADD</Button>
            </td>
        </tr>

            
        )
    }
}