import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

import { bindActionCreators } from 'redux'
import { changeDescription, searchForm } from './todoActions'

import { connect } from 'react-redux'



class TodoForm extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.searchForm()
    }
    render() {
        return (
            <Form>
                <Row>
                    <Col xs='10' md='10'>
                        <FormGroup>
                            <Label for='email'>Email</Label>
                            <Input
                                onChange={this.props.changeDescription}
                                value={this.props.description} type='email' name='email' id='exampleEmail'
                                placeholder='with a placeholder' required={true} />
                        </FormGroup>
                    </Col>
                    <Col md='1' xs='2'>
                        <FormGroup>
                            <Label for=''>Buscar</Label>
                            <Button color='info' className='text-center'
                                onClick={this.props.handleSearch}>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </FormGroup>
                    </Col>
                    <Col md='1' xs='2'>
                        <FormGroup>
                            <Label for=''>Adicionar</Label>
                            <Button color='danger' className='text-center'
                                onClick={this.props.handleAdd}>
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </FormGroup>
                    </Col>

                </Row>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeDescription,
        searchForm
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)