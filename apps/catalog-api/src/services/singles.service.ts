export interface Single {
  id: number;
  title: string;
  year: number;
}

export class SinglesService {
  public getAll(): Single[] {
    return [
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
  }
}