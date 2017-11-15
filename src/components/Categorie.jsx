import React from 'react'

export default class Categorie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.name
        }
    }

    render() {
        return (
            <div>
                ID: {this.state.id}<br />
                Name: {this.state.name}<br />
            </div>
        )
    }

}