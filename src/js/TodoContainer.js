import React, { Component } from 'react'
import Todo from './Todo.js'
import TodoInput from './TodoInput.js'
import TodoActions from './TodoActions.js'
import TodoStore from './TodoStore.js'

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TodoStore.getAll()
    }
    this.handleSubmitTodo = this.handleSubmitTodo.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  _onChange() {
    this.setState({todos: TodoStore.getAll()})
  }

  handleSubmitTodo(todo) {
    TodoActions.create(todo)
  }

  componentDidMount() {
    debugger
    this._todoStoreToken = TodoStore.addListener(this._onChange)
  }

  componentWillUnmount() {
    TodoStore.remove(this._todoStoreToken)
  }

  render() { 
    let todos = this.state.todos
    return ( 
      <div className="todo-container">
        <Todo todos={todos}/>
        <TodoInput onHandleSubmitTodo={this.handleSubmitTodo}/>
      </div>
    )
  }
}
 
export default TodoContainer;