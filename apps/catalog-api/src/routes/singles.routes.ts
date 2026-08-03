import type { FastifyPluginAsync } from "fastify";
import { SinglesController } from "../controllers/singles.controller.js";

const controller = new SinglesController();

export const singlesRoutes: FastifyPluginAsync = async (app) => {
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