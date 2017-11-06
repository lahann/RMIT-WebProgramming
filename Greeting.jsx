import React from 'react'

export default class Greeting extends React.Component{
render(){
    return(
        <div> Hello {this.props.name} {this.props.age}</div>
        )
    }
}