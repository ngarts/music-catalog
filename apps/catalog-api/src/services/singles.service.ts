import type { Single } from "../domain/entities/single.js";
import type { SinglesRepository } from "../domain/repositories/singles.repository.js";

export class SinglesService {
  constructor(
    private readonly repository: SinglesRepository
  ) {}

  public async getAll(): Promise<Single[]> {
    return this.repository.findAll();
  }

  public async getById(id: string): Promise<Single | null> {
    return this.repository.findById(id);
  }
}