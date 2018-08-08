import React from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux'

const TodoForm = props => (
    <Form>
        <Row>
            <Col xs='10' md='10'>
                <FormGroup>
                    <Label for='email'>Email</Label>
                    <Input onChange={props.handleChange} value={props.description} type='email' name='email' id='exampleEmail' placeholder='with a placeholder' required={true} />
                </FormGroup>
            </Col>
            <Col md='1' xs='2'>
                <FormGroup>
                    <Label for=''>Buscar</Label>
                    <Button color='info' className='text-center'
                        onClick={props.handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </FormGroup>
            </Col>
            <Col md='1' xs='2'>
                <FormGroup>
                    <Label for=''>Adicionar</Label>
                    <Button color='danger' className='text-center'
                        onClick={props.handleAdd}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </FormGroup>
            </Col>

        </Row>
    </Form>
)


const mapStateToProps = state => ({
    description: state.todo.description
})

export default connect(mapStateToProps)(TodoForm)