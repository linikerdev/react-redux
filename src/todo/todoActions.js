import axios from 'axios'

const URL = 'http://localhost:3001/todos'

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const searchForm = () => {
  const requestSearch = axios.get(`${URL}?sort=createdAt${searchForm}`)
  return {
    type: 'TODO_SEARCH',
    payload: requestSearch
  }
}

export const add = (description) => {
  return dispatch => {
    axios.post(URL, { description })
    .then(res =>   dispatch({ type: 'TODO_CLEAR', payload: res }))
    .then(res =>  dispatch(searchForm()))
    
  }
}

export const remove = (todo) => {
  console.log(todo)
  return dispatch => {
    axios.delete(`${URL}/${todo.id}`)
    .then(res =>  dispatch(searchForm()))
    
  }
}