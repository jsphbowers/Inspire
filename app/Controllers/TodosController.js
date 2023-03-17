import { appState } from "../AppState.js"
import { todoService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawTodos() {
  let todos = appState.todos
  let template = ''
  todos.forEach(t => template += t.todoTemplate)
  setHTML('todosList', template)
  console.log(appState.todos);
}

function _totalTodos() {
  let totalTodos = appState.todos.length
  setText('totalTodos', totalTodos)
  appState.on('todos', _totalTodos)
}

export class TodosController {
  constructor() {
    // console.log('hello from da controller');
    this.getTodos()
    _totalTodos()
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

  async updateTodo(id) {
    try {
      // console.log('it made it!', id);
      todoService.updateTodo(id)
    } catch (error) {
      console.log(error)
      Pop.error(error)
    }
  }

  async deleteTodo(id) {
    try {
      if (await Pop.confirm('Hoooooold up wait a minute!?!? Are you absolutely certain!?!?')) {
        todoService.deleteTodo(id)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}

