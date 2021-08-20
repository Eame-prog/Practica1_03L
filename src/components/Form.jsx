import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo]=useState({})
    const [todos, setTodos]=useState([])

    const [cant, setCant]=useState({})
    const [cantes, setCantes]=useState([])

const handleChange = e => setTodo({[e.target.name]: e.target.value})
const handleChangeC = e => setCant({[e.target.name]: e.target.value})

const handleClick = e => {
    if((Object.keys(todo).length === 0 || todo.todo.trim() === '')){
        alert('El campo no puede estar vacio')
        return
    }
    
    setTodos([...todos, todo])
    setCantes([...cantes, cant])
}

const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
    
    const newCantidades = [...cantes]
    newCantidades.splice(indice,1)
    setCantes(newCantidades)
}

    return (
        <>
        <form onSubmit = { e=> e.preventDefault()}>
            <label>Agregar producto</label><br />
            <input type='Text' name='todo' onChange={handleChange} />
            <input type='Text' name='cant' onChange={handleChangeC} />
            <button onClick={handleClick}>agregar</button>
        </form>
        
        {
            todos.map((value, index) => (
                cantes.map((valueC) => (
                    <Todo todo={value.todo + ' - ' +valueC.cant} key={index} index={index} deleteTodo={deleteTodo}/>
                ))
            ))
        }
        </>
    )
}
export default Form
