import type { SingleResponseDto } from "@music-catalog/shared";

import { getSingles } from "../api/catalog-api";

export class CatalogService {

  public async getSingles(): Promise<SingleResponseDto[]> {
    return getSingles();
  }

}

export const catalogService = new CatalogService();