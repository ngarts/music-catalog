import type { Single } from "../models/single.js";

export class SinglesRepository {
  private readonly singles: Single[] = [
    {
      id: 1,
      title: "Norma Jean",
      year: 2026
    },
    {
      id: 2,
      title: "Gavetta",
      year: 2025
    }
  ];

  public findAll(): Single[] {
    return this.singles;
  }
}