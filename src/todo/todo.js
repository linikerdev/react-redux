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
        this.clear = this.clear.bind(this)
        this.message = this.message.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.refresh()
    }


    async refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        let res = await axios.get(`${URL}?sort=createdAt${search}`)
        this.setState({
            ...this.state,
            list: res.data
        })
    }

    onDismiss() {
        this.setState({
            ...this.state,
            message: {
                visible: false
            }
        })
    }
    handleSearch(e) {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    clear() {
        this.setState({
            ...this.state,
            description: ''
        })
    }

    message(tipo, text) {
        this.setState({
            ...this.state,
            message: {
                tipo,
                text,
                visible: true
            }
        })
    }

    handleRemove(item) {
        axios.delete(`${URL}/${item._id}`)
            .then((r) => {
                this.message('success', 'Excluido com sucesso')
                this.refresh()

            })
            .catch(err => this.message('danger', 'nao foi possivel excluir'))
    }

    async handleAdd() {
        const description = this.state.description

        try {
            await axios.post(URL, { description })
            this.message('success', 'descrição cadastrado com sucesso')
            this.refresh()
            this.clear()
        } catch (error) {
            this.message('danger', 'Erro ao cadastrar tarefa')
        }
    }

    render() {
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
                    handleSearch={this.handleSearch}
                />

                <Table list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        )
    }
}