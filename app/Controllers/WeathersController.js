import { appState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeatherC() {
  // console.log('look at this');
  let weather = appState.activeWeather
  setHTML('weather', weather.weatherTemplateC)
}
export class WeathersController {
  constructor() {
    // console.log('hello from weather');
    this.getWeather()
    appState.on('activeWeather', _drawWeatherC)
  }

  async getWeather() {
    try {
      // console.log('sending to kitchen');
      weathersService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  toggleWeather() {
    if (appState.activeWeather)

  }
}