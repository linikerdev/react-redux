import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: `ler livros`,
        list:[
            {
                "_id": "5b69016ca125791842d8d400",
                "description": "ir na rua teste",
                "__v": 0,
                "createdAt": "2018-08-07T02:18:20.179Z",
                "done": false
            },
            {
                "_id": "5b690177a125791842d8d401",
                "description": "comprar pão",
                "__v": 0,
                "createdAt": "2018-08-07T02:18:31.228Z",
                "done": false
            }
        ]
    })
})

export default rootReducer