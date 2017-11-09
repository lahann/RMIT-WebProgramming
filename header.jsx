import React from 'react'

export default class Header extends React.Component{

    constructor(){
        super()
        this.state = {name: 'asd'}
        
    }
    render(){
        return(
            <div>blabla {this.state.name}</div>
        )
    }
}