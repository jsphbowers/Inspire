import { SandboxTodoApi } from "./AxiosService.js";

class TodosService {
  async addNewTodo(newTodo) {
    // console.log(newTodo);
    const res = await SandboxTodoApi.post('/jsphbowers/todos', newTodo)
    // console.log(res.data);

  }

}

export const todoService = new TodosService();