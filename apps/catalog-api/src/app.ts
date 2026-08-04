import cors from "@fastify/cors";
import Fastify, { type FastifyInstance, type RawServerDefault } from "fastify";

import type { ApplicationContainer } from "./container/index.js";
import { buildRoutes } from "./routes/index.js";

export function buildApp(
  container: ApplicationContainer
): FastifyInstance {
  const app = Fastify({
    logger: true
  });

  void app.register(cors, {
    origin: "http://localhost:5173"
  });

  void app.register(buildRoutes(container));

  return app;
}