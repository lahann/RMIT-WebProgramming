import React from 'react'

export default class Bye extends React.Component{
    render(){
        return(
            <div> Goodbye {this.props.message}</div>
        )
    }
}