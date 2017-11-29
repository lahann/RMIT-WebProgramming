import React from 'react'
import {FormControl, Button, ButtonToolbar} from 'react-bootstrap'

export default class AddProductType extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddProductType = this.handleAddProductType.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            id: '',
            name: '', 
        }
    }

    handleAddProductType() {
        this.props.handleAddProductType(this.state)
        this.setState({
            id: '',
            name: '', 
        })
    }

    handleChange(e) {
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render() {

        return (
            <tr>
            <td>
                <FormControl
                    type="text"
                    value={this.state.id}
                    name="id"
                    onChange={this.handleChange}
                />
            </td>
            <td>
                <FormControl
                    type="text"
                    value={this.state.name}
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