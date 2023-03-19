import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuote() {
  let quote = appState.activeQuote
  let template = quote.quoteTemplate
  setHTML('quote', template)
}

function _drawClock() {
  let time = appState.activeQuote
  let template = time.clockTemplate
  time.clock = new Date()
  setHTML('clock', template)
}

export class QuotesController {
  constructor() {
    console.log('hello from quotes');
    this.getQuote()
    appState.on('activeQuote', _drawQuote)
    appState.on('activeQuote', _drawClock)
    setInterval(_drawClock, 1000)
  }

  async getQuote() {
    try {
      quotesService.getQuote()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}