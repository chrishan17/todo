import React from 'react'

function Todo(props) {
  let todos = props.todos
  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
    </ul>
  )
}
 
export default Todo;