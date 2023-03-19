import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxTodoApi } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    // console.log('omg we cooking up the weather');
    const res = await SandboxTodoApi.get('/weather')
    // console.log(res.data);
    appState.activeWeather = new Weather(res.data)
  }

}

export const weathersService = new WeathersService();