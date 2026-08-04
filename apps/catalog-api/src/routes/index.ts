import type { FastifyPluginAsync } from "fastify";

import type { ApplicationContainer } from "../container/index.js";
import { healthRoutes } from "./health.routes.js";
import { buildSinglesRoutes } from "./singles.routes.js";

export function buildRoutes(container: ApplicationContainer): FastifyPluginAsync {
  return async (app) => {
    await app.register(healthRoutes);
    await app.register(buildSinglesRoutes(container.singlesController));
  }
}
