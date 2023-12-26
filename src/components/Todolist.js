import React from 'react'

const Todolist = ({ todos,setTodos,setEditTodo }) => {


    const deleteTodo = ( {id} ) => {
        setTodos(todos.filter((todo) => todo.id !== id ))
    }


    const completedTodo = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item,completed:!item.completed}
                }
                console.log("completed",item.completed)
                return item;
            })
        )
    }


    const editTodo = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }

  return (
    <div>
        {todos.map((todo) => (
            <li className='list-item' key = {todo.id}>
                <input type="text"
                 value={todo.title} 
                 className = {`list ${todo.completed ? "complete" : "" }`} 
                onChange={(event) => event.preventDefault()} />
                <div>
                    <button className='button-complete task-button' onClick={() => completedTodo(todo)}>
                        <i className='fa fa-check-circle'></i>
                    </button>
                    <button className='button-edit task-button' onClick={() => editTodo(todo)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    <button className='button-delete task-button' onClick={()=> deleteTodo(todo)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>
        )
        )}
    </div>
  )
}

export default Todolist