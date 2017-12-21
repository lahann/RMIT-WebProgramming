import React from 'react'
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, InputGroup } from 'react-bootstrap'

export default class LoginPage extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    getValidationState(field, val) {
        if (this.state[field] === '') {
            return null
        } else if (this.state[field] === val) {
            return 'success'
        } else if (this.state[field] !== val) {
            return 'error'
        }
    }

    handleChange(e) {
        let change = this.state
        change[e.target.name] = e.target.value
        this.setState({ change });
    }

    check() {
        if (this.state.username === this.props.user.username && this.state.password === this.props.user.password) {
            this.props.login()
        }
    }

    render() {
        const USERNAME = 'username'
        const PASSWORD = 'password'
        return (
            <div style={{ position: 'relative', top: 40 + 'px' }}>
                <h1>Login Page</h1>

                <Form horizontal>
                    <FormGroup controlId={USERNAME} validationState={this.getValidationState(USERNAME, this.props.user.username)}>
                        <Col componentClass={ControlLabel} sm={1}>
                            Username
                        </Col>
                        <Col sm={3}>
                            <FormControl name={USERNAME} type="text" placeholder="Username"
                                value={this.state.username} onChange={this.handleChange.bind(this)} />
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId={PASSWORD} validationState={this.getValidationState(PASSWORD, this.props.user.password)}>
                        <Col componentClass={ControlLabel} sm={1}>
                            Password
                        </Col>
                        <Col sm={3}>
                            <FormControl name={PASSWORD} type="password" placeholder="Password"
                                value={this.state.password} onChange={this.handleChange.bind(this)} />
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={1} sm={1}>
                            <Button onClick={this.check.bind(this)}>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}