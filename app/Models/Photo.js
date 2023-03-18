export class Photo {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
    this.author = data.author || '¯\_(ツ)_/¯'
  }

  get imgAuthor() {
    return `
    ${this.author}
    `
  }
}