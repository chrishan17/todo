import {Store} from 'flux/utils'
import TodoDispatcher from './TodoDispatcher'

class TodoStore extends Store {
  constructor(dispatcher) {
    super(dispatcher)
    this.todos = []
  }
  getState() {
    return this.todos
  }
  create(content) {
    if(!content) return
    const id = new Date()
    this.todos.push({id, content})
  }
  __onDispatch(payload) {
    switch(payload.type) {
      case "CREATE_TODO":
        this.create(payload.content)
        this.__emitChange()
      default:
        return
    }
  }
}
// TodoDispatcher.register(function(payload) {
//   switch(payload.type) {
//     case "CREATE_TODO":
//       console.log('payload will be passed to all register callback')
//   }
// })


export default (new TodoStore(TodoDispatcher))
