import React from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default props => (
    <Form>
        <Row>
            <Col xs='6' md='11'>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input onChange={props.handleChange} value={props.description} type='email' name='email' id='exampleEmail' placeholder='with a placeholder' required={true} />
                </FormGroup>
            </Col>
            <Col md='1'>
                <FormGroup>
                    <Label for=''>Adicionar</Label>
                    <Button color='danger' className='text-center' onClick={props.handleAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </FormGroup>
            </Col>
        </Row>
    </Form>
)
