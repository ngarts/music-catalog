import type { Single } from "../models/single.js";

export interface SinglesRepository {

  findAll(): Promise<Single[]>;

  findById(id: string): Promise<Single | null>;

}