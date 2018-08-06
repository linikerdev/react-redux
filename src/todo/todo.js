import React, { Component } from 'react'
import { Alert } from 'reactstrap'

import axios from 'axios'

import Form from './form'
import Table from './table'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: '',
            list: [],
            message: {
                tipo: '',
                text: '',
                visible: false
            }

        }

        this.onDismiss = this.onDismiss.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)

        this.refresh()
    }


    async refresh () {
        const res = await axios.get(`${URL}?sort=createdAt`)
        this.setState({
            ...this.state,
            list: res.data
        })
    }

    onDismiss () {
        this.setState({
            ...this.state,
            message: {
                visible: false
            }
        })
    }

    handleChange (e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    async handleAdd () {
        const description = this.state.description

        try {
            await axios.post(URL, { description })

            this.setState({
                ...this.state,
                message: {
                    tipo: 'success',
                    text: `${this.state.description} Cadastrado com sucesso`,
                    visible: true
                }
            })
            this.refresh()
        } catch (error) {
            this.setState({
                ...this.state,
                message: {
                    tipo: 'danger',
                    text: `Erro ao cadastrar tarefa`,
                    visible: true
                }
            })
        }
    }

    render () {
        return (
            <div>
                <h1>Todo</h1>
                <Alert color={this.state.message.tipo} isOpen={this.state.message.visible} toggle={this.onDismiss}>
                    {this.state.message.text}
                </Alert>
                <Form
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}
                    message={this.state.message}
                />

                <Table list={this.state.list} />
            </div>
        )
    }
}