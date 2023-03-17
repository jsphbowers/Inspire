import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { SandboxTodoApi } from "./AxiosService.js";

class TodosService {
  async getTodos() {
    const res = await SandboxTodoApi.get('/jsphbowers/todos')
    // console.log(res.data);
    appState.todos = res.data.map(t => new Todo(t))
  }
  async addNewTodo(newTodo) {
    // console.log(newTodo);
    const res = await SandboxTodoApi.post('/jsphbowers/todos', newTodo)
    // console.log(res.data);
    appState.todos.push(new Todo(res.data))
    appState.emit('todos')
    // console.log(appState.todos)
  }

}

export const todoService = new TodosService();