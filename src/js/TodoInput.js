import React from 'react'

function TodoInput(props) {
  return (
    <form>
      <input placeholder="Let's rock" value={props.todoInput} />
      <button>submit</button>
    </form>
  )
}
 
export default TodoInput;