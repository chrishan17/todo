import TodoDispatcher from './TodoDispatcher.js'

export default {
  create: (content) => {
    TodoDispatcher.dispatch({
      type: "CREATE_TODO",
      content: content
    })
  }
}
