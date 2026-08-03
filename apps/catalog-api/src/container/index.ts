import { SinglesController } from "../controllers/singles.controller.js";
import { SinglesRepository } from "../repositories/singles.repository.js";
import { SinglesService } from "../services/singles.service.js";

const singlesRepository = new SinglesRepository();
const singlesService = new SinglesService(singlesRepository);

export const singlesController = new SinglesController(singlesService);