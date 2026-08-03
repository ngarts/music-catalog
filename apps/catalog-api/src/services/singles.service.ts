import type { Single } from "../models/single.js";
import { SinglesRepository } from "../repositories/singles.repository.js";

export class SinglesService {
  constructor(
    private readonly repository = new SinglesRepository()
  ) {}

  public getAll(): Single[] {
    return this.repository.findAll();
  }
}