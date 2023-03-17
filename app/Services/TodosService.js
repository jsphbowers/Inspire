import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { SandboxTodoApi } from "./AxiosService.js";

class TodosService {

  async updateTodo(id) {
    const todo = appState.todos.find(t => t.id == id)
    console.log('todo before updated', todo);
    todo.completed = !todo.completed
    const res = await SandboxTodoApi.put(`/jsphbowers/todos/${id}`, todo)
    console.log('after todo is updated', res.data);
    appState.emit('todos')
  }
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
  async deleteTodo(id) {
    const res = await SandboxTodoApi.delete(`/jsphbowers/todos/${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
  }
}

export const todoService = new TodosService();