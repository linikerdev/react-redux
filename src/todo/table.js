import React from 'react'
import { Table, Button } from 'reactstrap'

export default props => {

    const moutTh = () => {
        const list = props.list || []
        return list.map((e) => {
            return (
                <tr key={e._id}>
                    <th scope="row">{e._id}</th>
                    <td>{e.description}</td>
                    <td><Button size="sm" onClick={() => props.handleRemove(e)}>Excluir</Button></td>
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