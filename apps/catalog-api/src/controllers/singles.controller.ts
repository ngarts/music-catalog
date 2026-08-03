import type {
  FastifyReply,
  FastifyRequest
} from "fastify";

import { SinglesService } from "../services/singles.service.js";

interface GetSingleParams {
  id: string;
}

export class SinglesController {
  constructor(
    private readonly service: SinglesService
  ) {}

  public async getSingles() {
    return this.service.getAll();
  }

  public async getSingleById(
    request: FastifyRequest<{ Params: GetSingleParams }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;

    const single = this.service.getById(id);

    if (!single) {
      return reply.status(404).send({
        error: "Single not found"
      });
    }

    return reply.send(single);
  }
}