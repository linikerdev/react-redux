import { createStore } from 'redux'

// importando todos os reducers
import reducers from './ducks'

const store = createStore(reducers)

export default store
