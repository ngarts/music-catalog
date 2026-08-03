import type { FastifyPluginAsync } from "fastify";
import { healthRoutes } from "./health.routes.js";

export const routes: FastifyPluginAsync = async (app) => {
  await app.register(healthRoutes);
};