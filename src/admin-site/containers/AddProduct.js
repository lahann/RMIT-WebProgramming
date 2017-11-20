import React from 'react'
import { connect } from 'react-redux'
import { addProduct} from '../actions'
import { Col, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button} from 'react-bootstrap'


let AddProduct = ({dispatch}) => {
    let input = {
        id: '', 
        name: '', 
        price: '', 
        description: '', 
        brand: '', 
        producer: '', 
        imageUrl: ''
    }

    let id, name, price, description, brand, producer, imageUrl

        return (
            <Form horizontal onSubmit={e => {
                e.preventDefault()
                dispatch(addProduct({
                    id: id.value,
                    name: name.value, 
                    price: price.value, 
                    description: description.value,
                    brand: brand.value, 
                    producer: producer.value, 
                    imageUrl: imageUrl.value
                }))
            }}>
                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        ID
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="ID" inputRef={node=>id=node}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Name" inputRef={node=>name=node}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Price
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Price" inputRef={node=>price=node}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={4}>
                        <FormControl componentClass="textarea" placeholder="Description" inputRef={node=>description=node}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Brand
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Brand" inputRef={node=>brand=node}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Producer
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Producer" inputRef={node=>producer=node}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Image URL
                    </Col>
                    <Col sm={4}>
                        <FormControl placeholder="Image URL" inputRef={node=>imageUrl=node}/>
                    </Col>
                </FormGroup>

                <Col sm={2}></Col>
                <Col sm={4}>
                    <ButtonToolbar >
                        <Button bsStyle="info">BACK</Button>
                        <Button bsStyle="success" type="submit">SAVE</Button>
                    </ButtonToolbar>
                </Col>
            </Form>
        );
}
AddProduct = connect()(AddProduct)

export default AddProduct