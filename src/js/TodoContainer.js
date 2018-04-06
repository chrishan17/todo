import React, { Component } from 'react'
import Todo from './Todo.js'
import TodoInput from './TodoInput.js'

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{id: 123, content: 'test'}],
      todoInput: "testing"
    }
  }

  render() { 
    let todos = this.state.todos
    let todoInput = this.state.todoInput
    return ( 
      <div className="todo-container">
        <Todo todos={todos}/>
        <TodoInput todoInput={todoInput}/>
      </div>
    )
  }
}
 
export default TodoContainer;