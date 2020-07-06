import { createAction, createReducer } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
export const ADD_TODO = createAction('ADD_TODO')
export const DELETE_TODO = createAction('DELETE_TODO')
export const EDIT_TODO = createAction('EDIT_TODO')
export const SAVE_EDIT_TODO = createAction('SAVE_EDIT_TODO')
export const CLEAR_EDIT = createAction('CLEAR_EDIT')
const INITIAL_STATE =
    [{
        id: uuidv4(),
        task: 'First One'
    }];

const CurrentTodo = { id: '', task: '' }

export const todoReducer = createReducer(INITIAL_STATE, {
    [ADD_TODO.type]: (state, action) => {
        console.log('State: ' + JSON.stringify(state) + '\n Action: ' + JSON.stringify(action))
        const { task } = action.payload
        return [...state, {
            id: uuidv4(),
            task: task
        }]
    },
    [DELETE_TODO.type]: (state, action) => {
        const { id } = action.payload
        console.log(id)
        const copyState = [...state]
        const newState = copyState.filter(todo => todo.id !== id)
        return [...newState]
    },
    [SAVE_EDIT_TODO.type]: (state, action) => {
        const { task , id } = action.payload
        console.log("SAVE_TODO:"+task+"\n ID"+id)
        const CopyState = [...state]
        const theTodo = CopyState.find(el => el.id === id)
        theTodo.task = task
        //const NewState = CopyState.map(el => el.id !== id ? el : theTodo)        
    }
})

export const CurrentTodoReducer = createReducer(CurrentTodo, {
    [EDIT_TODO.type]: (state, action) => {
        const { id, task } = action.payload
        state.id = id
        state.task = task
        return state
    },

    [CLEAR_EDIT.type]: (state,action) =>{
        state.id=''
        state.task=''
        return state
    }
})

