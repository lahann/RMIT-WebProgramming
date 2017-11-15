import React from 'react'
import Categorie from '../components/Categorie.jsx'

export default class CategoriePage extends React.Component {

    render() {
        return (
            <div>
                {this.props.categories.map(c =>
                    <Categorie key={c.id} {...c} />
                )}
            </div>
        )
    }
}