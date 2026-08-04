import type {
  FastifyReply,
  FastifyRequest
} from "fastify";

import { SinglesService } from "../services/singles.service.js";
import { toSingleResponse, toSinglesResponse } from "../mappers/single.mapper.js";

interface GetSingleParams {
  id: string;
}

export class SinglesController {
  constructor(
    private readonly service: SinglesService
  ) {}

  public async getSingles() {
    const singles = await this.service.getAll();
    return toSinglesResponse(singles);
  }

  public async getSingleById(
    request: FastifyRequest<{ Params: GetSingleParams }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;

    const single = await this.service.getById(id);

    if (!single) {
      return reply.status(404).send({
        error: "Single not found"
      });
    }

    return reply.send(toSingleResponse(single));
  }
}