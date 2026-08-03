import type { FastifyPluginAsync } from "fastify";

import { singlesController } from "../container/index.js";
import { healthRoutes } from "./health.routes.js";
import { buildSinglesRoutes } from "./singles.routes.js";

export const routes: FastifyPluginAsync = async (app) => {
  await app.register(healthRoutes);
  await app.register(buildSinglesRoutes(singlesController));
};