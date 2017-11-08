import React from 'react'

export default class StudentForm extends React.Component{

    constructor(){
        super()
        this.state = {price: 123, name: 'ng', courses:  ['web', 'database concepts', 'sth else'], submittedname: 'sth',
        products: [{productname: "iphone", productprice: 123}, {productname: "S8", productprice: 321}], 
        productnamenew: 'enter new...', productpricenew: 0
    }
    }
    handleSave(){
        alert(this.state.name + "  "+  this.state.price)
        this.setState({submittedname: this.state.name})
    }
    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }
    handleChangePrice(e){
        var value = e.target.value;
        this.setState({price: value})
    }
    addProduct(){
        var change = this.state.products
        change.push({productname: this.state.productnamenew, productprice: this.state.productpricenew})
        this.setState(change)
    }

    render(){
        return(
            <div>
                <h1>Student Form </h1>
                <div id="nameid">Name: {this.state.submittedname}</div>
                <div>Courses:
                    {this.state.courses.map((c)=>
                        <li>{c},</li>
                    )}
                </div>
                <input id="inputfield" type="text" name='name' value={this.state.name} 
                onChange={this.handleChange.bind(this)}/> 
                <button onClick={this.handleSave.bind(this)}>Save</button>
                <div> my test get asdasd</div>

                <input id= "newinput" type="text" name="price" value={this.state.price}
                onChange={this.handleChangePrice.bind(this)}/>
                <button onClick={this.handleSave.bind(this)}> Change Price</button>
                <h1>List of products</h1>
                <input type="text" name="productnamenew" value={this.state.productnamenew}
                onChange={this.handleChange.bind(this)}/>
                <input type="text" name="productpricenew" value={this.state.productpricenew}
                onChange={this.handleChange.bind(this)}/>
                <button onClick={this.addProduct.bind(this)}>Add a product</button>
                {this.state.products.map((p)=>
                    <li>{p.productname} at the price of {p.productprice}</li>
                )}

            </div>
        )
    }
}