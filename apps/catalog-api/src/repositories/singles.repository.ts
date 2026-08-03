import type { Single } from "../models/single.js";

export class SinglesRepository {
  private readonly singles: Single[] = [
  {
    id: "NGA-001-DIG",
    catalogNumber: "NGA-001-DIG",
    slug: "tra-me-e-te",
    title: "Tra me e te",
    year: 2019
  },
  {
    id: "NGA-002-DIG",
    catalogNumber: "NGA-002-DIG",
    slug: "fuoco-amico",
    title: "Fuoco Amico",
    year: 2021
  },
  {
    id: "NGA-003-DIG",
    catalogNumber: "NGA-003-DIG",
    slug: "avrei-voluto-dirti-che",
    title: "Avrei voluto dirti che",
    year: 2022
  },
  {
    id: "NGA-004-DIG",
    catalogNumber: "NGA-004-DIG",
    slug: "dammi-uno-strappo-ancora",
    title: "Dammi uno strappo ancora",
    year: 2021
  },
  {
    id: "NGA-005-DIG",
    catalogNumber: "NGA-005-DIG",
    slug: "le-conseguenze-dell-amore",
    title: "Le conseguenze dell'amore",
    year: 2023
  },
  {
    id: "NGA-006-DIG",
    catalogNumber: "NGA-006-DIG",
    slug: "le-tue-mani-tra-le-mie",
    title: "Le tue mani tra le mie",
    year: 2024
  },
  {
    id: "NGA-007-DIG",
    catalogNumber: "NGA-007-DIG",
    slug: "gavetta",
    title: "Gavetta",
    year: 2025
  },
  {
    id: "NGA-008-DIG",
    catalogNumber: "NGA-008-DIG",
    slug: "norma-jean",
    title: "Norma Jean",
    year: 2026
  }
];

  public findAll(): Single[] {
    return this.singles;
  }

  public findById(id: string): Single | undefined {
    return this.singles.find((single) => single.id === id);
  }

}