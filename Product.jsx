import React from 'react'

export default class Product extends React.Component{
    constructor(){
        super()
        this.state = {name: 'sth', price: 123, description: 'sth is very cool', stores: ['DK', 'VN', 'DE', 'PRC']}
    }

    render(){
        return(
            <div> 
                <div>Product name: {this.state.name}</div> 
                <div>Product price: {this.state.price}</div> 
                <div>Product description: {this.state.description}</div> 
                <div>Stores are in countries: {this.state.stores.map((c)=>
                    <li>{c},</li> 
                    )}
                    </div> 
                    
            </div>
            
        )
    }
}