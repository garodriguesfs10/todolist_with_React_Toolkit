import { createStore,combineReducers } from 'redux'
import {todoReducer,CurrentTodoReducer} from '../reducers/index'
/// combine reducers permite voce enviar varios reducers para store



const rootReducer = combineReducers({
        todo:todoReducer,
        edit:CurrentTodoReducer
})

export default createStore(rootReducer)