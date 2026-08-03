import type { FastifyPluginAsync } from "fastify";

import type { SinglesController } from "../controllers/singles.controller.js";

export function buildSinglesRoutes(
  controller: SinglesController
): FastifyPluginAsync {
  return async (app) => {
    app.get("/api/singles", async () => {
      return controller.getSingles();
    });

    app.get<{ Params: { id: string } }>(
      "/api/singles/:id",
      async (request, reply) => {
        return controller.getSingleById(request, reply);
      }
    );
  };
}