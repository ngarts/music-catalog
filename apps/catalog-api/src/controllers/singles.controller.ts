import { SinglesService } from "../services/singles.service.js";

export class SinglesController {
  constructor(
    private readonly service = new SinglesService()
  ) {}

  public async getSingles() {
    return this.service.getAll();
  }
}