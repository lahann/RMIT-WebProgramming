import React from 'react'
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Checkout extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            //default values to be displayed initially
            fields: {
                cardnumber: 1234,
                cardCCV: 123,
                cardholdername: 'Name',
                email: 'FullName@Domain.com',
                fullname: 'Full Name',
            },
            FormValid: true,
            errors: []
        }
        this.handleSave = this.handleSave.bind(this)
        this.validationStateStringCheck = this.validationStateStringCheck.bind(this) //bind the function to this component
    }
    
    handleSave(e){
        confirm('Are you sure?')
        validationStateStringCheck(this.state.cardCCV)
        validationStateStringCheck(this.state.cardnumber)
        validationStateStringCheck(this.state.cardholdername)
        validationStateStringCheck(this.state.email)
        validationStateStringCheck(this.state.fullname)
        if(!this.state.FormValid){
            ()=> alert(this.state.errors.join("\n"))
        } else{
            e.preventDefault()
            dispatch(addNewShoppingCart({
                //nothing because noone cares
            }))
        }
        this.setState({errors: []})
    }

    validationStateStringCheck(value){
        if(value !== PropTypes.string || value == ''){
            this.state.errors.push(value.string + ' cannot be empty and must be a string')
            setState({FormValid: false})
        }
    }

    handleChange(e){
        var change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }

    render(){
        return(
            <div>
                <h1>Order Form</h1>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.fields.email} 
                            onChange={this.handleChange.bind(this)} value={this.state.fields.email} name="email"/> 
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalFullName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Full Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.fields.fullname} 
                            onChange={this.handleChange.bind(this)} value={this.state.fields.fullname} name="fullname"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCardholder">
                        <Col componentClass={ControlLabel} sm={2}>
                            Cardholder
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.fields.cardholdername} 
                            onChange={this.handleChange.bind(this)} value={this.state.fields.cardholdername} name="cardholdername"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCardnumber">
                        <Col componentClass={ControlLabel} sm={2}>
                            Cardnumber
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.fields.cardnumber + "..."} 
                            onChange={this.handleChange.bind(this)} value={this.state.fields.cardnumber} name="cardnumber"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCCV">
                        <Col componentClass={ControlLabel} sm={2}>
                            Card CCV
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.fields.cardCCV} 
                            onChange={this.handleChange.bind(this)} value={this.state.fields.cardCCV} name="cardCCV"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.handleSave}>
                                Confirm
                            </Button>
                        </Col>
                    </FormGroup>
                    <br/> <br/> <br/>
                </Form>
            </div>
        )
    }
}