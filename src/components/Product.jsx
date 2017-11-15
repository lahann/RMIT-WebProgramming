import React from 'react'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.data.id,
            name: props.data.name,
            price: props.data.price,
            description: props.data.description,
            brand: props.data.brand,
            producer: props.data.producer,
            imageURL: props.data.imageURL
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