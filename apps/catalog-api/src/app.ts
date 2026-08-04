import Fastify, { type FastifyInstance } from "fastify";

import type { ApplicationContainer } from "./container/index.js";
import { buildRoutes } from "./routes/index.js";

export function buildApp(
  container: ApplicationContainer
): FastifyInstance {
  const app = Fastify({
    logger: true
  });

  void app.register(buildRoutes(container));

  return app;
}