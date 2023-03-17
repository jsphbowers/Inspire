import { todoService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"



export class TodosController {
  constructor() {
    // console.log('hello from da controller');
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
}