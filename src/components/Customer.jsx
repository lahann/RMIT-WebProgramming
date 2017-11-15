import React from 'react'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: props.firstname,
            surname: props.surname,
            address: props.address,
            email: props.email,
            phone: props.phone
        }
    }

    render() {
        return (
            <div>
                Firstname: {this.state.firstname}<br />
                Surname: {this.state.surname}<br />
                Address: {this.state.address}<br />
                E-Mail: {this.state.email}<br />
                Phone: {this.state.phone}<br />
            </div>
        )
    }

}