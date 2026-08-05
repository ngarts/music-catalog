import { environment } from "../config/environment";
import type { SingleResponseDto } from "@music-catalog/shared";

export async function getSingles(): Promise<SingleResponseDto[]> {
  const response = await fetch(`${environment.catalogApiUrl}/singles`);

  if (!response.ok) {
    throw new Error(`Unable to load singles: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<SingleResponseDto[]>;
}