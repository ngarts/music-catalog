import type { SingleResponseDto } from "@music-catalog/shared";

import { getSingles } from "../api/catalog-api";

export class SinglesService {

  public async getSingles(): Promise<SingleResponseDto[]> {
    return getSingles();
  }

}

export const singlesService = new SinglesService();