export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
  }

  get todoTemplate() {
    return `
    <div class="form-check">
            <input class="form-check-input" type="checkbox" value="complete" id="complete" name="complete">
            <label class="form-check-label" for="complete" id="description">
              ${this.description}
            </label>
          </div>
    `
  }
}