import { initialSingles } from "../../domain/data/initial-singles.js";
import type { Single } from "../../domain/models/single.js";
import type { SinglesRepository } from "../../domain/repositories/singles.repository.js";

export class MemorySinglesRepository implements SinglesRepository {

  private readonly singles: Single[];

  constructor(singles: Single[] = initialSingles) {
    this.singles = structuredClone(singles);
  }

  async findAll(): Promise<Single[]> {
    return this.singles;
  }
  async findById(id: string): Promise<Single | null> {
    return this.singles.find((single) => single.id === id) ?? null;
  }

}