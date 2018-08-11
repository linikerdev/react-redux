import axios from 'axios'

const URL = 'http://localhost:3001/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const searchForm = () => {
    let requestSearch = axios.get(`${URL}?sort=createdAt${searchForm}`)
    return {
        type: 'TODO_SEARCH',
        payload: requestSearch
    }
}