import React from 'react'

export default class Categorie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            products: props.products
        }
    }

    render() {
        return (
            <div>
                ID: {this.state.id}<br />
                Name: {this.state.name}<br />
                {this.state.products.map((p) =>
                    p
                )}
            </div>
        )
    }

}