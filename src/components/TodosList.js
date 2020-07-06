import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_TODO, EDIT_TODO } from '../reducers'

export const TodosList = () => {

    const todo = useSelector(state => state.todo)
    //const edit = useSelector (state => state.edit)
    const dispatch = useDispatch()

    const HandleDelete = (id) => {
        dispatch(DELETE_TODO({ id: id }))
    }

    const HandleEdit = (id, task) => {
        console.log('Handle Edit' + id, task)
        dispatch(EDIT_TODO({ id: id, task: task }))
    }

    console.log('Todo: ' + JSON.stringify(todo))

    const data = todo.map(e => {
        const idString = e.id
        const shorter = idString.substring(0,5)
        return (
            <tr key={e.id}>
                <td>{shorter}</td>
                <td>{e.task} </td>
                <td><button onClick={() => HandleEdit(e.id, e.task)}>Editar</button> <button onClick={() => HandleDelete(e.id)}>Delete</button></td>
            </tr>
        )
    }
    )


    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tarefas</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {data}
                </tbody>
            </table>
            <ul>

            </ul>


        </div>
    )
}
