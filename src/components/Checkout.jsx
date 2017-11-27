import React from 'react'
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'

export default class Checkout extends React.Component{

    constructor(){
        super()
        this.state = {
            cardnumber: 0,
            cardSCV: 0,
            cardholdername: 'placeholder'
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
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}