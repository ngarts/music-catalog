import type { Single } from "../models/single.js";
import { SinglesRepository } from "../repositories/singles.repository.js";

export class SinglesService {
  constructor(
    private readonly repository: SinglesRepository
  ) {}

  public getAll(): Single[] {
    return this.repository.findAll();
  }

  public getById(id: string): Single | undefined {
    return this.repository.findById(id);
  }
}