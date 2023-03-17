export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
  }

  get todoTemplate() {
    return `
    <div class="form-check d-flex justify-content-between">
            <input onclick=app.todosController.updateTodo('${this.id}') class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} value="complete" id="complete" name="complete">
            <label class="form-check-label fw-bold" for="complete" id="description">${this.completed ? '<del>' : ''}
              ${this.description} ${this.completed ? '</del>' : ''}
            </label>
            <div class="">
            <button class="btn btn-danger" onclick="app.todosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>
            </div>
          </div>
    `
  }
}