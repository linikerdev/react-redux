import React, { Component } from 'react'
import { Container } from 'reactstrap'

import Menu from './template/menu'
import Routes from './Routes'

class App extends Component {
  render () {
    return (
      <Container>
        <Menu />
        <Routes />
      </Container>
    )
  }
}

export default App
