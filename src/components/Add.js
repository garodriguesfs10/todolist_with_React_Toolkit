import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TODO, SAVE_EDIT_TODO, CLEAR_EDIT } from '../reducers/index'
export const Add = () => {

    const [form, setForm] = useState({ task: '' })

    const edit = useSelector(state => state.edit)
    //console.log
    console.log('Edit ADD:' + JSON.stringify(edit))

    useEffect(() => {
        if (edit.id === "") {
            console.log('Normal')
        } else {
            console.log('Editando')
            console.log('edit task: ' + edit.task)
            setForm({ task: edit.task })

        }
    }, [edit])

    const dispatch = useDispatch()

    const HandleSubmit = async (e) => {
        e.preventDefault()

        if (form.task.length === 0) {
            alert('Preencha os campos requiridos')
            return null
        } else {



            if (edit.id === "") {
                console.log('Normal')
                await dispatch(ADD_TODO(form))
                setForm({ task: '' })
            } else {
                console.log('Editando')
                await dispatch(SAVE_EDIT_TODO({ task: form.task, id: edit.id }))
                dispatch(CLEAR_EDIT())
                setForm({ task: '' })
            }
        }


    }

    const HandleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <div>
            <hr />
            <h3>Modo: {edit.id === '' ? 'Esperando Entrada' : 'Editando'}</h3>
            <input type='text' placeholder="Adicionar tarefa" name='task' id='task' className='form-control' onChange={HandleChange} value={form.task} required />
            <br />
            <button type="submit" onClick={HandleSubmit} className='btn btn-success'>Adicionar</button>
        </div>
    )
}
