import { SinglesController } from "../controllers/singles.controller.js";
import { MemorySinglesRepository } from "../infrastructure/memory/memory-singles.repository.js";
import { SinglesService } from "../services/singles.service.js";

const singlesRepository = new MemorySinglesRepository();
const singlesService = new SinglesService(singlesRepository);

export const singlesController = new SinglesController(singlesService);