import cors from "@fastify/cors";
import Fastify, { type FastifyInstance, type RawServerDefault } from "fastify";

import type { ApplicationContainer } from "./container/index.js";
import { buildRoutes } from "./routes/index.js";

import type { Environment } from "./config/environment.js";

export function buildApp(
  container: ApplicationContainer,
  environment: Environment
): FastifyInstance {
  const app = Fastify({
    logger: true
  });

  void app.register(cors, {
    origin: environment.corsOrigin
  });

  void app.register(buildRoutes(container));

  return app;
}