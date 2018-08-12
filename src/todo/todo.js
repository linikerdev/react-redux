import React, { Component } from 'react'
import Form from './form'
import Table from './table'


export default class Todo extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange (e) {
    this.setState({
      ...this.state,
      description: e.target.value
    })
  }





  render () {
    return (
      <div>
        <h1>Todo</h1>
        <Form
          handleChange={this.changeDescription}
          handleSearch={this.handleSearch}
        />

        <Table />
      </div>
    )
  }
}
