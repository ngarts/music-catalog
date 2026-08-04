import type { Single } from "../entities/single.js";

export interface SinglesRepository {

  findAll(): Promise<Single[]>;

  findById(id: string): Promise<Single | null>;

}