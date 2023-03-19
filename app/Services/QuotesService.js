import { appState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";
import { SandboxTodoApi } from "./AxiosService.js";

class QuotesService {
  async getQuote() {
    console.log('we getting the quote');
    const res = await SandboxTodoApi('/quotes')
    // console.log(res.data);
    appState.activeQuote = new Quote(res.data)
    // console.log(appState.activeQuote);
  }

}

export const quotesService = new QuotesService();