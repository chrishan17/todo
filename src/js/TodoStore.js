import {Store} from 'flux/utils'
import TodoDispatcher from './TodoDispatcher'

class TodoStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    this.todos = []
  }
  getAll() {
    return this.todos
  }
  create(content) {
    if(!content) return
    const id = new Date()
    this.todos.push({id, content})
  }
  __onDispatch(payload) {
    debugger
    switch(payload.type) {
      case "CREATE_TODO":
        this.create(payload.content)
        this.__emitChange()
      default:
        return
    }
  }
}

export default (new TodoStore(TodoDispatcher))
