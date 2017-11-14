import React from 'react'

export default class shoppingcart extends React.Component {

constructor(productlist){
    super()
    this.state = { productlist: productlist }
}



render(){
    return(
        <div>
            {this.props.productlist.map(p=>
            <li>
                {p.name} | {p.price}
            </li>
        )}
        </div>
    )
}
}