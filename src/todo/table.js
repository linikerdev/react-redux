import React from 'react'
import { Table, Button } from 'reactstrap'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { remove, searchForm } from './todoActions'


const TodoList = props => {
  const moutTh = () => {
    const list = props.list || []
    return list.map((e) => {
      return (
        <tr key={e.id}>
          <th scope='row'>{e.id}</th>
          <td>{e.description}</td>
          <td><Button size='sm' onClick={() => props.remove(e)}>Excluir</Button></td>
        </tr>
      )
    })
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>Descrição</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {moutTh()}
      </tbody>
    </Table>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    remove,
    searchForm
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

