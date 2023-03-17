import { appState } from "../AppState.js";
import { photosService } from "../Services/PhotosService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawPhoto() {
  let photo = appState.activePhoto
  document.body.style.backgroundImage = `url(${photo.largeImgUrl})`
  setText('author', photo.author)
  // FIXME THIS is where I left off, i was getting the image and author name right and then moving to weather.
}

export class PhotosController {
  constructor() {
    // console.log('hello from photos controller');
    this.getPhoto()
    appState.on('activePhoto', _drawPhoto)
  }

  async getPhoto() {
    try {
      photosService.getPhoto()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}