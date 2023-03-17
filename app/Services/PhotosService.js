import { appState } from "../AppState.js";
import { Photo } from "../Models/Photo.js";
import { SandboxTodoApi } from "./AxiosService.js";


class PhotosService {
  async getPhoto() {
    // console.log('getting photo');
    const res = await SandboxTodoApi.get('/images')
    // console.log('Got Photo', res.data);
    appState.activePhoto = new Photo(res.data)
    // console.log(appState.activePhoto);
  }

}

export const photosService = new PhotosService()