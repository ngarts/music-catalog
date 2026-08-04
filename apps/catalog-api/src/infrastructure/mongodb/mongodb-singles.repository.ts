import type { Collection, Db } from "mongodb";

import type { Single } from "../../domain/entities/single.js";
import type { SinglesRepository } from "../../domain/repositories/singles.repository.js";

export class MongoSinglesRepository implements SinglesRepository {
  private readonly collection: Collection<Single>;

  constructor(database: Db) {
    this.collection = database.collection<Single>("singles");
  }

  public async findAll(): Promise<Single[]> {
    return this.collection
      .find(
        {},
        {
          projection: {
            _id: 0
          }
        }
      )
      .sort({
        id: 1
      })
      .toArray();
  }

  public async findById(id: string): Promise<Single | null> {
    return this.collection.findOne(
      {
        id
      },
      {
        projection: {
          _id: 0
        }
      }
    );
  }
}