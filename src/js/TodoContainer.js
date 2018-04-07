import React, { Component } from 'react'
import Todo from './Todo.js'
import TodoInput from './TodoInput.js'
import TodoActions from './TodoActions.js'
import TodoStore from './TodoStore.js'
import withStore from './withStore.js'

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this)
  }

  handleSubmitTodo(todo) {
    TodoActions.create(todo)
  }

  render() { 
    return ( 
      <div className="todo-container">
        <Todo todos={this.props.data}/>
        <TodoInput onHandleSubmitTodo={this.handleSubmitTodo}/>
      </div>
    )
  }
}

const TodoContainerWithStore = withStore(TodoContainer, TodoStore)

export default TodoContainerWithStore;