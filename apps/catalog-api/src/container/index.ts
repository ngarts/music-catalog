import type { Db } from "mongodb";

import { SinglesController } from "../controllers/singles.controller.js";
import { MongoSinglesRepository } from "../infrastructure/mongodb/mongodb-singles.repository.js";
import { SinglesService } from "../services/singles.service.js";

export interface ApplicationContainer {
    singlesController: SinglesController;
}

export function buildContainer(database: Db): ApplicationContainer {
    const singlesRepository = new MongoSinglesRepository(database);
    const singlesService = new SinglesService(singlesRepository);
    const singlesController = new SinglesController(singlesService);

    return {
        singlesController
    };
}