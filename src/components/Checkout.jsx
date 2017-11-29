import React from 'react'
import { Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class Checkout extends React.Component{

    constructor(){
        super()
        this.state = {
            //default values to be displayed initially
            cardnumber: 1234,
            cardCCV: 123,
            cardholdername: 'Name',
            email: 'FullName@Domain.com',
            fullname: 'Full Name',
            errors: false
        }
        this.validationStateStringCheck = this.validationStateStringCheck.bind(this) //bind the function to this component
        this.validationStateNumberCheck = this.validationStateNumberCheck.bind(this) //bind the function to this component
    }
    
    handleSave(){
        //dispatch to DB TODO
        confirm('Are you sure?')

        validationStateNumberCheck(this.state.cardCCV)
        validationStateNumberCheck(this.state.cardnumber)

        validationStateStringCheck(this.state.cardholdername)
        validationStateStringCheck(this.state.email)
        validationStateStringCheck(this.state.fullname)
        //dumb, static way to do it. hard to do with callback / hard to get object ref of the FromGroup.
        //also might not work. '123' would pass a string check, but fail a number check.
        if(errors){
            alert('Errors in the form')
        } else{
            this.props.saveOrderClick(this.state)
        }
        //this.setState({submittedname: this.state.name})
    }

    validationStateNumberCheck(value){
        if(this.state.value === PropTypes.number){
            this.setState({errors:false})
        }
        else {
            this.setState({errors: true})
        }
    }

    validationStateStringCheck(value){
        if(this.state.value === PropTypes.string){
            this.setState({errors:false})
        }
        else {
            this.setState({errors: true})
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
                            <FormControl type="text" placeholder={this.state.email} 
                            onChange={this.handleChange.bind(this)} value={this.state.email} name="email"/> 
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalFullName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Full Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.fullname} 
                            onChange={this.handleChange.bind(this)} value={this.state.fullname} name="fullname"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCardholder">
                        <Col componentClass={ControlLabel} sm={2}>
                            Cardholder
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.cardholdername} 
                            onChange={this.handleChange.bind(this)} value={this.state.cardholdername} name="cardholdername"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCardnumber">
                        <Col componentClass={ControlLabel} sm={2}>
                            Cardnumber
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.cardnumber + "..."} 
                            onChange={this.handleChange.bind(this)} value={this.state.cardnumber} name="cardnumber"/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalCCV">
                        <Col componentClass={ControlLabel} sm={2}>
                            Card CCV
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder={this.state.cardCCV} 
                            onChange={this.handleChange.bind(this)} value={this.state.cardCCV} name="cardCCV"/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={this.handleSave.bind(this)}>
                                Confirm
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}