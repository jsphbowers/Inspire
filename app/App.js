import { PhotosController } from "./Controllers/PhotosController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController();
  photosController = new PhotosController();
  weathersController = new WeathersController();
  quotesController = new QuotesController();
}

window["app"] = new App();
