export class Photo {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author
  }

  get imgAuthor() {
    return `
    ${this.author}
    `
  }
}