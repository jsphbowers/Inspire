export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
    this.clock = new Date()
  }

  get quoteTemplate() {
    return `
    <h5 class="quote">"${this.quote}"</h5>
    <div class="author d-flex justify-content-end">
    <h6 id="author">-${this.author}</h6>
    </div>
    `
  }

  get clockTemplate() {
    return `
    <h2 class="blur clock">${this.computeClock}</h2>
    `
  }

  get computeClock() {
    let clock = this.clock
    return (clock.getHours()) + ':' + (clock.getMinutes() < 10 ? '0' : '' + clock.getMinutes())
  }
}