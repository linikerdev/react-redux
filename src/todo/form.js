import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

import { bindActionCreators } from 'redux'
import { add, changeDescription, searchForm } from './todoActions'

import { connect } from 'react-redux'

class TodoForm extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount(){
    this.props.searchForm()
  }

  
  render () {
    const { description, add } = this.props

    return (
      <Form>
        <Row>
          <Col xs='10' md='10'>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                onChange={this.props.changeDescription}
                value={description} type='text'
                required={true}
                min='2'
                placeholder='with a placeholder' />
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
                onClick={() => add(description)}>
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
    add,
    changeDescription,
    searchForm
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
