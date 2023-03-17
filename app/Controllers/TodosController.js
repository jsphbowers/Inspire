import { appState } from "../AppState.js"
import { todoService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawTodos() {
  let todos = appState.todos
  let template = ''
  todos.forEach(t => template += t.todoTemplate)
  setHTML('todosList', template)
}

export class TodosController {
  constructor() {
    // console.log('hello from da controller');
    this.getTodos()
    appState.on('todos', _drawTodos)
  }

  async createTodo() {
    try {
      window.event?.preventDefault()
      // console.log('dabuttonworked');
      let form = event?.target
      let newTodo = getFormData(form)
      // console.log(newTodo);
      todoService.addNewTodo(newTodo)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getTodos() {
    try {
      // console.log('we gettin them');
      todoService.getTodos()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}

