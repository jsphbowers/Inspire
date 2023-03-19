export class Weather {
  constructor(data) {
    this.name = data.name
    this.mainc = Math.floor((data.main.temp) - 273.15)
    this.mainf = Math.floor(((data.main.temp) - 273.15) * (9 / 5) + 32)
    this.weather = data.weather[0].description
    this.icon = data.weather[0].icon
  }

  get weatherTemplateC() {
    return `
    <h3 id="temp">${this.mainc} °C</h3>
    <h3>${this.weather}</h3>
    <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="">
    `
  }

  get weatherTemplateF() {
    return `
    <h3 id="temp"> ${this.mainf} °F</h3>
    <h3>${this.weather}</h3>
    <img src="https://openweathermap.org/img/wn/${this.icon}.png" alt="">
    `
  }

}