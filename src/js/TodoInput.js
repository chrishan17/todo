import React from 'react'

function TodoInput(props) {
  const handleSubmitTodo = function(e) {
    e.preventDefault()
    props.onHandleSubmitTodo(e.target.elements.todo.value)
  }
  return (
    <form onSubmit={handleSubmitTodo}>
      <input type="text" name="todo" placeholder="Let's rock" />
      <button type="submit">Submit</button>
    </form>
  )
}
 
export default TodoInput;