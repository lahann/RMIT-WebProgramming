import React from 'react'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            brand: props.brand,
            producer: props.producer,
            imageURL: props.imageURL
        }
    }

    render() {
        return (
            <div>
                ID: {this.state.id} <br />
                Name: {this.state.name} <br />
                Price: {this.state.price} <br />
                Description: {this.state.description} <br />
                Brand: {this.state.brand} <br />
                Producer: {this.state.producer}<br />
                Image URL: {this.state.imageURL}<br />
            </div>
        )
    }

}